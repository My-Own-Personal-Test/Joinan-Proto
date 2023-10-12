<script lang="ts" setup>
const props = defineProps({ class: { type: String, default: '' } })
</script>

<template>
  <div
    :class="cn('card rounded-lg bg-neutral', props.class)"
  >
    <slot />
  </div>
</template>
