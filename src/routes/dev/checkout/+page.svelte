<script lang="ts">
    export let orderSummary: { total: number };
  </script>
  
  <main>
    <h1>Checkout</h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" required />
      <!-- Other fields like address, email, etc. -->
  
      <div class="order-summary">
        <h2>Order Summary</h2>
        <p>Total: ${orderSummary.total}</p>
      </div>
  
      <button type="submit">Complete Order</button>
    </form>
  </main>
  
  <style>
    /* Styling for the checkout form */
    .order-summary {
      margin-top: 20px;
    }
  </style>
  