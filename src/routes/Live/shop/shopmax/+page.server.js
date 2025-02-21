// src/routes/shop/+page.server.js
import { json } from '@sveltejs/kit';
import { supabase } from '../../lib/supabaseClient';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY);

export async function GET() {
    const { data, error } = await supabase.from('products').select('*');
    if (error) return json({ error: 'Error fetching products' }, { status: 500 });
    return json(data);
}

export async function POST({ request }) {
    try {
        const { cart } = await request.json();
        if (!cart || !Array.isArray(cart) || cart.length === 0) {
            return json({ error: 'Invalid cart data' }, { status: 400 });
        }

        // Validate cart items with database
        const { data: products, error } = await supabase.from('products').select('*');
        if (error) return json({ error: 'Error fetching product data' }, { status: 500 });

        const validCart = cart.map(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) throw new Error(`Invalid product: ${item.id}`);
            return {
                price_data: {
                    currency: 'usd',
                    product_data: { name: product.name },
                    unit_amount: product.price * 100,
                },
                quantity: item.quantity > 0 ? item.quantity : 1,
            };
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: validCart,
            mode: 'payment',
            success_url: import.meta.env.VITE_SUCCESS_URL,
            cancel_url: import.meta.env.VITE_CANCEL_URL,
        });

        return json({ id: session.id });
    } catch (err) {
        console.error('Checkout Error:', err);
        return json({ error: 'Checkout session creation failed' }, { status: 500 });
    }
}
