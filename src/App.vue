<template>
  <div>
    <RouterView v-slot="{ Component }">
      <div :key="detectLayout">
        <component :is="detectLayout">
          <Component :is="Component" />
        </component>
      </div>
    </RouterView>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import LDefault from "@/layout/LDefault.vue";
import LError from "@/layout/LError.vue";
import LAuth from "@/layout/LAuth.vue";
// Setup

const route = useRoute();
const layouts: { [key: string]: string } = {
  default: LDefault,
  error: LError,
  auth: LAuth,
};

const detectLayout = computed(() => {
  return layouts[route.meta.layout as string];
});

</script>