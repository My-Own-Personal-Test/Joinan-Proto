<script setup lang="ts">
interface Props {
  class: string | ''
  id: string
  disabled: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <button
    :id="`${props.id}-button`"
    :class="cn('btn capitalize', props.class)"
    :disabled="props.disabled"
    :aria-disabled="props.disabled"
  >
    <slot />
  </button>
</template>
