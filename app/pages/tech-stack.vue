<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-[25px] lg:px-[80px] py-8 relative z-10 font-serif">
    <!-- Tech Stack Section -->
    <section id="tech" class="section py-8 sm:py-[40px] lg:py-[60px]">
      <!-- Page Title -->
      <h1 class="techstacks text-center text-[32px] sm:text-[42px] lg:text-[54px] font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 mb-8 sm:mb-10 lg:mb-12 drop-shadow-lg animate-fade-in">
        Tech Stack
      </h1>

      <!-- Tech Cards Grid -->
      <div class="tech-grid w-full max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 sm:gap-6 lg:gap-8">
        <div 
          v-for="(tech, index) in techList" 
          :key="tech.name" 
          :style="{ animationDelay: `${index * 60}ms` }"
          class="glass-card-interactive tech-box h-[180px] sm:h-[220px] lg:h-[260px] bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl flex flex-col justify-center items-center relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.08] animate-fade-in-up fill-mode-backwards"
        >
          <!-- Top-right Ambient Glow Reflection on Hover -->
          <div class="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0 z-0"></div>

          <!-- Glow hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
          
          <img 
            :src="tech.img" 
            :alt="tech.name" 
            class="relative z-10 w-[60px] h-[60px] sm:w-[85px] sm:h-[85px] lg:w-[105px] lg:h-[105px] object-contain mb-3 sm:mb-4 lg:mb-6 transition-transform duration-300 ease-out group-hover:scale-110"
          >
          <p class="relative z-10 text-sm sm:text-lg lg:text-xl font-bold tracking-wide text-gray-200 group-hover:text-white transition-colors">
            {{ tech.name }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { techList } from '@/scripts/techlist'

useHead({
  title: 'Tech Stack | Dan Jared Viernes'
})

useSeoMeta({
  title: 'Tech Stack | Dan Jared Viernes',
  ogTitle: 'Tech Stack | Dan Jared Viernes',
  description: 'Explore the full-stack development technologies, frameworks, and tools used by Dan Jared Viernes.',
  ogDescription: 'Explore the full-stack development technologies, frameworks, and tools used by Dan Jared Viernes.',
  ogImage: '/images/profile/profile1.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.fill-mode-backwards {
  animation-fill-mode: backwards;
}

.glass-card-interactive {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, box-shadow;
}

.glass-card-interactive:hover {
  box-shadow: 0 25px 50px -12px rgba(6, 182, 212, 0.2), 0 20px 50px rgba(0, 0, 0, 0.6);
}
</style>