<template>
  <div id="app-container">
    <div id="background"></div>

    <header class="header">
      <div class="logo">
        <NuxtLink to="/">Dan Jared Viernes</NuxtLink>
      </div>

      <nav>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/certifications">Certifications</NuxtLink>
        <NuxtLink to="/tech-stack" class="active">Tech Stack</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </header>

    <section id="tech" class="section">
      <h2 class="techstacks">Tech Stack</h2>

      <div class="tech-grid">
        <div class="tech-box">
          <img src="/images/techstacks/html.png" alt="HTML">
          <p>HTML</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/css.png" alt="CSS">
          <p>CSS</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/javascript.png" alt="JavaScript">
          <p>JavaScript</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/git.png" alt="GitHub">
          <p>GitHub</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/vscode.png" alt="VSCode">
          <p>VS Code</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/java.png" alt="Java">
          <p>Java</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/c.png" alt="C">
          <p>C</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/python.png" alt="Python">
          <p>Python</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/apex.png" alt="Oracle APEX">
          <p>Oracle APEX</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/intellij.png" alt="IntelliJ">
          <p>IntelliJ</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/android.png" alt="Android Studio">
          <p>Android Studio</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/database.png" alt="SSMS">
          <p>SSMS</p>
        </div>

        <div class="tech-box">
          <img src="/images/techstacks/postgre.png" alt="PostgreSQL">
          <p>PostgreSQL</p>
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