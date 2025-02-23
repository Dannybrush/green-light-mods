<!-- src/routes/+page.svelte -->
<script>
    // You can add any interactivity here, such as dynamic product fetching
  </script>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      background-color: #111;
      color: #fff;
    }
  
    main {
      overflow-x: hidden;
    }
  
    /* Hero Section */
    .hero {
      position: relative;
      background: url('/assets/hero-bg.jpg') center/cover no-repeat;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.65);
    }
  
    .hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 800px;
      padding: 0 20px;
    }
  
    .hero-content h1 {
      font-size: 4rem;
      color: #00FF00;
      text-shadow: 0 0 20px #00FF00, 0 0 30px #00FF00;
      margin-bottom: 20px;
    }
  
    .hero-content p {
      font-size: 1.5rem;
      margin-bottom: 40px;
    }
  
    .cta-btn {
      background-color: #00FF00;
      color: #000;
      padding: 15px 30px;
      font-size: 1.25rem;
      font-weight: bold;
      border: none;
      border-radius: 8px;
      transition: all 0.3s ease;
      text-decoration: none;
    }
  
    .cta-btn:hover {
      background-color: #00cc00;
      box-shadow: 0 0 15px #00FF00;
    }
  
    /* Section Styles */
    .section {
      padding: 80px 20px;
    }
  
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: #00FF00;
      margin-bottom: 40px;
      text-shadow: 0 0 10px #00FF00;
    }
  
    .section p {
      text-align: center;
      font-size: 1.2rem;
      max-width: 800px;
      margin: 0 auto 40px;
    }
  </style>
  
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>Green Light Mods</h1>
        <p>Custom Guitar Pedals That Light Up Your Sound</p>
        <a href="/shop" class="cta-btn">Shop Now</a>
      </div>
    </section>
  
    <!-- Featured Products Section -->
    <section class="section">
      <h2 class="section-title">Featured Pedals</h2>
      <p>Experience our bestsellers and explore our innovative designs.</p>
      <!-- Add a responsive grid or slider here for product highlights -->
    </section>
  
    <!-- Sound Demos Section -->
    <section class="section" style="background-color: #222;">
      <h2 class="section-title">Sound Demos</h2>
      <p>Listen to our pedals in action and discover your perfect tone.</p>
      <!-- Embed audio demos or video clips here -->
    </section>
  
    <!-- Testimonials Section (Optional) -->
    <section class="section">
      <h2 class="section-title">Testimonials</h2>
      <p>Hear from musicians who have experienced the magic of our pedals.</p>
      <!-- Add a slider or grid with testimonials -->
    </section>
  </main>
  