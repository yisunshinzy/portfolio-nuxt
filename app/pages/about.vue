<template>
  <div id="app-container">
    <div id="background"></div>

    <header class="header">
      <div class="logo">
        <NuxtLink to="/">Dan Jared Viernes</NuxtLink>
      </div>

      <nav>
        <NuxtLink to="/about" class="active">About</NuxtLink>
        <NuxtLink to="/certifications">Certifications</NuxtLink>
        <NuxtLink to="/tech-stack">Tech Stack</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </header>

    <section id="about" class="section">
      <div class="about">
        <div class="about-self">
          <h2 class="abouttitle">About</h2>

          <p>
            I want to become a full-stack developer because I enjoy creating projects, 
            solving problems, and turning ideas into useful technology. 
            Outside of my studies, I am big into basketball, 
            I love making plays with my teams. 
            I also spend a lot of my free time playing Valorant, 
            which actually helped spark my initial interest in programming. 
            Also, I am a huge fan of trying new foods, 
            especially finding the best food spots in the area.
          </p>

          <p>
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

<style scoped>
@import '~/assets/style.css';
</style>