<template>
  <div class="dark:bg-dark bg-light">
    <RouterView v-slot="{ Component }">
      <div :key="detectLayout">
        <component :is="detectLayout">
          <Component :is="Component" />
        </component>
      </div>
    </RouterView>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, onMounted } from "vue";
import { useRoute } from "vue-router";
import LDefault from "@/layout/Dashboard/LDefault.vue";
import LError from "@/layout/Error/LError.vue";
import LAuth from "@/layout/Auth/LAuth.vue";
import LEmpty from "@/layout/Empty/LEmpty.vue";
import { useThemeMode } from "@/composables/useThemeMode";
import { useAuthStore } from "./modules/Auth/stores.ts";

const route = useRoute();
const layouts: { [key: string]: any } = {
  default: LDefault,
  error: LError,
  auth: LAuth,
  empty: LEmpty,
};

const detectLayout = computed(() => {
  return layouts[route.meta.layout as string];
});

const { setTheme, theme } = useThemeMode();

onBeforeMount(() => {
  useAuthStore().getToken();
});

onMounted(() => {
  document.documentElement.classList.add(theme.value);
  setTheme("light");
});
</script>
