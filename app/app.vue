<template>
  <div class="min-h-screen flex flex-col justify-between text-white bg-slate-950">
    <NuxtRouteAnnouncer />

    <!-- Floating Global Navbar Header -->
    <header class="fixed top-5 inset-x-0 z-50 px-4 sm:px-6 w-full max-w-[95%] mx-auto">
      <nav class="bg-gray-900/85 backdrop-blur-md border border-gray-800/80 rounded-2xl shadow-xl px-8 py-3 flex items-center justify-between transition-all">
        <NuxtLink to="/" class="font-bold text-lg sm:text-xl tracking-wide text-white hover:text-cyan-400 transition-colors">
          Dan Jared R. Viernes
        </NuxtLink>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center space-x-3">
          <NuxtLink to="/about" class="px-5 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/70 rounded-xl transition-all">About</NuxtLink>
          <NuxtLink to="/tech-stack" class="px-5 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/70 rounded-xl transition-all">Tech Stack</NuxtLink>
          <NuxtLink to="/certifications" class="px-5 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/70 rounded-xl transition-all">Certifications</NuxtLink>
        </div>

        <!-- Mobile Hamburger Button -->
        <button @click="isOpen = !isOpen" type="button" class="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/70 focus:outline-none transition-colors">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <!-- Mobile Dropdown Menu -->
      <div v-if="isOpen" class="md:hidden mt-2 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-2xl p-4 space-y-1 shadow-2xl">
        <NuxtLink @click="isOpen = false" to="/about" class="block px-4 py-2.5 text-base text-gray-300 hover:text-white hover:bg-gray-800/70 rounded-xl transition-colors">About</NuxtLink>
        <NuxtLink @click="isOpen = false" to="/tech-stack" class="block px-4 py-2.5 text-base text-gray-300 hover:text-white hover:bg-gray-800/70 rounded-xl transition-colors">Tech Stack</NuxtLink>
        <NuxtLink @click="isOpen = false" to="/certifications" class="block px-4 py-2.5 text-base text-gray-300 hover:text-white hover:bg-gray-800/70 rounded-xl transition-colors">Certifications</NuxtLink>
      </div>
    </header>

    <!-- Page Content (Added pt-32 so content doesn't hide under the fixed navbar) -->
    <main class="flex-grow pt-32 pb-16 relative z-10">
      <NuxtPage />
    </main>

    <!-- Global Footer -->
    <footer id="app-footer" class="relative text-white overflow-x-hidden font-serif border-t border-slate-800/80 z-10">
      <div id="footer-background" class="absolute inset-0 -z-10 w-full h-full"></div>

      <div class="section contact-section text-center py-[50px] sm:py-[70px] lg:py-[90px] px-4 sm:px-[25px] lg:px-[80px]">
        <h2 class="text-[26px] sm:text-[34px] lg:text-[46px] font-bold mb-4">Contact</h2>
        <p class="contact-text max-w-[800px] mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
          Thank you for visiting my portfolio. If you have any questions, project ideas, collaborations, or opportunities, feel free to contact me.
        </p>
        <div class="contact-buttons flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-8">
          <a href="https://www.linkedin.com/in/dan-jared-viernes-021752351/" target="_blank" rel="noopener noreferrer" class="btn inline-block py-[10px] px-5 sm:py-[10px] sm:px-[20px] lg:py-[12px] lg:px-[25px] bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm text-white no-underline text-[13px] sm:text-[14px] lg:text-base transition duration-300 w-full sm:w-auto box-border rounded-lg border border-slate-700">LinkedIn</a>
          <a href="https://github.com/yisunshinzy" target="_blank" rel="noopener noreferrer" class="btn inline-block py-[10px] px-5 sm:py-[10px] sm:px-[20px] lg:py-[12px] lg:px-[25px] bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm text-white no-underline text-[13px] sm:text-[14px] lg:text-base transition duration-300 w-full sm:w-auto box-border rounded-lg border border-slate-700">GitHub</a>
        </div>
        <div class="pt-6 border-t border-slate-700/50 text-xs sm:text-sm text-gray-300 opacity-80">
          © {{ new Date().getFullYear() }} Dan Jared R. Viernes. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const isOpen = ref(false)
let vantaEffect = null

onMounted(async () => {
  if (typeof window !== 'undefined') {
    await loadScript('https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js')
    await loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js')
    if (window.VANTA) {
      vantaEffect = window.VANTA.WAVES({
        el: '#footer-background',
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
    }
  }
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}
</script>