<template>
  <div id="app-container" class="min-h-screen text-white overflow-x-hidden font-serif">
    <!-- Background Container -->
    <div id="background" class="fixed w-full h-screen top-0 left-0 -z-10"></div>

    <!-- Tech Stack Section -->
    <section id="tech" class="section py-[70px] sm:py-[90px] lg:py-[120px] px-4 sm:px-[25px] lg:px-[80px]">
      <h2 class="techstacks text-center text-[32px] sm:text-[42px] lg:text-[60px] font-bold mb-[40px] sm:mb-[50px] lg:mb-[60px] text-white">Tech Stack</h2>

      <div class="tech-grid w-full max-w-[1400px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[20px] sm:gap-[20px] lg:gap-[30px] p-[20px]">
        
        <!-- HTML -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/html.png" alt="HTML" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">HTML</p>
        </div>

        <!-- CSS -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/css.png" alt="CSS" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">CSS</p>
        </div>

        <!-- JavaScript -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/javascript.png" alt="JavaScript" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">JavaScript</p>
        </div>

        <!-- GitHub -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/git.png" alt="GitHub" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">GitHub</p>
        </div>

        <!-- VS Code -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/vscode.png" alt="VSCode" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">VS Code</p>
        </div>

        <!-- Java -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/java.png" alt="Java" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">Java</p>
        </div>

        <!-- C -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/c.png" alt="C" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">C</p>
        </div>

        <!-- Python -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/python.png" alt="Python" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">Python</p>
        </div>

        <!-- Oracle APEX -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/apex.png" alt="Oracle APEX" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">Oracle APEX</p>
        </div>

        <!-- IntelliJ -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/intellij.png" alt="IntelliJ" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">IntelliJ</p>
        </div>

        <!-- Android Studio -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/android.png" alt="Android Studio" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">Android Studio</p>
        </div>

        <!-- SSMS -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/database.png" alt="SSMS" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">SSMS</p>
        </div>

        <!-- PostgreSQL -->
        <div class="tech-box h-[220px] sm:h-[220px] lg:h-[260px] bg-white/10 border border-white/20 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md transition-all duration-300 ease-out relative overflow-hidden group hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
          <img src="/images/techstacks/postgre.png" alt="PostgreSQL" class="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] object-contain mb-[10px] sm:mb-[15px] lg:mb-[22px] transition duration-400 ease-out group-hover:scale-105">
          <p class="text-[15px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[1px] text-white">PostgreSQL</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

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
html {
  scroll-behavior: smooth;
}
</style>