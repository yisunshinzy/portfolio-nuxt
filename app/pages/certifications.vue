<template>
  <div id="app-container" class="min-h-screen text-white overflow-x-hidden font-serif">
    <!--Background Container-->
    <div id="background" class="fixed w-full h-screen top-0 left-0 -z-10"></div>

    <!--Certifications Section-->
    <section id="certifications" class="section py-[70px] sm:py-[90px] lg:py-[120px] px-4 sm:px-[25px] lg:px-[80px]">
      <h2 class="certification text-center text-[26px] sm:text-[32px] lg:text-[40px] font-bold tracking-[2px] mb-[50px] text-white">Certifications</h2>

      <div class="cert flex justify-center flex-wrap gap-[25px] sm:gap-[40px]">
        <!--CERT 1-->
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

        <!--CERT 2-->
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

    <!--IMAGE MODAL-->
    <div id="imgModal" class="modal fixed inset-0 z-[999] pt-[60px] bg-black/90 flex items-center justify-center" v-if="isModalOpen" @click="closeModal">
      <span class="close absolute top-[20px] right-[15px] sm:right-[20px] lg:right-[35px] text-white text-[28px] sm:text-[32px] lg:text-[40px] cursor-pointer">&times;</span>
      <img class="modal-content mx-auto block w-[95%] sm:w-[90%] max-w-[1200px] rounded-[10px] object-contain" :src="modalImgSrc" alt="Certificate Preview" @click.stop />
    </div>
  </div>
</template>

<script setup>
import { useModal } from '@/scripts/modal'
import { useVanta } from '@/scripts/vanta'

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

useVanta('#background')
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>