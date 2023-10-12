<script lang="ts" setup>
// import { useVModel } from '@vueuse/core'

interface Props {
  defaultValue?: string | number
  type: string
  id: string
  label: string
  class?: string
  modelValue?: string | number
}
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const modelValue = useVModel(props, 'modelValue', emits, { passive: true, defaultValue: props.defaultValue })
</script>

<template>
  <div>
    <slot />
    <!-- <label
      :for="`${props.id}-input`"
      class="font-semibold"
    >{{ props.label }}</label> -->
    <input
      :id="`${props.id}-input`"
      v-model="modelValue"
      :type="props.type"
      :placeholder="props.label"
      :class="cn('input w-full', props.class)"
    >
  </div>
</template>
