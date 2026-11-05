<template>
  <div id="app-container">
    <div id="background"></div>
    <div class="container"></div>

    <header class="header">
      <div class="logo">
        <NuxtLink to="/">Dan Jared Viernes</NuxtLink>
        <!-- Use <router-link to="/"> if using standard Vue Router instead of Nuxt -->
      </div>

      <nav>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/certifications">Certifications</NuxtLink>
        <NuxtLink to="/tech-stack">Tech Stack</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </header>

    <section id="home" class="home">
      <div class="home-content">
        <div class="home-image">
          <!-- Assets in the public folder are accessed from the root / -->
          <img src="/images/profile/profile1.jpg" alt="profile" />
        </div>

        <div class="home-info">
          <h1>Dan Jared Viernes</h1>
          <p class="subtitle">Full Stack Developer</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

// If you want to load external scripts dynamically for Vanta.js backgrounds:
let vantaEffect = null

onMounted(async () => {
  // Dynamically load Three.js and Vanta waves if not already loaded globally
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

// Helper function to load external CDN scripts dynamically
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

<style scoped>
/* Import your styles or put scoped CSS here */
@import '~/assets/style.css';
</style>