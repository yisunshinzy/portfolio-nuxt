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
        <NuxtLink to="/about" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800 font-semibold underline">About</NuxtLink>
        <NuxtLink to="/certifications" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">Certifications</NuxtLink>
        <NuxtLink to="/tech-stack" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">Tech Stack</NuxtLink>
        <NuxtLink to="/contact" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">Contact</NuxtLink>
      </nav>
    </header>

    <!-- About Section -->
    <section id="about" class="section py-[70px] sm:py-[90px] lg:py-[120px] px-4 sm:px-[25px] lg:px-[80px]">
      <div class="about flex justify-center items-center gap-[25px] sm:gap-[40px] lg:gap-[100px] flex-wrap mt-[10px]">
        <div class="about-self max-w-[1000px]">
          <h2 class="abouttitle text-center text-[26px] sm:text-[34px] lg:text-[46px] font-bold mb-6">About</h2>

          <p class="text-base sm:text-[20px] lg:text-[28px] leading-[1.6] sm:leading-[1.7] lg:leading-[1.8] text-center mb-6">
            I want to become a full-stack developer because I enjoy creating projects, 
            solving problems, and turning ideas into useful technology. 
            Outside of my studies, I am big into basketball, 
            I love making plays with my teams. 
            I also spend a lot of my free time playing Valorant, 
            which actually helped spark my initial interest in programming. 
            Also, I am a huge fan of trying new foods, 
            especially finding the best food spots in the area.
          </p>

          <p class="text-base sm:text-[20px] lg:text-[28px] leading-[1.6] sm:leading-[1.7] lg:leading-[1.8] text-center">
            My experience on the basketball court has shaped my professional outlook. 
            I believe that the best technical solutions come from high-performing teams. 
            I also want to create applications that are as engaging as the games I play, 
            focusing on making applications more accessible and enjoyable for every user.
          </p>
        </div>
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