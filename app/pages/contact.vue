<template>
  <div id="app-container">
    <div id="background"></div>

    <header class="header">
      <div class="logo">
        <NuxtLink to="/">Dan Jared Viernes</NuxtLink>
      </div>

      <nav>
        <!-- Fixed nav links and active state for the Contact page -->
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/certifications">Certifications</NuxtLink>
        <NuxtLink to="/tech-stack">Tech Stack</NuxtLink>
        <NuxtLink to="/contact" class="active">Contact</NuxtLink>
      </nav>
    </header>

    <section id="contact" class="section contact-section">
      <h2>Contact</h2>

      <p class="contact-text">
        Thank you for visiting my portfolio. If you have any questions, project ideas, collaborations, 
        or opportunities, feel free to contact me.
      </p>

      <div class="contact-buttons">
        <a 
          href="https://www.linkedin.com/in/dan-jared-viernes-021752351/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn"
        >
          LinkedIn
        </a>

        <a 
          href="https://github.com/yisunshinzy" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn"
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

<style scoped>
@import '~/assets/style.css';
</style>