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
    const { cart } = await request.json();
    const lineItems = cart.map(product => ({
        price_data: {
            currency: 'usd',
            product_data: { name: product.name },
            unit_amount: product.price * 100,
        },
        quantity: 1,
    }));
    
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: import.meta.env.VITE_SUCCESS_URL,
            cancel_url: import.meta.env.VITE_CANCEL_URL,
        });
        return json({ id: session.id });
    } catch (err) {
        return json({ error: 'Checkout session creation failed' }, { status: 500 });
    }
}
