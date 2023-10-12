<script setup lang="ts">
import LocationDialog from '@/views/loginPage/-components/LocationDialog.vue'

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
  <LocationDialog />
  <AlertRoot />
</template>
