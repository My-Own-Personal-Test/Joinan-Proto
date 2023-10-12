<script setup lang="ts">
interface Props {
  class: string | ''
  id: string
}

const props = defineProps<Props>()
</script>

<template>
  <button
    :id="`${props.id}-button`"
    :class="cn('btn capitalize', props.class)"
  >
    <slot />
  </button>
</template>
