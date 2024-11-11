<template>
  <header class="bg-transparent fixed top-0 left-0 right-0 z-100 w-full">
    <div class="container">
      <div class="flex justify-between items-center gap-5 py-4">
        <div></div>
        <div>
          <img
            v-if="isDark"
            alt="Logo"
            class="w-[92px]"
            src="/images/logo.png"
          />
          <img v-else alt="Logo" class="w-[92px]" src="/images/dark-logo.png" />
        </div>
        <button
          class="size-6 flex-center bg-light-accent dark:bg-dark-accent rounded-full p-1"
        >
          <i class="icon-close text-dark dark:text-white text-base"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useThemeMode } from "@/composables/useThemeMode";
import { computed } from "vue";

const { theme } = useThemeMode();

const isDark = computed(() => {
  return theme.value === "dark";
});
</script>
