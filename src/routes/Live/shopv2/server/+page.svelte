// src/routes/shop/+page.svelte
<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let products = [];
  let cart = [];
  let stripe;

  async function fetchProducts() {
    try {
      const res = await fetch('/shop');
      if (!res.ok) throw new Error('Failed to fetch products');
      products = await res.json();
    } catch (err) {
      console.error('Error:', err);
    }
  }

  async function checkout() {
    try {
      const response = await fetch('/shop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart })
      });
      
      const session = await response.json();
      if (!response.ok) throw new Error(session.error);
      
      if (browser && stripe) {
        stripe.redirectToCheckout({ sessionId: session.id });
      }
    } catch (err) {
      console.error('Checkout failed:', err);
      alert('Error processing checkout. Please try again.');
    }
  }

  function addToCart(product) {
    cart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  onMount(async () => {
    await fetchProducts();
    if (browser) {
      const { loadStripe } = await import('@stripe/stripe-js');
      stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    }
  });
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
  <button class="cart-button mt-4" on:click={checkout} disabled={cart.length === 0}>Proceed to Checkout</button>
</main>
