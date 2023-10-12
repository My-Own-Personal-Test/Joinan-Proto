<script lang="ts" setup>
const _alertState = useAlertState()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="_alertState.alertState.show"
      :class="cn(
        'alert alert-info fixed bottom-10 max-w-xl left-0 right-0 mx-auto',
        _alertState.alertState.variant,
      )"
    >
      <span>{{ _alertState.alertState.msg }}</span>
    </div>
  </Teleport>
</template>
