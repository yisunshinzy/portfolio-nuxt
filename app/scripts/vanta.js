import { onMounted, onBeforeUnmount } from 'vue'

export function useVanta(elementId) {
  let vantaEffect = null

  if (typeof window !== 'undefined') {
    const loadScript = (src) => {
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

    onMounted(async () => {
      await loadScript('https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js')
      await loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js')

      if (window.VANTA) {
        vantaEffect = window.VANTA.WAVES({
          el: elementId,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00
        })
      }
    })

    onBeforeUnmount(() => {
      if (vantaEffect) vantaEffect.destroy()
    })
  }
}