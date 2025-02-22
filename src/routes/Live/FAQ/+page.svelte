<!-- src/routes/faq/+page.svelte -->
<script>
    import { slide, fade } from 'svelte/transition';
    
    let faqs = [
      { question: "What is Green Light Mods?", answer: "We specialize in designing and building custom guitar pedals.", active: false },
      { question: "Do you ship internationally?", answer: "Yes, we offer worldwide shipping.", active: false },
      { question: "Can I request a custom pedal design?", answer: "Absolutely! Contact us to discuss your custom pedal needs.", active: false },
      { question: "What payment methods do you accept?", answer: "We accept Stripe, PayPal, and major credit cards.", active: false },
      { question: "Do you offer a lifetime guarantee?", answer: "Yes, all our pedals come with a lifetime guarantee ensuring lasting quality and performance.", active: false }
    ];
    
    function toggleFaq(index) {
      // Use a new array to trigger reactivity
      faqs = faqs.map((faq, i) => i === index ? { ...faq, active: !faq.active } : faq);
    }
  </script>
  
  <style>
    .faq-container {
      background: linear-gradient(135deg, #111 0%, #222 100%);
      color: #fff;
      padding: 60px 20px;
      min-height: 100vh;
    }
    
    h1 {
      text-align: center;
      font-size: 3rem;
      color: #00FF00;
      text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00;
      margin-bottom: 40px;
    }
    
    .faq-item {
      background: #1a1a1a;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 20px;
      cursor: pointer;
      border: 2px solid transparent;
      transition: background 0.3s ease, border-color 0.3s ease;
      box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
    }
    
    .faq-item:hover {
      background: #2a2a2a;
      border-color: #00FF00;
    }
    
    .faq-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .faq-question {
      font-size: 1.5rem;
      color: #00FF00;
      margin: 0;
      text-shadow: 0 0 5px #00FF00;
    }
    
    .arrow {
      transition: transform 0.3s ease;
    }
    
    .faq-item.active .arrow {
      transform: rotate(180deg);
    }
    
    .faq-answer {
      margin-top: 15px;
      font-size: 1.1rem;
      line-height: 1.5;
      color: #fff;
    }
  </style>
  
  <main class="faq-container">
    <h1>Frequently Asked Questions</h1>
    
    {#each faqs as faq, index}
      <div class="faq-item" on:click={() => toggleFaq(index)} class:active={faq.active}>
        <div class="faq-header">
          <h2 class="faq-question">{faq.question}</h2>
          <svg class="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke="#00FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        {#if faq.active}
          <p class="faq-answer" transition:slide>{faq.answer}</p>
        {/if}
      </div>
    {/each}
  </main>
  