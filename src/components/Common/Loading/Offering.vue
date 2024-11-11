<template>
  <div
    class="rounded-2xl p-1 w-full flex flex-col gap-y-3 bg-white/30 dark:bg-gray/15"
  >
    <div class="flex-center-between p-3 pb-0">
      <div class="w-full grid gap-2">
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-20 h-5 rounded-md"
        />
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-16 h-3.5 dark:!shimmer-dark shimmer rounded-md"
        />
      </div>
      <div
        :class="{
          shimmer: theme === 'light',
          'shimmer-dark': theme === 'dark',
        }"
        class="size-9 rounded-md flex-shrink-0"
      />
    </div>

    <div
      class="bg-white/50 dark:bg-gray/30 rounded-xl p-3 text-white flex flex-col gap-3"
    >
      <div class="flex-center-between gap-2">
        <ul v-for="list in 2" :key="list" class="w-full grid gap-2">
          <li
            :class="{
              shimmer: theme === 'light',
              'shimmer-dark': theme === 'dark',
            }"
            class="w-full max-w-16 h-3.5 rounded-md"
          />
          <li
            :class="{
              shimmer: theme === 'light',
              'shimmer-dark': theme === 'dark',
            }"
            class="w-full max-w-24 h-4 rounded-md"
          />
        </ul>
      </div>

      <div class="w-full h-px bg-white dark:!bg-white/10" />

      <div class="flex-center-between gap-2">
        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-full max-w-24 h-5 rounded-md"
        />

        <div
          :class="{
            shimmer: theme === 'light',
            'shimmer-dark': theme === 'dark',
          }"
          class="w-20 h-5 rounded-md flex-shrink-0"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useThemeMode } from "@/composables/useThemeMode";

const { theme } = useThemeMode();
</script>
