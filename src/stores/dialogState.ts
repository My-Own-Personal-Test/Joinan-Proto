interface Payload {
  content: string
  size: string
}
export const useDialogState = defineStore('dialog_state', () => {
  const isOpen = ref(false)
  const size = ref('')
  const dialogElement = ref<HTMLDialogElement | null> (null)

  function dialogTrigger(payload: Payload) {
    dialogElement.value = document.getElementById(payload.content) as HTMLDialogElement
    size.value = payload.size

    if (dialogElement.value) {
      if (!isOpen.value)
        dialogElement.value.showModal()

      else
        dialogElement.value.close()
    }
  }

  return { dialogTrigger, isOpen, size }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDialogState, import.meta.hot))
