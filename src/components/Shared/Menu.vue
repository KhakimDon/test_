<template>
  <div
    class="fixed bottom-0 absolute-x z-100 dark:bg-dark bg-light left-0 right-0 w-full py-3 px-2 border-t dark:border-gray-600 border-light-100 max-w-phone"
  >
    <div class="container !px-2">
      <nav class="flex items-center justify-between gap-5">
        <RouterLink
          v-for="({ label, route, icon }, idx) in menu"
          :key="idx"
          :to="route"
          class="flex flex-col gap-1.5 items-center w-full"
        >
          <span
            :class="{ '!text-primary': isActive(label.replace('menu.', '')) }"
            aria-label="Menu icon"
            class="size-7 flex-center dark:text-gray-500 text-light-700"
          >
            <i :class="icon" class="text-2xl" />
          </span>
          <span
            :class="{ '!text-primary': isActive(label.replace('menu.', '')) }"
            class="text-xs dark:text-gray-400 text-light-700 font-golos"
          >
            {{ $t(label) }}
          </span>
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { menu } from "@/data/menu";
import { useRoute } from "vue-router";

const route = useRoute();

function isActive(path: string) {
  return route.path.includes(path);
}
</script>

<style>
.router-link-active span {
  @apply text-primary;
}
</style>
