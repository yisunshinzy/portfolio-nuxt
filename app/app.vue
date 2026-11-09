<template>
  <!-- Vanta background wrapper -->
  <div class="min-h-screen flex flex-col justify-between text-white relative overflow-x-hidden">
    <NuxtRouteAnnouncer />

    <!-- Global Fullscreen Vanta Background -->
    <div id="vanta-background" class="fixed inset-0 w-full h-full -z-10 pointer-events-none"></div>

    <!-- Floating Global Navbar Header -->
    <header class="fixed top-5 inset-x-0 z-50 px-4 sm:px-6 w-full max-w-[95%] mx-auto">
      <nav class="bg-gray-900/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-6 sm:px-8 py-3.5 flex items-center justify-between transition-all duration-300 hover:border-white/20">
        
        <!-- Logo / Brand Name with Cinzel Font & Single Line Lock -->
        <NuxtLink to="/" class="font-cinzel font-bold text-base sm:text-lg tracking-wider text-white hover:text-cyan-400 transition-colors whitespace-nowrap drop-shadow-md">
          DAN JARED R. VIERNES
        </NuxtLink>

        <!-- Desktop Links with Frosted Glass Active Glow & Hover Polish -->
        <div class="hidden md:flex items-center space-x-2">
          <NuxtLink 
            to="/about" 
            class="nav-link relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all rounded-xl"
            active-class="is-active"
          >
            <span class="relative z-10">About</span>
            <span class="absolute inset-0 rounded-xl bg-white/5 opacity-0 backdrop-blur-md transition-opacity duration-300"></span>
          </NuxtLink>

          <NuxtLink 
            to="/tech-stack" 
            class="nav-link relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all rounded-xl"
            active-class="is-active"
          >
            <span class="relative z-10">Tech Stack</span>
            <span class="absolute inset-0 rounded-xl bg-white/5 opacity-0 backdrop-blur-md transition-opacity duration-300"></span>
          </NuxtLink>

          <NuxtLink 
            to="/certifications" 
            class="nav-link relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all rounded-xl"
            active-class="is-active"
          >
            <span class="relative z-10">Certifications</span>
            <span class="absolute inset-0 rounded-xl bg-white/5 opacity-0 backdrop-blur-md transition-opacity duration-300"></span>
          </NuxtLink>
        </div>

        <!-- Mobile Hamburger Button -->
        <button @click="isOpen = !isOpen" type="button" class="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <!-- Mobile Dropdown Menu with Transition -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div v-if="isOpen" class="md:hidden mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 space-y-1 shadow-2xl">
          <NuxtLink @click="isOpen = false" to="/about" class="block px-4 py-2.5 text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors">About</NuxtLink>
          <NuxtLink @click="isOpen = false" to="/tech-stack" class="block px-4 py-2.5 text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors">Tech Stack</NuxtLink>
          <NuxtLink @click="isOpen = false" to="/certifications" class="block px-4 py-2.5 text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors">Certifications</NuxtLink>
        </div>
      </Transition>
    </header>

    <!-- Page Content (Wrapped in Nuxt's Native Page Transitions) -->
    <main class="flex-grow pt-32 pb-16 relative z-10">
      <NuxtPage />
    </main>

    <!-- Global Footer with Dark Backdrop -->
    <footer v-if="route.path !== '/'" id="app-footer" class="relative text-white overflow-x-hidden font-serif border-t border-slate-800/80 z-10 bg-slate-950/80 backdrop-blur-md">
      <div class="section contact-section text-center py-[50px] sm:py-[70px] lg:py-[90px] px-4 sm:px-[25px] lg:px-[80px]">
        <h2 class="text-[26px] sm:text-[34px] lg:text-[46px] font-bold mb-4">Contact</h2>
        <p class="contact-text max-w-[800px] mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
          Thank you for visiting my portfolio. If you have any questions, project ideas, collaborations, or opportunities, feel free to contact me.
        </p>
        <div class="contact-buttons flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-8">
          <a href="https://www.linkedin.com/in/dan-jared-viernes-021752351/" target="_blank" rel="noopener noreferrer" class="btn inline-block py-[10px] px-5 sm:py-[10px] sm:px-[20px] lg:py-[12px] lg:px-[25px] bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm text-white no-underline text-[13px] sm:text-[14px] lg:text-base transition duration-300 w-full sm:w-auto box-border rounded-lg border border-slate-700 hover:scale-[1.02]">LinkedIn</a>
          <a href="https://github.com/yisunshinzy" target="_blank" rel="noopener noreferrer" class="btn inline-block py-[10px] px-5 sm:py-[10px] sm:px-[20px] lg:py-[12px] lg:px-[25px] bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm text-white no-underline text-[13px] sm:text-[14px] lg:text-base transition duration-300 w-full sm:w-auto box-border rounded-lg border border-slate-700 hover:scale-[1.02]">GitHub</a>
        </div>
        <div class="pt-6 border-t border-slate-700/50 text-xs sm:text-sm text-gray-300 opacity-80">
          © {{ new Date().getFullYear() }} Dan Jared R. Viernes. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)
let vantaEffect = null

// Global SEO Setup
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Dan Jared R. Viernes` : 'Dan Jared R. Viernes | Full Stack Developer'
  },
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

useSeoMeta({
  title: 'Dan Jared R. Viernes | Full Stack Developer',
  ogTitle: 'Dan Jared R. Viernes | Full Stack Developer',
  description: 'Official portfolio of Dan Jared R. Viernes featuring full-stack development projects, technical skills, and certifications.',
  ogDescription: 'Official portfolio of Dan Jared R. Viernes featuring full-stack development projects, technical skills, and certifications.',
  ogImage: '/images/profile/profile1.jpg',
  twitterCard: 'summary_large_image'
})

const initVanta = () => {
  if (typeof window !== 'undefined') {
    const el = document.querySelector('#vanta-background')
    if (window.VANTA && window.THREE && el) {
      if (vantaEffect) {
        vantaEffect.destroy()
        vantaEffect = null
      }
      vantaEffect = window.VANTA.WAVES({
        el: '#vanta-background',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0f172a,
        shininess: 35.00,
        waveHeight: 15.00,
        waveSpeed: 0.75,
        zoom: 0.85
      })
    } else {
      setTimeout(initVanta, 50)
    }
  }
}

onMounted(() => {
  initVanta()
})

watch(() => route.fullPath, () => {
  setTimeout(initVanta, 100)
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>

<style scoped>
.font-cinzel {
  font-family: 'Cinzel', serif;
}

.nav-link.is-active {
  color: #ffffff;
}
.nav-link.is-active span:last-child {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
}
.nav-link:hover span:last-child {
  opacity: 0.5;
}
</style>