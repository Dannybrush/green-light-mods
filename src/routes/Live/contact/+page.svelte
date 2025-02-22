<!-- src/routes/contact/+page.svelte -->
<script>
    let name = "";
    let email = "";
    let message = "";
    let success = false;
    let loading = false;
  
    async function handleSubmit() {
      loading = true;
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (response.ok) {
        success = true;
        name = email = message = "";
      }
      loading = false;
    }
  </script>
  
  <style>
    .contact-container {
      background: linear-gradient(135deg, #111, #222);
      color: #fff;
      padding: 60px 20px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    h1 {
      font-size: 3rem;
      color: #00FF00;
      text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00;
      margin-bottom: 40px;
    }
    
    form {
      background: #1a1a1a;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
      width: 100%;
      max-width: 500px;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    label {
      display: block;
      margin-bottom: 8px;
      color: #00FF00;
      font-weight: bold;
      text-shadow: 0 0 5px #00FF00;
    }
    
    input, textarea {
      width: 100%;
      padding: 12px;
      border-radius: 8px;
      border: 2px solid #333;
      background: #222;
      color: #fff;
      transition: border 0.3s ease, box-shadow 0.3s ease;
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: #00FF00;
      box-shadow: 0 0 10px #00FF00;
    }
    
    .button {
      background: #00FF00;
      color: #000;
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: bold;
      transition: background 0.3s ease, box-shadow 0.3s ease;
      width: 100%;
    }
    
    .button:hover {
      background: #00cc00;
      box-shadow: 0 0 15px #00FF00;
    }
    
    .success-message {
      color: #00FF00;
      font-size: 1.2rem;
      text-align: center;
      margin-top: 20px;
      animation: glow 1s infinite alternate;
    }
    
    @keyframes glow {
      from { text-shadow: 0 0 10px #00FF00; }
      to { text-shadow: 0 0 20px #00FF00; }
    }
  </style>
  
  <main class="contact-container">
    <h1>Contact Us</h1>
    
    {#if success}
      <div class="success-message">Thank you! Your message has been sent.</div>
    {:else}
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" type="text" bind:value={name} placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" bind:value={email} placeholder="Your Email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" bind:value={message} placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="button" disabled={loading}>
          {#if loading}
            Sending...
          {:else}
            Send Message
          {/if}
        </button>
      </form>
    {/if}
  </main>
  