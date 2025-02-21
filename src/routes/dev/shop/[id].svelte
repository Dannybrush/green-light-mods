<script lang="ts">
    // Import the page store to get the `id` from the URL
    import { page } from '$app/stores';
  
    // Access the product ID from the URL
    let productId = $page.params.id;
  
    // Fetch the product data using this productId
    // You might fetch this from Supabase or your own API
    let product = null;
    
    // Example: Fetch product data (you would fetch it dynamically based on the productId)
    import { supabase } from '$lib/supabaseClient'; // Assuming you have Supabase set up
    
    async function fetchProduct() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single();
        
      if (error) {
        console.error(error);
      } else {
        product = data;
      }
    }
  
    // Fetch the product data when the component is mounted
    fetchProduct();
  </script>
  
  <main>
    {#if product}
      <div class="product-detail">
        <img src={product.imageUrl} alt={product.name} />
        <div class="product-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span class="price">${product.price}</span>
          <button>Add to Cart</button>
        </div>
      </div>
    {:else}
      <p>Loading product details...</p>
    {/if}
  </main>
  
  <style>
    .product-detail {
      display: flex;
      gap: 20px;
      align-items: center;
      padding: 20px;
    }
  
    .product-info {
      max-width: 600px;
    }
  
    .price {
      font-size: 1.5em;
      color: #00B4D8;
    }
  </style>
  