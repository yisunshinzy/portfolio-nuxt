<template>
  <div id="app-container" class="min-h-screen text-white overflow-x-hidden font-serif">
    <!-- Background Container -->
    <div id="background" class="fixed w-full h-screen top-0 left-0 -z-10"></div>
    <div class="container mx-auto"></div>

    <!-- Header -->
    <header class="fixed top-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center py-4 px-5 sm:py-[18px] sm:px-[30px] lg:py-5 lg:px-10 bg-black/40 backdrop-blur-[5px] z-10 box-border gap-3.5 sm:gap-4">
      <div class="logo">
        <NuxtLink to="/" class="text-white font-bold text-lg sm:text-2xl lg:text-[28px] no-underline text-center">Dan Jared Viernes</NuxtLink>
      </div>

      <nav class="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
        <NuxtLink to="/about" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">About</NuxtLink>
        <NuxtLink to="/certifications" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">Certifications</NuxtLink>
        <NuxtLink to="/tech-stack" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">Tech Stack</NuxtLink>
        <NuxtLink to="/contact" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">Contact</NuxtLink>
      </nav>
    </header>

    <!-- Home Section -->
    <section id="home" class="home h-auto sm:h-screen flex justify-center items-center pt-[130px] pb-[60px] sm:py-[140px] lg:py-0 px-4 sm:px-10 lg:px-[80px]">
      <div class="home-content flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 sm:gap-[30px] lg:gap-[40px]">
        <div class="home-image">
          <img src="/images/profile/profile1.jpg" alt="profile" class="w-[150px] sm:w-[200px] lg:w-[250px] rounded-[30%] border-4 border-white object-cover" />
        </div>

        <div class="home-info">
          <h1 class="text-2xl sm:text-[30px] lg:text-[40px] font-bold m-0">Dan Jared Viernes</h1>
          <p class="subtitle text-[13px] sm:text-[15px] lg:text-[18px] opacity-80 mt-1 sm:mt-[5px]">Full Stack Developer</p>
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