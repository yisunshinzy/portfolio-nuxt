<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-[25px] lg:px-[80px] py-8 relative z-10 font-serif">
    <!-- Hero Section -->
    <section id="home" class="min-h-[75vh] flex justify-center items-center py-8 sm:py-[40px] lg:py-[60px]">
      
      <!-- Glassmorphism Card Wrapper matching 404/About/Certifications -->
      <div class="home-content bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-[30px] lg:gap-[40px] max-w-4xl w-full mx-auto transition-all duration-500 hover:border-white/20">
        
        <div class="home-image flex-shrink-0">
          <img 
            src="/images/profile/profile1.jpg" 
            alt="Dan Jared Viernes" 
            class="w-[150px] sm:w-[200px] lg:w-[250px] rounded-[30%] border-4 border-white/20 object-cover shadow-2xl transition-transform duration-500 hover:scale-105" 
          />
        </div>

        <div class="home-info flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h1 class="text-3xl sm:text-[38px] lg:text-[48px] font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 m-0 drop-shadow-lg">
            Dan Jared Viernes
          </h1>
          <p class="subtitle text-sm sm:text-base lg:text-lg font-sans font-medium text-cyan-400 tracking-widest uppercase mt-2">
            Full Stack Developer
          </p>
        </div>

      </div>

    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Dan Jared Viernes | Full Stack Developer'
})

useSeoMeta({
  title: 'Dan Jared Viernes | Full Stack Developer',
  ogTitle: 'Dan Jared Viernes | Full Stack Developer',
  description: 'Portfolio of Dan Jared Viernes, featuring full-stack web applications, mobile projects, and software design.',
  ogDescription: 'Portfolio of Dan Jared Viernes, featuring full-stack web applications, mobile projects, and software design.',
  ogImage: '/images/profile/profile1.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>