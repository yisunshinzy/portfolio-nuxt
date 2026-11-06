<template>
  <div id="app-container" class="min-h-screen text-white overflow-x-hidden font-serif">
    <!-- Background Container -->
    <div id="background" class="fixed w-full h-screen top-0 left-0 -z-10"></div>

    <!-- Contact Section -->
    <section id="contact" class="section contact-section text-center text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] py-[70px] sm:py-[90px] lg:py-[120px] px-4 sm:px-[25px] lg:px-[80px]">
      <h2 class="text-[26px] sm:text-[34px] lg:text-[46px] font-bold mb-6">Contact</h2>

      <p class="contact-text max-w-[800px] mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
        Thank you for visiting my portfolio. If you have any questions, project ideas, collaborations, 
        or opportunities, feel free to contact me.
      </p>

      <div class="contact-buttons flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        <a 
          href="https://www.linkedin.com/in/dan-jared-viernes-021752351/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn inline-block py-[10px] px-5 sm:py-[10px] sm:px-[20px] lg:py-[12px] lg:px-[25px] bg-[#3e3e3e] text-white no-underline text-[13px] sm:text-[14px] lg:text-base transition duration-300 hover:bg-[#656565] w-full sm:w-auto box-border"
        >
          LinkedIn
        </a>

        <a 
          href="https://github.com/yisunshinzy" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn inline-block py-[10px] px-5 sm:py-[10px] sm:px-[20px] lg:py-[12px] lg:px-[25px] bg-[#3e3e3e] text-white no-underline text-[13px] sm:text-[14px] lg:text-base transition duration-300 hover:bg-[#656565] w-full sm:w-auto box-border"
        >
          GitHub
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useVanta } from '@/scripts/vanta'

// Initialize Vanta background animation for the contact page
useVanta('#background')
</script>

<style>
/* Global smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>