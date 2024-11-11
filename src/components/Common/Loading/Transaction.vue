<template>
  <div class="flex-center-between gap-1 bg-gray/20 p-1 rounded-lg m-2">
    <div
      :class="{
        shimmer: theme === 'light',
        'shimmer-dark': theme === 'dark',
      }"
      class="size-9 rounded-lg flex-shrink-0"
    />

    <div class="w-full flex-center-between">
      <div class="flex flex-col gap-1 w-full">
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-44 h-4 rounded-md"
        />
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-24 h-4 rounded-md"
        />
      </div>
      <div class="flex flex-col gap-1 w-full items-end">
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-24 h-4 rounded-md"
        />
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-20 h-4 rounded-md"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useThemeMode } from "@/composables/useThemeMode";

const { theme } = useThemeMode();
</script>
