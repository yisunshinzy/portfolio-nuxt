<template>
  <div class="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative z-10 font-serif">
    <!-- Redesigned 404 Card -->
    <div class="w-full max-w-2xl text-center bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-white/20">
      
      <!-- Big Glowing 404 Header -->
      <div class="relative inline-block mb-4">
        <span class="absolute -inset-1 blur-2xl opacity-30 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full"></span>
        <h1 class="relative text-7xl sm:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-lg">
          404
        </h1>
      </div>

      <!-- Main Title & Description with daisyUI Badge -->
      <div class="space-y-4 mb-8">
        <div class="flex justify-center">
          <span class="badge badge-error badge-outline font-sans tracking-widest uppercase py-3 px-4 font-semibold text-xs sm:text-sm">
            Error 404
          </span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-bold tracking-wider uppercase text-white drop-shadow-sm">
          Page Not Found
        </h2>
        <p class="text-sm sm:text-base text-gray-300 opacity-80 leading-relaxed max-w-lg mx-auto font-sans tracking-wide">
          OOOOOPPPPPSSSSSS GOOOOOO BACKKKKKKKK!!!!
        </p>
      </div>

      <!-- Single daisyUI Action Button -->
      <div class="flex justify-center items-center pt-2">
        <NuxtLink
          to="/"
          class="btn btn-neutral btn-outline backdrop-blur-md bg-white/[0.04] hover:bg-white/10 border-white/20 hover:border-cyan-400 text-white hover:text-cyan-400 font-sans tracking-wide text-sm sm:text-base rounded-xl px-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 no-underline"
        >
          Return to Homepage
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '404 - Page Not Found | Dan Jared R. Viernes'
})

useSeoMeta({
  title: '404 - Page Not Found | Dan Jared R. Viernes',
  description: 'The requested page could not be found.',
  ogTitle: '404 - Page Not Found | Dan Jared R. Viernes',
  twitterCard: 'summary_large_image'
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>