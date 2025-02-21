<script>
    // Any needed JavaScript or Svelte stores can be added here
  </script>
  
  <style>
    /* Glowing Text Effect */
    .glow-effect {
      text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
    }
  
    /* Pedal Card Hover Effect */
    .pedal-card {
      transition: transform 0.3s ease;
    }
  
    .pedal-card:hover {
      transform: scale(1.05);
    }
  
    /* Section Title Styling */
    .section-title {
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      color: #fff;
      text-shadow: 0 0 10px #00FF00;
    }
  
    /* Custom Pedal Details Styling */
    .pedal-details {
      font-size: 1.25rem;
      color: #90E0EF;
    }
  
    /* CTA Button Styling */
    .cta-button {
      background-color: #00FF00;
      color: black;
      padding: 15px 30px;
      border-radius: 8px;
      font-size: 1.25rem;
      font-weight: bold;
      transition: all 0.3s ease;
    }
  
    .cta-button:hover {
      background-color: black;
      color: #00FF00;
      box-shadow: 0 0 15px #00FF00;
    }
  </style>
  
  <main class="bg-black text-white min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center h-screen" style="background-image: url('/path-to-your-hero-image.jpg');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex justify-center items-center h-full text-center">
        <div class="hero-content">
          <h1 class="text-5xl font-bold text-green-500 glow-effect">Custom Pedals</h1>
          <p class="text-2xl mt-4 text-white glow-effect">Design the perfect sound for your guitar with our handcrafted custom pedals.</p>
        </div>
      </div>
    </section>
  
    <!-- Introduction Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto text-center">
        <h2 class="section-title glow-effect">Our Custom Pedals</h2>
        <p class="mt-6 text-lg text-gray-300">
          At Green Light Mods, we specialize in designing and crafting unique, custom guitar pedals that fit your sound and style. Whether you’re looking for a specific tone, effect, or look, we can bring your vision to life with precision and quality craftsmanship.
        </p>
      </div>
    </section>
  
    <!-- Featured Pedals Section -->
    <section class="py-16 bg-black">
      <div class="container mx-auto text-center">
        <h2 class="section-title glow-effect">Featured Custom Pedals</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          <!-- Pedal 1 -->
          <div class="pedal-card bg-gray-800 rounded-lg p-6">
            <img src="/path-to-pedal-1-image.jpg" alt="Pedal 1" class="w-full h-64 object-cover rounded-lg mb-6">
            <h3 class="text-2xl font-semibold text-green-500 glow-effect">Distortion Xtreme</h3>
            <p class="pedal-details">A high-gain distortion pedal for aggressive and powerful tones.</p>
            <button class="cta-button mt-6">Order Now</button>
          </div>
          <!-- Pedal 2 -->
          <div class="pedal-card bg-gray-800 rounded-lg p-6">
            <img src="/path-to-pedal-2-image.jpg" alt="Pedal 2" class="w-full h-64 object-cover rounded-lg mb-6">
            <h3 class="text-2xl font-semibold text-green-500 glow-effect">Echo Reverb</h3>
            <p class="pedal-details">A lush, atmospheric reverb with an echo effect to add depth to your sound.</p>
            <button class="cta-button mt-6">Order Now</button>
          </div>
          <!-- Pedal 3 -->
          <div class="pedal-card bg-gray-800 rounded-lg p-6">
            <img src="/path-to-pedal-3-image.jpg" alt="Pedal 3" class="w-full h-64 object-cover rounded-lg mb-6">
            <h3 class="text-2xl font-semibold text-green-500 glow-effect">Fuzz Fury</h3>
            <p class="pedal-details">A heavy fuzz pedal that gives you a dirty, gritty tone for all your sonic needs.</p>
            <button class="cta-button mt-6">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Customization Process Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto text-center">
        <h2 class="section-title glow-effect">How It Works</h2>
        <p class="mt-6 text-lg text-gray-300">
          Our custom pedal design process is simple and collaborative. Here's how we do it:
        </p>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="flex flex-col items-center">
            <div class="bg-green-500 text-white p-6 rounded-lg mb-4">
              <h3 class="text-xl font-bold">Step 1: Consultation</h3>
              <p>We discuss your needs, style, and desired sound to understand your vision.</p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="bg-green-500 text-white p-6 rounded-lg mb-4">
              <h3 class="text-xl font-bold">Step 2: Design</h3>
              <p>We create a unique design tailored to your specific requirements.</p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="bg-green-500 text-white p-6 rounded-lg mb-4">
              <h3 class="text-xl font-bold">Step 3: Crafting</h3>
              <p>Our expert team handcrafts the pedal with precision and care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Contact/Request a Quote Section -->
    <section class="py-16 bg-black">
      <div class="container mx-auto text-center">
        <h2 class="section-title glow-effect">Request a Custom Pedal</h2>
        <p class="mt-6 text-lg text-gray-300">
          Interested in ordering a custom pedal or learning more about our products? Fill out the form below to get in touch with us.
        </p>
        <form class="mt-8 space-y-6 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" class="w-full p-4 text-black rounded-lg" required>
          <input type="email" placeholder="Your Email" class="w-full p-4 text-black rounded-lg" required>
          <textarea placeholder="Describe Your Custom Pedal" class="w-full p-4 text-black rounded-lg" required></textarea>
          <button type="submit" class="cta-button mt-6">Submit</button>
        </form>
      </div>
    </section>
  
    <!-- Footer Section -->
    <footer class="py-8 bg-black text-center">
      <p class="text-white glow-effect">&copy; 2025 Green Light Mods. All rights reserved.</p>
      <div class="mt-4">
        <a href="#" class="text-green-500 hover:text-green-600 mx-4 glow-effect">Instagram</a>
        <a href="#" class="text-green-500 hover:text-green-600 mx-4 glow-effect">Facebook</a>
      </div>
    </footer>
  </main>
  