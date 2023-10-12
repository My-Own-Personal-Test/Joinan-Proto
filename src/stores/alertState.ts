interface Payload {
  show: boolean
  msg: string
  variant: string
  timer: any
}

export const useAlertState = defineStore('alert_state', () => {
  const alertState = reactive<Payload>({
    show: false,
    msg: '',
    variant: '',
    timer: null,
  })

  function alertTimeout() {
    clearTimeout(alertState.timer)
    if (alertState.show === true) {
      alertState.timer = setTimeout(() => {
        alertState.show = false
        alertState.msg = ''
        alertState.variant = ''
      }, 3000)
    }
  }

  function alertTrigger(payload: Payload) {
    alertState.variant = payload.variant
    alertState.msg = payload.msg
    alertState.show = payload.show
    alertTimeout()
  }

  return { alertState, alertTrigger }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAlertState, import.meta.hot))
