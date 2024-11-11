<template>
  <div class="grid gap-4 overflow-auto">
    <h2 class="text-dark dark:text-white font-semibold">{{ title }}</h2>
    <p class="text-dark dark:text-white text-justify text-sm">
      {{ info }}
    </p>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  info: string;
}

defineProps<Props>();
</script>
