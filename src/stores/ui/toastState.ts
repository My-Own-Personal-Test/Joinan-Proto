interface Toast {
  variant: string
  msg: string
}

interface Payload {
  msg: string
  variant: string
}

export const useToastState = defineStore('toast_state', () => {
  const toasts = ref<Toast[]>([])
  const toastTimeout = ref()
  const toastIndex = ref(0)

  function removeToast() {
    if (toasts.value.length > 0) {
      toasts.value.splice(0, 1)
      if (toasts.value.length > 0) {
        toastTimeout.value = setTimeout(removeToast, 3000)
      }
      else {
        toastTimeout.value = null
        toastIndex.value = 0
      }
    }
  }

  function toastTrigger(payload: Payload) {
    const map = new Map([
      ['success', 'alert-success'],
      ['info', 'alert-info'],
      ['error', 'alert-error'],
      ['warning', 'alert-warning'],
    ])
    const toastDetail: Toast = {
      msg: payload.msg,
      variant: map.get(payload.variant) as string,
    }

    toasts.value.push(toastDetail)

    if (!toastTimeout.value)
      toastTimeout.value = setTimeout(removeToast, 3000)
  }

  return { toasts, toastTrigger }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useToastState, import.meta.hot))
