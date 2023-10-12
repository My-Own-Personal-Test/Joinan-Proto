<script lang="ts" setup>
const _toastState = useToastState()
</script>

<template>
  <Teleport
    v-if="_toastState.toasts.length"
    to="body"
  >
    <div
      class="toast"
    >
      <div
        v-for="(item, id) in _toastState.toasts"
        :key="id"
        :class="cn('alert', item.variant)"
      >
        <span>{{ item.msg }}</span>
      </div>
    </div>
  </Teleport>
</template>
