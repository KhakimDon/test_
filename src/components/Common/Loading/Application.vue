<template>
  <div
    class="flex flex-col bg-white/30 dark:bg-gray/30 p-3 rounded-xl relative"
  >
    <div class="flex-center-between !items-start">
      <div class="flex-y-center gap-x-2">
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="size-10 rounded flex-shrink-0"
        />

        <div class="grid gap-1">
          <div
            :class="{
              shimmer: theme === 'light',
              'shimmer-dark': theme === 'dark',
            }"
            class="w-20 h-4 rounded"
          />
          <div
            :class="{
              shimmer: theme === 'light',
              'shimmer-dark': theme === 'dark',
            }"
            class="w-16 h-3 rounded"
          />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 mt-3">
      <div>
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-32 h-3 rounded"
        />
        <span
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-40 h-4 rounded font-semibold"
        >
        </span>
      </div>
      <div>
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-32 h-3 rounded"
        />
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-40 h-4 rounded font-semibold"
        />
      </div>
      <div>
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-32 h-3 rounded"
        />
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-40 h-4 rounded"
        />
      </div>
      <div>
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-32 h-3 rounded"
        />
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-40 h-4 rounded"
        />
      </div>
    </div>

    <div
      :class="{
        shimmer: theme === 'light',
        'shimmer-dark': theme === 'dark',
      }"
      class="absolute right-4 top-4 rounded w-14 h-4"
    />
  </div>
</template>

<script lang="ts" setup>
import { useThemeMode } from "@/composables/useThemeMode";

const { theme } = useThemeMode();
</script>
