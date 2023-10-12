export const useUserState = defineStore('user_state', () => {
  const userDetail = ref()

  return { userDetail }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserState, import.meta.hot))
