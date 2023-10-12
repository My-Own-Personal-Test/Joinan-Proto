<script setup lang="ts">
interface Props {
  id: string | 'modal-1'
  size: string
}
const props = defineProps<Props>()
</script>

<template>
  <Teleport
    to="body"
  >
    <dialog
      :id="props.id"
      class="modal"
    >
      <div :class="cn('modal-box', props.size)">
        <slot />
      </div>
    </dialog>
  </Teleport>
</template>
