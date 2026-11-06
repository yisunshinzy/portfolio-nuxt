import { ref } from 'vue'

export function useModal() {
  const isModalOpen = ref(false)
  const modalImgSrc = ref('')

  const openModal = (src) => {
    modalImgSrc.value = src
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
  }

  return {
    isModalOpen,
    modalImgSrc,
    openModal,
    closeModal
  }
}