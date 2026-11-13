<template>
  <div id="app-container" class="min-h-screen text-white overflow-x-hidden font-serif flex flex-col justify-center items-center relative z-10">
    <!-- Background Container -->
    <div id="background" class="fixed w-full h-screen top-0 left-0 -z-10"></div>

    <!-- Contact Section Container with Glassmorphic Interactive Polish -->
    <section id="contact" class="section contact-section text-center text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] py-[60px] sm:py-[80px] lg:py-[100px] px-6 sm:px-[35px] lg:px-[80px] max-w-4xl mx-auto w-full">
      
      <div class="glass-card-interactive group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center transition-all duration-500 hover:border-white/20 overflow-hidden">
        
        <!-- Top-right Ambient Glow Reflection on Hover -->
        <div class="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0 z-0" />

        <h2 class="relative z-10 text-[28px] sm:text-[36px] lg:text-[48px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-lg">
          Contact
        </h2>

        <p class="contact-text relative z-10 max-w-[800px] mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-10 text-gray-200 opacity-90 font-sans tracking-wide">
          Thank you for visiting my portfolio. If you have any questions, project ideas, collaborations, 
          or opportunities, feel free to contact me.
        </p>

        <!-- Interactive Action Buttons -->
        <div class="contact-buttons relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
          <a 
            href="https://www.linkedin.com/in/dan-jared-viernes-021752351/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-interactive inline-flex items-center justify-center gap-3 py-[12px] px-8 bg-white/[0.06] hover:bg-white/15 backdrop-blur-md text-white hover:text-cyan-400 font-sans font-medium no-underline text-[14px] sm:text-[15px] lg:text-base rounded-2xl border border-white/20 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 w-full sm:w-auto"
          >
            <svg class="w-5 h-5 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z"/>
            </svg>
            LinkedIn
          </a>

          <a 
            href="https://github.com/yisunshinzy" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-interactive inline-flex items-center justify-center gap-3 py-[12px] px-8 bg-white/[0.06] hover:bg-white/15 backdrop-blur-md text-white hover:text-cyan-400 font-sans font-medium no-underline text-[14px] sm:text-[15px] lg:text-base rounded-2xl border border-white/20 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 w-full sm:w-auto"
          >
            <svg class="w-5 h-5 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import { useVanta } from '@/scripts/vanta'

useHead({
  title: 'Contact | Dan Jared Viernes'
})

useSeoMeta({
  title: 'Contact | Dan Jared Viernes',
  ogTitle: 'Contact | Dan Jared Viernes',
  description: 'Get in touch with Dan Jared Viernes for software development projects, collaborations, and professional inquiries. Connect on LinkedIn or GitHub.',
  ogDescription: 'Get in touch with Dan Jared Viernes for software development projects, collaborations, and professional inquiries. Connect on LinkedIn or GitHub.',
  ogImage: '/images/profile/profile1.jpg',
})

useVanta('#background')
</script>

<style>
html {
  scroll-behavior: smooth;
}

.glass-card-interactive {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, box-shadow;
}

.glass-card-interactive:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 60px -10px rgba(6, 182, 212, 0.15), 0 20px 50px rgba(0, 0, 0, 0.6);
}

/* Tactile Spring Button Press */
.btn-interactive {
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.btn-interactive:hover {
  transform: translateY(-2px);
}

.btn-interactive:active {
  transform: translateY(1px) scale(0.97);
}
</style>