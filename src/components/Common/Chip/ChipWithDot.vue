<template>
  <span class="inline-flex gap-1.5 items-center rounded-2xl bg-gray py-1 px-2">
    <span class="size-2 rounded-full shrink-0" :class="dotClass" />
    <span class="text-xs text-white font-medium leading-124">
      {{ label }}
    </span>
  </span>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  dotClass?: string;
}

defineProps<Props>();
</script>
