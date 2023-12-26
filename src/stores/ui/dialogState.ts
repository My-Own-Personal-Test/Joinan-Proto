interface Payload {
  content: string
  size: string
  show: boolean
}
export const useDialogState = defineStore('dialog_state', () => {
  const isOpen = ref(false)
  const size = ref('')
  const dialogElement = ref<HTMLDialogElement | null>(null)

  function dialogTrigger(payload: Payload) {
    isOpen.value = payload.show
    dialogElement.value = document.getElementById(payload.content) as HTMLDialogElement
    size.value = payload.size

    if (dialogElement.value) {
      if (!dialogElement.value.open) {
        dialogElement.value.showModal()
      }

      else {
        dialogElement.value.close()
        dialogElement.value = null
      }
    }
  }

  return { dialogTrigger, isOpen, size, dialogElement }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDialogState, import.meta.hot))
