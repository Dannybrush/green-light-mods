<script>
    // You can include any needed JavaScript or Svelte stores here
  </script>
  
  <style>
    /* Custom green LED effect for glowing elements */
    .glow-effect {
      text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
      transition: text-shadow 0.3s ease-in-out;
    }
  
    .glow-effect:hover {
      text-shadow: 0 0 20px #00FF00, 0 0 30px #00FF00, 0 0 40px #00FF00;
    }
  
    .button-glow {
      background-color: #00FF00;
      border: 2px solid #00FF00;
      color: black;
      transition: all 0.3s ease-in-out;
    }
  
    .button-glow:hover {
      background-color: black;
      color: #00FF00;
      border: 2px solid #00FF00;
      box-shadow: 0 0 15px #00FF00;
    }
  
    /* Border around the company name */
    .company-name {
      display: inline-block;
      padding: 20px;
      border: 4px solid #00FF00;
      border-radius: 10px;
      font-size: 5rem;
      font-weight: 800;
      text-align: center;
      color: #00FF00;
      text-shadow: 0 0 20px #00FF00, 0 0 30px #00FF00;
      -webkit-text-stroke: 2px black; /* Outline for the text */
      transition: border 0.3s ease-in-out;
    }
  
    .company-name:hover {
      border-color: #00FF00;
      box-shadow: 0 0 20px #00FF00, 0 0 30px #00FF00;
    }
  
    /* Hero Section adjustments */
    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 20px;
    }
  
    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      margin-top: 20px;
    }
  
    .hero-subtitle {
      font-size: 1.25rem;
      color: #fff;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 40px;
    }
  </style>
  
  <main class="bg-black text-white min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center h-screen" style="background-image: url('/path-to-your-image-or-video.mp4');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex justify-center items-center h-full">
        <div class="hero-content">
          <!-- Company Name with Border and Outline -->
          <div class="company-name glow-effect">
            Green Light Mods
          </div>
          <!-- Tagline -->
          <p class="hero-title glow-effect">Custom Guitar Pedals with Precision, Quality, and Style</p>
          <!-- Call-to-Action Button -->
          <p class="hero-subtitle glow-effect">Unleash your sound with our handcrafted pedals</p>
          <button class="mt-8 py-3 px-6 button-glow font-bold rounded hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  
    <!-- Product Highlights Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-white glow-effect">Featured Pedals</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <!-- Featured Pedal 1 -->
          <div class="pedal-card hover:scale-105 transition-transform">
            <img src="/path-to-pedal-image-1.jpg" alt="Pedal 1" class="w-full rounded-lg">
            <h3 class="mt-4 text-xl font-semibold text-green-500 glow-effect">Pedal Name 1</h3>
            <p class="text-white">A brief description of the pedal’s unique features.</p>
          </div>
          <!-- Featured Pedal 2 -->
          <div class="pedal-card hover:scale-105 transition-transform">
            <img src="/path-to-pedal-image-2.jpg" alt="Pedal 2" class="w-full rounded-lg">
            <h3 class="mt-4 text-xl font-semibold text-green-500 glow-effect">Pedal Name 2</h3>
            <p class="text-white">A brief description of the pedal’s unique features.</p>
          </div>
          <!-- Featured Pedal 3 -->
          <div class="pedal-card hover:scale-105 transition-transform">
            <img src="/path-to-pedal-image-3.jpg" alt="Pedal 3" class="w-full rounded-lg">
            <h3 class="mt-4 text-xl font-semibold text-green-500 glow-effect">Pedal Name 3</h3>
            <p class="text-white">A brief description of the pedal’s unique features.</p>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Sound Demos Section -->
    <section class="py-16 bg-black">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-green-500 glow-effect">Sound Demos</h2>
        <div class="mt-8">
          <!-- Embed Audio Player or Video -->
          <audio controls class="mx-auto">
            <source src="/path-to-your-audio-file.mp3" type="audio/mp3">
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  
    <!-- Footer -->
    <footer class="py-8 bg-black text-center">
      <p class="text-white glow-effect">&copy; 2025 Green Light Mods. All rights reserved.</p>
      <div class="mt-4">
        <a href="#" class="text-green-500 hover:text-green-600 mx-4 glow-effect">Instagram</a>
        <a href="#" class="text-green-500 hover:text-green-600 mx-4 glow-effect">Facebook</a>
      </div>
    </footer>
  </main>
  