<template>
  <div id="app-container" class="min-h-screen text-white overflow-x-hidden font-serif">
    <!-- Background Container -->
    <div id="background" class="fixed w-full h-screen top-0 left-0 -z-10"></div>

    <!-- Header -->
    <header class="fixed top-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center py-4 px-5 sm:py-[18px] sm:px-[30px] lg:py-5 lg:px-10 bg-black/40 backdrop-blur-[5px] z-10 box-border gap-3.5 sm:gap-4">
      <div class="logo">
        <NuxtLink to="/" class="text-white font-bold text-lg sm:text-2xl lg:text-[28px] no-underline text-center">Dan Jared Viernes</NuxtLink>
      </div>

      <nav class="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
        <NuxtLink to="/about" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">About</NuxtLink>
        <NuxtLink to="/certifications" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">Certifications</NuxtLink>
        <NuxtLink to="/tech-stack" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800 font-semibold underline">Tech Stack</NuxtLink>
        <NuxtLink to="/contact" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">Contact</NuxtLink>
      </nav>
    </header>

    <!-- Tech Stack Section -->
    <section id="tech" class="section py-[70px] sm:py-[90px] lg:py-[120px] px-4 sm:px-[25px] lg:px-[80px]">
      <h2 class="techstacks text-center text-[32px] sm:text-[42px] lg:text-[60px] font-bold mb-[40px] sm:mb-[50px] lg:mb-[60px] text-white">Tech Stack</h2>

      <div class="tech-grid w-full max-w-[1400px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[20px] sm:gap-[20px] lg:gap-[30px] p-[20px]">
        
        <!-- Tech Box Template (Repeated for items) -->
        <div v-for="tech in techList" :key="tech.name" class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-[18px] sm:rounded-[20px] lg:rounded-[28px] flex flex-col justify-center items-center backdrop-blur-[16px] transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-[rgba(255,255,255,0.14)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.35),0_0_25px_rgba(147,197,253,0.15)]">
          
          <!-- Glow Gradient Overlay on Hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.18)] via-transparent to-[rgba(255,255,255,0.05)] opacity-0 group-hover:opacity-100 transition duration-400 ease-out pointer-events-none"></div>

          <img :src="tech.img" :alt="tech.name" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-108 group-hover:rotate-[3deg]">
          
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">{{ tech.name }}</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const techList = ref([
  { name: 'HTML', img: '/images/techstacks/html.png' },
  { name: 'CSS', img: '/images/techstacks/css.png' },
  { name: 'JavaScript', img: '/images/techstacks/javascript.png' },
  { name: 'GitHub', img: '/images/techstacks/git.png' },
  { name: 'VS Code', img: '/images/techstacks/vscode.png' },
  { name: 'Java', img: '/images/techstacks/java.png' },
  { name: 'C', img: '/images/techstacks/c.png' },
  { name: 'Python', img: '/images/techstacks/python.png' },
  { name: 'Oracle APEX', img: '/images/techstacks/apex.png' },
  { name: 'IntelliJ', img: '/images/techstacks/intellij.png' },
  { name: 'Android Studio', img: '/images/techstacks/android.png' },
  { name: 'SSMS', img: '/images/techstacks/database.png' },
  { name: 'PostgreSQL', img: '/images/techstacks/postgre.png' }
])

let vantaEffect = null

onMounted(async () => {
  if (typeof window !== 'undefined') {
    await loadScript('https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js')
    await loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js')

    if (window.VANTA) {
      vantaEffect = window.VANTA.WAVES({
        el: '#background',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      })
    }
  }
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}
</script>

<style>
/* Global smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>