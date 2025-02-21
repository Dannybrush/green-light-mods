<script lang="ts">
    export let cart: Array<{ id: number; name: string; quantity: number; price: number }>;
  </script>
  
  <main>
    <h1>Your Cart</h1>
    <ul>
      {#each cart as item}
        <li>
          <span>{item.name} - ${item.price}</span>
          <input type="number" bind:value={item.quantity} min="1" />
          <button>Remove</button>
        </li>
      {/each}
    </ul>
    <button>Proceed to Checkout</button>
  </main>
  
  <style>
    /* Keep consistent layout and styles */
  </style>
  