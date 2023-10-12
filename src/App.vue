<script setup lang="ts">
import ModalLogin from '@/views/loginPage/-components/ModalLogin.vue'

// import { useDark, useToggle } from '@vueuse/core'

// function theme() {
//   const isDark = useDark({
//     selector: 'html',
//     attribute: 'data-theme',
//     valueDark: 'dark',
//     valueLight: 'light',
//   })

//   const toggle = useToggle(isDark)
//   toggle()
// }
</script>

<template>
  <RouterView />
  <ModalLogin />
</template>
