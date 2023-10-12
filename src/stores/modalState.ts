interface Payload {
  content: string
  size: string
}
export const useModalState = defineStore('modal_state', () => {
  const isOpen = ref(false)
  const size = ref('')
  const modalElement = ref<HTMLDialogElement | null> (null)

  function modalTrigger(payload: Payload) {
    modalElement.value = document.getElementById(payload.content) as HTMLDialogElement
    size.value = payload.size

    if (modalElement.value) {
      if (!isOpen.value)
        modalElement.value.showModal()

      else
        modalElement.value.close()
    }
  }

  return { modalTrigger, isOpen, size }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useModalState, import.meta.hot))
