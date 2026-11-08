<template>
  <div id="app-container" class="min-h-screen text-white overflow-x-hidden font-serif">
    <!--Background Container-->
    <div id="background" class="fixed w-full h-screen top-0 left-0 -z-10"></div>

    <!--Tech Stack Section-->
    <section id="tech" class="section py-[70px] sm:py-[90px] lg:py-[120px] px-4 sm:px-[25px] lg:px-[80px]">
      <h2 class="techstacks text-center text-[32px] sm:text-[42px] lg:text-[60px] font-bold mb-[40px] sm:mb-[50px] lg:mb-[60px] text-white">Tech Stack</h2>

      <div class="tech-grid w-full max-w-[1400px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[20px] sm:gap-[20px] lg:gap-[30px] p-[20px]">
        <div v-for="tech in techList" :key="tech.name" class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-[18px] sm:rounded-[20px] lg:rounded-[28px] flex flex-col justify-center items-center backdrop-blur-[16px] transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-[rgba(255,255,255,0.14)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.35),0_0_25px_rgba(147,197,253,0.15)]">
          <div class="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.18)] via-transparent to-[rgba(255,255,255,0.05)] opacity-0 group-hover:opacity-100 transition duration-400 ease-out pointer-events-none"></div>
          <img :src="tech.img" :alt="tech.name" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-108 group-hover:rotate-[3deg]">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">{{ tech.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { techList } from '@/scripts/techlist'
import { useVanta } from '@/scripts/vanta'

useHead({
  title: 'Tech Stack | Dan Jared Viernes'
})

useSeoMeta({
  title: 'Tech Stack | Dan Jared Viernes',
  ogTitle: 'Tech Stack | Dan Jared Viernes',
  description: 'Explore the full-stack development technologies, frameworks, and tools used by Dan Jared Viernes.',
  ogDescription: 'Explore the full-stack development technologies, frameworks, and tools used by Dan Jared Viernes.',
  ogImage: '/images/profile/profile1.jpg',
  twitterCard: 'summary_large_image',
})

useVanta('#background')
</script>

<style>

html {
  scroll-behavior: smooth;
}
</style>