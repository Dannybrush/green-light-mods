<!-- src/routes/sound-demos/+page.svelte -->
<script>
    import { onMount } from 'svelte';
    import { slide, fade } from 'svelte/transition';
    
    // Sample demos—replace with your actual data or API call if needed.
    let demos = [
      { id: 1, title: "Warm Overdrive", description: "Experience the rich, saturated tones of our warm overdrive pedal.", audioUrl: "/audio/warm-overdrive.mp3" },
      { id: 2, title: "Chill Reverb", description: "A smooth, ambient reverb effect that transforms your sound.", audioUrl: "/audio/chill-reverb.mp3" },
      { id: 3, title: "Fuzzy Thunder", description: "Unleash raw power with our fuzzy, aggressive tone.", audioUrl: "/audio/fuzzy-thunder.mp3" }
    ];
    
    async function fetchDemos() {
      try {
        const res = await fetch('/api/sound-demos');
        if (res.ok) {
          demos = await res.json();
        }
      } catch (error) {
        console.error('Error fetching sound demos:', error);
      }
    }
    
    onMount(() => {
      // Uncomment the following line if you have an API endpoint to fetch demos:
      // fetchDemos();
    });
  </script>
  
  <style>
    .demos-container {
      background: linear-gradient(135deg, #111, #222);
      padding: 60px 20px;
      min-height: 100vh;
      color: #fff;
    }
    
    h1 {
      text-align: center;
      font-size: 3rem;
      color: #00FF00;
      text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00;
      margin-bottom: 20px;
    }
    
    p.intro {
      text-align: center;
      margin-bottom: 40px;
      font-size: 1.2rem;
    }
    
    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    
    .demo-card {
      background: #1a1a1a;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      overflow: hidden;
    }
    
    .demo-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 15px rgba(0, 255, 0, 0.4);
    }
    
    .demo-title {
      font-size: 1.5rem;
      color: #00FF00;
      text-shadow: 0 0 5px #00FF00;
      margin-bottom: 10px;
    }
    
    .demo-description {
      font-size: 1rem;
      margin-bottom: 15px;
    }
    
    .audio-player {
      width: 100%;
      border: 2px solid #00FF00;
      border-radius: 8px;
      background: #000;
      transition: border 0.3s ease;
    }
    
    .audio-player:hover {
      border-color: #00cc00;
    }
  </style>
  
  <main class="demos-container">
    <h1>Sound Demos</h1>
    <p class="intro">Listen to our pedals in action and discover your perfect tone.</p>
    <div class="demo-grid">
      {#each demos as demo (demo.id)}
        <div class="demo-card" transition:slide={{duration:300}}>
          <h2 class="demo-title">{demo.title}</h2>
          <p class="demo-description">{demo.description}</p>
          <audio class="audio-player" controls>
            <source src={demo.audioUrl} type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
      {/each}
    </div>
  </main>
  