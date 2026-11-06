<template>
  <div id="app-container" class="min-h-screen text-white overflow-x-hidden font-serif">
    <!-- Background Container -->
    <div id="background" class="fixed w-full h-screen top-0 left-0 -z-10"></div>

    <!-- Hero Section taking full screen height to push footer below the fold -->
    <section id="home" class="min-h-[85vh] flex justify-center items-center px-4 sm:px-10 lg:px-[80px] pt-20">
      
      <!-- Glassmorphism Card Wrapper -->
      <div class="home-content bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-[30px] lg:gap-[40px] max-w-4xl w-full mx-auto">
        
        <div class="home-image flex-shrink-0">
          <img 
            src="/images/profile/profile1.jpg" 
            alt="profile" 
            class="w-[150px] sm:w-[200px] lg:w-[250px] rounded-[30%] border-4 border-white object-cover shadow-lg" 
          />
        </div>

        <div class="home-info flex flex-col items-center justify-center text-center">
          <h1 class="text-2xl sm:text-[30px] lg:text-[40px] font-bold m-0 tracking-wide">
            Dan Jared Viernes
          </h1>
          <p class="subtitle text-[13px] sm:text-[15px] lg:text-[18px] opacity-90 mt-1 sm:mt-[5px] uppercase tracking-wider text-cyan-200">
            Full Stack Developer
          </p>
        </div>

      </div>

    </section>
  </div>
</template>

<script setup>
import { useVanta } from '@/scripts/vanta'

// Initialize Vanta waves background for the home page
useVanta('#background')
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>