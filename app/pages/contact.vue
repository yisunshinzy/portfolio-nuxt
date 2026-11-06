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
        <NuxtLink to="/tech-stack" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">Tech Stack</NuxtLink>
        <NuxtLink to="/contact" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800 font-semibold underline">Contact</NuxtLink>
      </nav>
    </header>

    <!-- Contact Section -->
    <section id="contact" class="section contact-section text-center text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] py-[70px] sm:py-[90px] lg:py-[120px] px-4 sm:px-[25px] lg:px-[80px]">
      <h2 class="text-[26px] sm:text-[34px] lg:text-[46px] font-bold mb-6">Contact</h2>

      <p class="contact-text max-w-[800px] mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
        Thank you for visiting my portfolio. If you have any questions, project ideas, collaborations, 
        or opportunities, feel free to contact me.
      </p>

      <div class="contact-buttons flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        <a 
          href="https://www.linkedin.com/in/dan-jared-viernes-021752351/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn inline-block py-[10px] px-5 sm:py-[10px] sm:px-[20px] lg:py-[12px] lg:px-[25px] bg-[#3e3e3e] text-white no-underline text-[13px] sm:text-[14px] lg:text-base transition duration-300 hover:bg-[#656565] w-full sm:w-auto box-border"
        >
          LinkedIn
        </a>

        <a 
          href="https://github.com/yisunshinzy" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn inline-block py-[10px] px-5 sm:py-[10px] sm:px-[20px] lg:py-[12px] lg:px-[25px] bg-[#3e3e3e] text-white no-underline text-[13px] sm:text-[14px] lg:text-base transition duration-300 hover:bg-[#656565] w-full sm:w-auto box-border"
        >
          GitHub
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

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