<template>
  <div class="container">
    <div
      class="flex justify-between items-center text-dark dark:text-white-100 w-full py-4"
    >
      <div class="min-w-6">
        <button
          v-if="hasChevron"
          class="icon-chevron-left text-lg"
          @click="router.go(-1)"
        />
      </div>
      <p v-if="title" class="font-medium leading-5">{{ $t(title) }}</p>
      <RouterLink v-else to="/">
        <img
          :src="isDark ? '/images/logo.png' : '/images/dark-logo.png'"
          alt="go invest app"
          class="w-full max-w-28 object-center object-contain"
        />
      </RouterLink>
      <button
        class="icon-close text-base size-8 bg-[#C1C4D999] dark:bg-gray rounded-full text-dark dark:text-white-100"
        @click="router.go(-1)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { useThemeMode } from "@/composables/useThemeMode";
import { computed } from "vue";

export interface Props {
  title?: string;
  hasLogo?: boolean;
  hasChevron?: boolean;
}

const { theme } = useThemeMode();

const isDark = computed(() => {
  return theme.value === "dark";
});

defineProps<Props>();
</script>
