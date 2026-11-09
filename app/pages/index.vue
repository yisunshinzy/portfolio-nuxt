<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-[25px] lg:px-[80px] py-8 relative z-10 font-serif min-h-[calc(100vh-80px)] flex items-center justify-center">
    <!-- Home Section -->
    <section id="home" class="w-full flex justify-center items-center py-4 sm:py-8">
      
      <!-- Interactive Glassmorphic Card -->
      <div class="glass-card-interactive group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-[30px] lg:gap-[40px] max-w-4xl w-full mx-auto transition-all duration-500 hover:border-white/20 animate-fade-in overflow-hidden">
        
        <!-- Top-right Ambient Glow Reflection on Hover -->
        <div class="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

        <!-- Profile Image -->
        <div class="home-image flex-shrink-0 relative group/img">
          <span class="absolute -inset-1.5 blur-xl opacity-30 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 rounded-[30%] group-hover/img:opacity-75 transition duration-500 animate-pulse"></span>
          <img 
            src="/images/profile/profile2.jpg" 
            alt="Dan Jared Viernes" 
            class="relative w-[150px] sm:w-[200px] lg:w-[250px] rounded-[30%] border-4 border-white/20 object-cover shadow-2xl transition-all duration-500 group-hover/img:scale-105 group-hover/img:border-white/40" 
          />
        </div>

        <!-- Info -->
        <div class="home-info flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-3 relative z-10">
          
          <!-- Pangalan sa iisang linya lang (whitespace-nowrap at adjusted text size) -->
          <h1 class="font-cinzel text-xl sm:text-[26px] lg:text-[32px] font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 m-0 drop-shadow-lg whitespace-nowrap">
            DAN JARED VIERNES
          </h1>

          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
            <span class="badge badge-neutral bg-white/10 text-cyan-300 border-white/10 font-sans tracking-wider uppercase text-xs sm:text-sm py-2 px-3 rounded-md">
              Full Stack Developer
            </span>
          </div>

          <!-- Quote -->
          <p class="text-xs sm:text-sm italic text-gray-300/80 font-sans tracking-wide max-w-md pt-2 border-t border-white/10 mt-3">
            "It's not about being perfect, it's about being better than you were yesterday."
          </p>

          <!-- Interactive Action Buttons -->
          <div class="flex items-center gap-4 pt-4">
            <a 
              href="https://www.linkedin.com/in/dan-jared-viernes-021752351/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-interactive btn btn-lg btn-neutral btn-outline backdrop-blur-md bg-white/[0.04] hover:bg-white/10 border-white/20 hover:border-cyan-400 text-white hover:text-cyan-400 font-sans text-base sm:text-lg rounded-2xl px-7 py-3 transition-all duration-300 no-underline inline-flex items-center gap-3 shadow-lg hover:shadow-cyan-500/20"
            >
              <svg class="w-6 h-6 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z"/>
              </svg>
              LinkedIn
            </a>

            <a 
              href="https://github.com/yisunshinzy" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-interactive btn btn-lg btn-neutral btn-outline backdrop-blur-md bg-white/[0.04] hover:bg-white/10 border-white/20 hover:border-cyan-400 text-white hover:text-cyan-400 font-sans text-base sm:text-lg rounded-2xl px-7 py-3 transition-all duration-300 no-underline inline-flex items-center gap-3 shadow-lg hover:shadow-cyan-500/20"
            >
              <svg class="w-6 h-6 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
              </svg>
              GitHub
            </a>
          </div>

        </div>

      </div>

    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Dan Jared Viernes | Full Stack Developer'
})

useSeoMeta({
  title: 'Dan Jared Viernes | Full Stack Developer',
  ogTitle: 'Dan Jared Viernes | Full Stack Developer',
  description: 'Portfolio of Dan Jared Viernes, featuring full-stack web applications, mobile projects, and software design.',
  ogDescription: 'Portfolio of Dan Jared Viernes, featuring full-stack web applications, mobile projects, and software design.',
  ogImage: '/images/profile/profile2.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

.font-cinzel {
  font-family: 'Cinzel', serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Button micro-interaction press & spring */
.btn-interactive {
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.btn-interactive:hover {
  transform: translateY(-2px);
}

.btn-interactive:active {
  transform: translateY(1px) scale(0.97);
}
</style>