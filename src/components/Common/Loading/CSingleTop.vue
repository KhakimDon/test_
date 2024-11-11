<template>
  <section class="grid place-items-center gap-3 container">
    <div
      :class="{
        shimmer: theme === 'light',
        'shimmer-dark': theme === 'dark',
      }"
      class="size-16 rounded-full border border-white/15"
    />

    <div class="text-center w-full grid place-items-center gap-2">
      <div
        :class="{
          shimmer: theme === 'light',
          'shimmer-dark': theme === 'dark',
        }"
        class="w-full max-w-24 h-5 rounded-md"
      />
      <p
        :class="{
          shimmer: theme === 'light',
          'shimmer-dark': theme === 'dark',
        }"
        class="w-full max-w-20 h-3.5 rounded-md"
      />
    </div>

    <ul v-if="hasList" class="w-full grid gap-3">
      <li
        v-for="item in 3"
        :key="item"
        :class="{
          shimmer: theme === 'light',
          'shimmer-dark': theme === 'dark',
        }"
        class="w-full h-5 rounded-md"
      />
    </ul>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  hasList: boolean;
}

withDefaults(defineProps<Props>(), {
  hasList: true,
});

import { useThemeMode } from "@/composables/useThemeMode";

const { theme } = useThemeMode();
</script>
