<template>
  <div id="app-container">
    <div id="background"></div>

    <header class="header">
      <div class="logo">
        <NuxtLink to="/">Dan Jared Viernes</NuxtLink>
      </div>

      <nav>
        <!-- Fixed active link assignment for the Certifications page -->
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/certifications" class="active">Certifications</NuxtLink>
        <NuxtLink to="/tech-stack">Tech Stack</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </header>

    <section id="certifications" class="section">
      <h2 class="certification">Certifications</h2>

      <div class="cert">
        <!-- CERT 1 -->
        <div class="certificate">
          <img 
            src="/images/certificate/cert1.jpg" 
            class="cert-img" 
            alt="PowerPoint Associate Certificate"
            @click="openModal('/images/certificate/cert1.jpg')"
          />

          <a 
            href="https://www.certiport.com/portal/pages/credentialverification.aspx"
            target="_blank"
            rel="noopener noreferrer"
            class="cert-info"
          >
            <p class="cert-name">
              PowerPoint Associate Certificate
            </p>
            <p class="cert-verify">
              Verify Here
            </p>
          </a>
        </div>

        <!-- CERT 2 -->
        <div class="certificate">
          <img 
            src="/images/certificate/cert2.jpg" 
            class="cert-img" 
            alt="Word Associate Certificate"
            @click="openModal('/images/certificate/cert2.jpg')"
          />

          <a 
            href="https://www.certiport.com/portal/pages/credentialverification.aspx"
            target="_blank"
            rel="noopener noreferrer"
            class="cert-info"
          >
            <p class="cert-name">
              Word Associate Certificate
            </p>
            <p class="cert-verify">
              Verify Here
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- IMAGE MODAL -->
    <div id="imgModal" class="modal" v-if="isModalOpen" @click="closeModal">
      <span class="close" @click="closeModal">&times;</span>
      <img class="modal-content" :src="modalImgSrc" alt="Certificate Preview" @click.stop />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isModalOpen = ref(false)
const modalImgSrc = ref('')

const openModal = (src) => {
  modalImgSrc.value = src
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

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