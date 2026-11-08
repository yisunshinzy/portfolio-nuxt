<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-[25px] lg:px-[80px] py-8 relative z-10 font-serif min-h-[calc(100vh-140px)] flex flex-col justify-center">
    <!-- Certifications Section -->
    <section id="certifications" class="section py-8 sm:py-[40px] lg:py-[60px] my-auto">
      <!-- Page Title -->
      <h1 class="certification text-center text-[32px] sm:text-[42px] lg:text-[54px] font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 mb-12 drop-shadow-lg">
        Certifications
      </h1>

      <div class="cert flex justify-center flex-wrap gap-[25px] sm:gap-[40px]">
        <!-- CERT 1 -->
        <div class="certificate w-full max-w-[350px] sm:max-w-[350px] lg:w-[400px] text-center rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20 hover:-translate-y-2">
          <div class="overflow-hidden">
            <img 
              src="/images/certificate/cert1.jpg" 
              class="cert-img w-full cursor-pointer transition duration-500 hover:scale-105 object-cover" 
              alt="PowerPoint Associate Certificate"
              @click="openModal('/images/certificate/cert1.jpg')"
            />
          </div>

          <a 
            href="https://www.certiport.com/portal/pages/credentialverification.aspx"
            target="_blank"
            rel="noopener noreferrer"
            class="cert-info block p-6 no-underline text-white bg-slate-900/60 backdrop-blur-md border-t border-white/10 transition-all duration-300 hover:bg-white hover:text-neutral-900 group"
          >
            <p class="cert-name font-bold text-base sm:text-lg text-center mb-4 transition-colors">
              PowerPoint Associate Certificate
            </p>
            <span class="cert-verify inline-block text-xs sm:text-sm font-sans font-medium no-underline py-2 px-5 border border-white/30 rounded-xl opacity-90 transition-all group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
              Verify Here
            </span>
          </a>
        </div>

        <!-- CERT 2 -->
        <div class="certificate w-full max-w-[350px] sm:max-w-[350px] lg:w-[400px] text-center rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20 hover:-translate-y-2">
          <div class="overflow-hidden">
            <img 
              src="/images/certificate/cert2.jpg" 
              class="cert-img w-full cursor-pointer transition duration-500 hover:scale-105 object-cover" 
              alt="Word Associate Certificate"
              @click="openModal('/images/certificate/cert2.jpg')"
            />
          </div>

          <a 
            href="https://www.certiport.com/portal/pages/credentialverification.aspx"
            target="_blank"
            rel="noopener noreferrer"
            class="cert-info block p-6 no-underline text-white bg-slate-900/60 backdrop-blur-md border-t border-white/10 transition-all duration-300 hover:bg-white hover:text-neutral-900 group"
          >
            <p class="cert-name font-bold text-base sm:text-lg text-center mb-4 transition-colors">
              Word Associate Certificate
            </p>
            <span class="cert-verify inline-block text-xs sm:text-sm font-sans font-medium no-underline py-2 px-5 border border-white/30 rounded-xl opacity-90 transition-all group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
              Verify Here
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- modal -->
    <div 
      id="imgModal" 
      class="modal fixed inset-0 z-[999] p-4 bg-black/90 backdrop-blur-md flex items-center justify-center transition-all" 
      v-if="isModalOpen" 
      @click="closeModal"
    >
      <span class="close absolute top-6 right-6 text-white/80 hover:text-white text-4xl cursor-pointer transition-colors">&times;</span>
      <img 
        class="modal-content mx-auto block max-w-[90vw] max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10" 
        :src="modalImgSrc" 
        alt="Certificate Preview" 
        @click.stop 
      />
    </div>
  </div>
</template>

<script setup>
import { useModal } from '@/scripts/modal'

useHead({
  title: 'Certifications | Dan Jared Viernes'
})

useSeoMeta({
  title: 'Certifications | Dan Jared Viernes',
  ogTitle: 'Certifications | Dan Jared Viernes',
  description: 'View professional certifications earned by Dan Jared Viernes, including Microsoft PowerPoint Associate and Word Associate credentials.',
  ogDescription: 'View professional certifications earned by Dan Jared Viernes, including Microsoft PowerPoint Associate and Word Associate credentials.',
  ogImage: '/images/certificate/cert1.jpg',
  twitterCard: 'summary_large_image',
})

const { isModalOpen, modalImgSrc, openModal, closeModal } = useModal()
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>