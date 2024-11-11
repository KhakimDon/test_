<template>
  <h2 class="text-base font-bold leading-130 text-white">
    {{ text }}
  </h2>
</template>

<script lang="ts" setup>
interface Props {
  text: string;
}

defineProps<Props>();
</script>
