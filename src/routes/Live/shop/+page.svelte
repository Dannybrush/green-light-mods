<script>
    import { onMount } from 'svelte';
  
    let products = [
      { id: 1, name: 'Distortion Xtreme', price: 199.99, category: 'Distortion', image: '/path-to-distortion-image.jpg', description: 'A high-gain distortion pedal for aggressive tones.' },
      { id: 2, name: 'Echo Reverb', price: 159.99, category: 'Reverb', image: '/path-to-echo-image.jpg', description: 'A lush reverb pedal with an echo effect.' },
      { id: 3, name: 'Fuzz Fury', price: 129.99, category: 'Fuzz', image: '/path-to-fuzz-image.jpg', description: 'A heavy fuzz pedal with a gritty tone.' },
      // Add more products here
    ];
  
    let cart = [];
    let filteredProducts = [...products];
    let selectedCategory = 'All';
    let sortingOption = 'Price: Low to High';
  
    // Get cart from localStorage if available
    onMount(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      cart = savedCart;
    });
  
    // Add product to cart
    const addToCart = (product) => {
      cart = [...cart, product];
      localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
      alert(`${product.name} added to cart!`);
    };
  
    // Filter products by category
    const filterByCategory = (category) => {
      selectedCategory = category;
      if (category === 'All') {
        filteredProducts = [...products];
      } else {
        filteredProducts = products.filter((product) => product.category === category);
      }
    };
  
    // Sort products by selected option
    const sortProducts = (option) => {
      sortingOption = option;
      if (option === 'Price: Low to High') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else {
        filteredProducts.sort((a, b) => b.price - a.price);
      }
    };
  </script>
  
  <style>
    .shop-section {
      background-color: #111;
      color: #fff;
      padding: 4rem 0;
    }
  
    .product-card {
      background-color: #222;
      border-radius: 10px;
      padding: 1.5rem;
      transition: transform 0.3s ease;
      overflow: hidden;
      text-align: center;
    }
  
    .product-card:hover {
      transform: scale(1.05);
    }
  
    .product-title {
      font-size: 1.5rem;
      color: #00FF00;
      text-shadow: 0 0 5px #00FF00, 0 0 10px #00FF00;
    }
  
    .product-price {
      font-size: 1.25rem;
      color: #90E0EF;
    }
  
    .add-to-cart-btn {
      background-color: #00FF00;
      color: black;
      padding: 12px 24px;
      font-weight: bold;
      border-radius: 6px;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }
  
    .add-to-cart-btn:hover {
      background-color: black;
      color: #00FF00;
      box-shadow: 0 0 10px #00FF00;
    }
  
    .filters {
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;
      padding: 0 2rem;
    }
  
    .filter-option {
      background-color: #222;
      border: 1px solid #444;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      color: #fff;
      transition: background-color 0.3s ease;
    }
  
    .filter-option:hover {
      background-color: #00FF00;
    }
  
    .cart-summary {
      margin-top: 2rem;
    }
  
    .cart-summary ul {
      list-style-type: none;
      padding: 0;
    }
  
    .cart-summary li {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  
    .cart-summary button {
      background-color: #00FF00;
      color: black;
      padding: 12px 24px;
      border-radius: 8px;
      margin-top: 1rem;
      font-weight: bold;
    }
  
    .cart-summary button:hover {
      background-color: black;
      color: #00FF00;
    }
  </style>
  
  <main class="shop-section">
    <!-- Filters Section -->
    <section class="filters">
      <div class="filter-option" on:click={() => filterByCategory('All')}>All Pedals</div>
      <div class="filter-option" on:click={() => filterByCategory('Distortion')}>Distortion</div>
      <div class="filter-option" on:click={() => filterByCategory('Reverb')}>Reverb</div>
      <div class="filter-option" on:click={() => filterByCategory('Fuzz')}>Fuzz</div>
      <div class="filter-option" on:click={() => sortProducts('Price: Low to High')}>Price: Low to High</div>
      <div class="filter-option" on:click={() => sortProducts('Price: High to Low')}>Price: High to Low</div>
    </section>
  
    <!-- Product Grid -->
    <section class="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {#each filteredProducts as product}
        <div class="product-card">
          <img src={product.image} alt={product.name} class="w-full h-48 object-cover rounded-lg">
          <h3 class="product-title mt-4">{product.name}</h3>
          <p class="product-price mt-2">${product.price.toFixed(2)}</p>
          <p class="mt-4 text-gray-400">{product.description}</p>
          <button class="add-to-cart-btn" on:click={() => addToCart(product)}>Add to Cart</button>
        </div>
      {/each}
    </section>
  
    <!-- Cart Summary Section -->
    <section class="cart-summary">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl text-green-500">Your Cart</h2>
        {#if cart.length > 0}
          <ul class="mt-8 text-lg text-white">
            {#each cart as item}
              <li class="mt-4">{item.name} - ${item.price.toFixed(2)}</li>
            {/each}
          </ul>
          <button class="cta-button mt-6">Proceed to Checkout</button>
        {:else}
          <p class="mt-8 text-gray-400">Your cart is empty. Start shopping now!</p>
        {/if}
      </div>
    </section>
  </main>
  