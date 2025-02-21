<script>
    // You can include any needed JavaScript or Svelte stores here
  </script>
  
  <style>
    /* Glowing Text Effects */
    .glow-effect {
      text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
    }
  
    /* Text Outline for Titles */
    .outlined-title {
      -webkit-text-stroke: 1px black;
      color: #00FF00;
      font-weight: bold;
      text-shadow: 0 0 10px #00FF00;
    }
  
    /* Team Section Styles */
    .team-member {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
  
    .team-member img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 20px;
    }
  
    .team-member h3 {
      font-size: 1.5rem;
      color: #fff;
    }
  
    .team-member p {
      color: #90E0EF;
    }
  </style>
  
  <main class="bg-black text-white min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center h-screen" style="background-image: url('/path-to-your-hero-image.jpg');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex justify-center items-center h-full text-center">
        <div class="hero-content">
          <h1 class="text-5xl font-bold text-green-500 outlined-title glow-effect">About Green Light Mods</h1>
          <p class="text-2xl mt-4 text-white glow-effect">Crafting unique sound experiences with precision and creativity.</p>
        </div>
      </div>
    </section>
  
    <!-- Our Story Section -->
    <section class="py-16 px-6 bg-gray-900">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-white glow-effect">Our Story</h2>
        <p class="mt-6 text-lg text-gray-300">
          Green Light Mods was born out of a passion for music and the desire to create high-quality, custom guitar pedals that cater to the needs of every musician. Our journey began in [Year], and since then, we’ve been dedicated to offering innovative designs and exceptional craftsmanship. Every pedal we create is a testament to our commitment to delivering a unique sonic experience.
        </p>
      </div>
    </section>
  
    <!-- Mission & Values Section -->
    <section class="py-16 bg-black">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-green-500 glow-effect">Our Mission & Values</h2>
        <p class="mt-6 text-lg text-gray-300">
          At Green Light Mods, we are driven by the mission to provide musicians with pedals that inspire creativity and elevate their sound. Our core values are:
        </p>
        <div class="mt-6 flex justify-center gap-12 text-gray-300">
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold text-white">Innovation</h3>
            <p class="mt-2">We push boundaries by designing pedals that deliver unmatched tone and versatility.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold text-white">Craftsmanship</h3>
            <p class="mt-2">Each pedal is handmade with the utmost attention to detail and quality.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold text-white">Customer Focus</h3>
            <p class="mt-2">We prioritize customer satisfaction and build relationships through exceptional service.</p>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Meet the Team Section -->
    <section class="py-16 px-6 bg-gray-800">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-white glow-effect">Meet Our Team</h2>
        <div class="mt-12 space-y-8">
          <!-- Team Member 1 -->
          <div class="team-member">
            <img src="/path-to-team-member-1.jpg" alt="Team Member 1">
            <div>
              <h3 class="text-xl text-white">John Doe</h3>
              <p class="text-lg">Founder & Lead Designer</p>
            </div>
          </div>
          <!-- Team Member 2 -->
          <div class="team-member">
            <img src="/path-to-team-member-2.jpg" alt="Team Member 2">
            <div>
              <h3 class="text-xl text-white">Jane Smith</h3>
              <p class="text-lg">Production Manager</p>
            </div>
          </div>
          <!-- Team Member 3 -->
          <div class="team-member">
            <img src="/path-to-team-member-3.jpg" alt="Team Member 3">
            <div>
              <h3 class="text-xl text-white">Mark Johnson</h3>
              <p class="text-lg">Sales & Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Footer Section -->
    <footer class="py-8 bg-black text-center">
      <p class="text-white glow-effect">&copy; 2025 Green Light Mods. All rights reserved.</p>
      <div class="mt-4">
        <a href="#" class="text-green-500 hover:text-green-600 mx-4 glow-effect">Instagram</a>
        <a href="#" class="text-green-500 hover:text-green-600 mx-4 glow-effect">Facebook</a>
        <a href="mailto:contact@greenlightmods.com" class="text-green-500 hover:text-green-600 mx-4 glow-effect">Contact Us</a>
      </div>
    </footer>
  </main>
  