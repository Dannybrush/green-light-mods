// src/routes/shop/+page.svelte
<script>
  import { onMount } from 'svelte';
  import { supabase } from '../../lib/supabaseClient';
  import { user } from '../../stores/authStore';
  import { goto } from '$app/navigation';
  import { loadStripe } from '@stripe/stripe-js';

  let products = [];
  let cart = [];
  let userSession;
  let stripe;

  onMount(async () => {
    user.subscribe((session) => {
      userSession = session;
    });

    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Error fetching products:', error);
    } else {
      products = data;
    }

    stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  });

  function addToCart(product) {
    cart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  async function checkout() {
    if (!userSession) {
      alert('Please log in to proceed to checkout');
      goto('/login');
      return;
    }

    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    try {
      const { data, error } = await supabase.from('orders').insert({
        user_id: userSession.id,
        items: cart,
        total: totalAmount,
        status: 'pending'
      }).select();
      
      if (error) throw error;
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart, orderId: data[0].id })
      });
      
      const session = await response.json();
      
      if (!response.ok) throw new Error(session.error);
      
      stripe.redirectToCheckout({ sessionId: session.id });
    } catch (err) {
      console.error('Checkout failed:', err);
      alert('Error processing checkout. Please try again.');
    }
  }
</script>

<style>
  .shop-container { background-color: #111; color: #fff; padding: 20px; }
  .product-card { background: #222; padding: 15px; border-radius: 8px; }
  .cart-button { background: #00FF00; color: black; padding: 10px; border-radius: 5px; cursor: pointer; transition: 0.3s; }
  .cart-button:hover { background: #00CC00; }
</style>

<main class="shop-container">
  <h1>Shop</h1>
  <div class="grid grid-cols-3 gap-4">
    {#each products as product}
      <div class="product-card">
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <button class="cart-button" on:click={() => addToCart(product)}>Add to Cart</button>
      </div>
    {/each}
  </div>
  <button class="cart-button mt-4" on:click={checkout}>Proceed to Checkout</button>
</main>
