<template>
  <label
    :class="$attrs.class"
    :for="id"
    class="text-sm font-normal text-gray-100"
  >
    <span>
      {{ label }}
    </span>
    <slot />
  </label>
</template>
<script lang="ts" setup>
interface Props {
  label: string;
  id?: string;
}

defineProps<Props>();
</script>
