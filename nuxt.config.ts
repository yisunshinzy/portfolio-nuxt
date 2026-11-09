// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js',
          defer: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js',
          defer: true
        }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Marcellus+SC&display=swap'
        }
      ]
    }
  },
  vite: {
    build: {
      cssMinify: 'esbuild'
    }
  }
})