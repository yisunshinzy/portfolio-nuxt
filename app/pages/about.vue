<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-[25px] lg:px-[80px] py-8 relative z-10 font-serif">
    <!-- About Section -->
    <section id="about" class="section py-8 sm:py-[40px] lg:py-[60px]">
      <div class="about flex justify-center items-center gap-[25px] sm:gap-[40px] lg:gap-[100px] flex-wrap">
        <div class="about-self max-w-[1000px] w-full">
          <!-- Page Title -->
          <h1 class="abouttitle text-center text-[32px] sm:text-[42px] lg:text-[54px] font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 mb-8 drop-shadow-lg">
            About
          </h1>

          <!-- Glass Card Container matching 404 styling -->
          <div class="w-full bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-white/20 space-y-6">
            <p class="text-base sm:text-[20px] lg:text-[22px] leading-[1.6] sm:leading-[1.7] lg:leading-[1.8] text-center text-gray-200 opacity-95 tracking-wide">
              I want to become a full-stack developer because I enjoy creating projects, 
              solving problems, and turning ideas into useful technology. 
              Outside of my studies, I am big into basketball, 
              I love making plays with my teams. 
              I also spend a lot of my free time playing Valorant, 
              which actually helped spark my initial interest in programming. 
              Also, I am a huge fan of trying new foods, 
              especially finding the best food spots in the area.
            </p>

            <p class="text-base sm:text-[20px] lg:text-[22px] leading-[1.6] sm:leading-[1.7] lg:leading-[1.8] text-center text-gray-200 opacity-95 tracking-wide">
              My experience on the basketball court has shaped my professional outlook. 
              I believe that the best technical solutions come from high-performing teams. 
              I also want to create applications that are as engaging as the games I play, 
              focusing on making applications more accessible and enjoyable for every user.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'About | Dan Jared Viernes'
})

useSeoMeta({
  title: 'About | Dan Jared Viernes',
  ogTitle: 'About | Dan Jared Viernes',
  description: 'Learn more about Dan Jared Viernes, full-stack developer background, personal interests, team mindset, and technology passion.',
  ogDescription: 'Learn more about Dan Jared Viernes, full-stack developer background, personal interests, team mindset, and technology passion.',
  ogImage: '/images/profile/profile1.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>