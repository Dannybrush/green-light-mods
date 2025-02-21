<script lang="ts">
    export let products: Array<{ id: number; name: string; price: number; description: string; imageUrl: string }>;
  </script>
  
  <main>
    <h1>Shop Our Products</h1>
    <div class="product-grid">
      {#each products as product}
        <div class="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span class="price">${product.price}</span>
          <button>Add to Cart</button>
        </div>
      {/each}
    </div>
  </main>
  
  <style>
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
  
    .product-card {
      text-align: center;
      padding: 15px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    .price {
      font-size: 1.2em;
      color: #00B4D8;
      margin-top: 10px;
    }
  </style>
  