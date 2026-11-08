<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-[25px] lg:px-[80px] py-8 relative z-10 font-serif">
    <!-- About Section -->
    <section id="about" class="section py-8 sm:py-[40px] lg:py-[60px]">
      <div class="about flex justify-center items-center gap-[25px] sm:gap-[40px] lg:gap-[100px] flex-wrap">
        <div class="about-self max-w-[1000px] w-full">
          
          <!-- Page Title with Entrance Fade Animation -->
          <div class="text-center mb-8 animate-fade-in">
            <h1 class="abouttitle text-[32px] sm:text-[42px] lg:text-[54px] font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 m-0 drop-shadow-lg font-serif">
              About Me
            </h1>
          </div>

          <!-- Glassmorphism Card with Layout & Image Integration -->
          <div class="w-full bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-white/20 flex flex-col md:flex-row items-center gap-8 lg:gap-12 animate-fade-in-up">
            
            <!-- Side Profile Image with Glow Ring -->
            <div class="flex-shrink-0 relative group">
              <span class="absolute -inset-1.5 blur-xl opacity-30 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl group-hover:opacity-75 transition duration-500 animate-pulse"></span>
              <img 
                src="/images/profile/profile1.jpg" 
                alt="Dan Jared Viernes" 
                class="relative w-[200px] sm:w-[240px] md:w-[260px] lg:w-[280px] h-auto rounded-3xl border-4 border-white/20 object-cover shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-white/40"
              />
            </div>

            <!-- Content Area -->
            <div class="space-y-6 text-left">
              
              <!-- Interest Badges using daisyUI -->
              <div class="flex flex-wrap gap-2 justify-center md:justify-start">
                <span class="badge badge-neutral bg-white/10 text-cyan-300 border-white/10 font-sans tracking-wider uppercase text-xs py-2 px-3">
                  Full Stack
                </span>
                <span class="badge badge-neutral bg-white/10 text-cyan-300 border-white/10 font-sans tracking-wider uppercase text-xs py-2 px-3">
                  Basketball
                </span>
                <span class="badge badge-neutral bg-white/10 text-cyan-300 border-white/10 font-sans tracking-wider uppercase text-xs py-2 px-3">
                  Valorant
                </span>
                <span class="badge badge-neutral bg-white/10 text-cyan-300 border-white/10 font-sans tracking-wider uppercase text-xs py-2 px-3">
                  Food Enthusiast
                </span>
              </div>

              <!-- Paragraphs set to Marcellus SC Font -->
              <p class="font-marcellus text-base sm:text-lg lg:text-xl leading-[1.7] lg:leading-[1.8] text-gray-200 opacity-95 tracking-wide">
                I want to become a full-stack developer because I enjoy creating projects, 
                solving problems, and turning ideas into useful technology. 
                Outside of my studies, I am big into basketball—I love making plays with my teams. 
                I also spend a lot of my free time playing Valorant, 
                which actually helped spark my initial interest in programming. 
                Also, I am a huge fan of trying new foods, 
                especially finding the best food spots in the area.
              </p>

              <p class="font-marcellus text-base sm:text-lg lg:text-xl leading-[1.7] lg:leading-[1.8] text-gray-200 opacity-95 tracking-wide">
                My experience on the basketball court has shaped my professional outlook. 
                I believe that the best technical solutions come from high-performing teams. 
                I also want to create applications that are as engaging as the games I play, 
                focusing on making applications more accessible and enjoyable for every user.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'About | Dan Jared Viernes',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap'
    }
  ]
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

.font-marcellus {
  font-family: 'Marcellus SC', serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>