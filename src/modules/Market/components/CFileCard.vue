<template>
  <div class="bg-transparent border border-gray p-3 rounded-xl w-full">
    <div class="flex items-start justify-between mb-2.5">
      <div class="p-1 rounded-lg bg-primary">
        <span class="size-6 flex-center">
          <i class="icon-file text-white text-2xl" />
        </span>
      </div>
      <div>
        <span class="size-6 flex-center">
          <i class="icon-external-window text-gray-100 text-xl" />
        </span>
      </div>
    </div>
    <h2 class="text-lg text-white">{{ name }}</h2>
    <p class="text-xs text-gray-100">{{ description ?? "Report" }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  description?: string;
  url: string;
}

defineProps<Props>();
</script>
