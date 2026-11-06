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
        <NuxtLink to="/certifications" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800 font-semibold underline">Certifications</NuxtLink>
        <NuxtLink to="/tech-stack" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">Tech Stack</NuxtLink>
        <NuxtLink to="/contact" class="no-underline text-white text-xs sm:text-sm lg:text-base transition duration-300 hover:text-neutral-800">Contact</NuxtLink>
      </nav>
    </header>

    <!-- Certifications Section -->
    <section id="certifications" class="section py-[70px] sm:py-[90px] lg:py-[120px] px-4 sm:px-[25px] lg:px-[80px]">
      <h2 class="certification text-center text-[26px] sm:text-[32px] lg:text-[40px] font-bold tracking-[2px] mb-[50px] text-white">Certifications</h2>

      <div class="cert flex justify-center flex-wrap gap-[25px] sm:gap-[40px]">
        <!-- CERT 1 -->
        <div class="certificate w-full max-w-[350px] sm:max-w-[350px] lg:w-[400px] text-center rounded-[12px] overflow-hidden backdrop-blur-[10px] bg-[rgba(6,5,5,0.4)] shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-[10px]">
          <img 
            src="/images/certificate/cert1.jpg" 
            class="cert-img w-full cursor-pointer transition duration-300 hover:scale-110 object-cover" 
            alt="PowerPoint Associate Certificate"
            @click="openModal('/images/certificate/cert1.jpg')"
          />

          <a 
            href="https://www.certiport.com/portal/pages/credentialverification.aspx"
            target="_blank"
            rel="noopener noreferrer"
            class="cert-info block p-[15px] no-underline text-white bg-gradient-to-br from-[#111] to-[#1c1c1c] transition duration-300 hover:bg-gradient-to-br hover:from-[#dadada] hover:to-[#949494] hover:text-neutral-900"
          >
            <p class="cert-name font-bold text-[14px] sm:text-[15px] lg:text-[16px] text-center mb-[15px]">
              PowerPoint Associate Certificate
            </p>
            <p class="cert-verify inline-block text-[12px] sm:text-[13px] lg:text-[14px] text-white no-underline py-[7px] px-[14px] sm:py-[8px] sm:px-[16px] lg:py-[10px] lg:px-[20px] border border-white/50 rounded-[9px] opacity-80 text-center">
              Verify Here
            </p>
          </a>
        </div>

        <!-- CERT 2 -->
        <div class="certificate w-full max-w-[350px] sm:max-w-[350px] lg:w-[400px] text-center rounded-[12px] overflow-hidden backdrop-blur-[10px] bg-[rgba(6,5,5,0.4)] shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-[10px]">
          <img 
            src="/images/certificate/cert2.jpg" 
            class="cert-img w-full cursor-pointer transition duration-300 hover:scale-110 object-cover" 
            alt="Word Associate Certificate"
            @click="openModal('/images/certificate/cert2.jpg')"
          />

          <a 
            href="https://www.certiport.com/portal/pages/credentialverification.aspx"
            target="_blank"
            rel="noopener noreferrer"
            class="cert-info block p-[15px] no-underline text-white bg-gradient-to-br from-[#111] to-[#1c1c1c] transition duration-300 hover:bg-gradient-to-br hover:from-[#dadada] hover:to-[#949494] hover:text-neutral-900"
          >
            <p class="cert-name font-bold text-[14px] sm:text-[15px] lg:text-[16px] text-center mb-[15px]">
              Word Associate Certificate
            </p>
            <p class="cert-verify inline-block text-[12px] sm:text-[13px] lg:text-[14px] text-white no-underline py-[7px] px-[14px] sm:py-[8px] sm:px-[16px] lg:py-[10px] lg:px-[20px] border border-white/50 rounded-[9px] opacity-80 text-center">
              Verify Here
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- IMAGE MODAL -->
    <div id="imgModal" class="modal fixed inset-0 z-[999] pt-[60px] bg-black/90 flex items-center justify-center" v-if="isModalOpen" @click="closeModal">
      <span class="close absolute top-[20px] right-[15px] sm:right-[20px] lg:right-[35px] text-white text-[28px] sm:text-[32px] lg:text-[40px] cursor-pointer">&times;</span>
      <img class="modal-content mx-auto block w-[95%] sm:w-[90%] max-w-[1200px] rounded-[10px] object-contain" :src="modalImgSrc" alt="Certificate Preview" @click.stop />
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

<style>
/* Global smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>