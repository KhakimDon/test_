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

<script lang="ts" setup>
import { computed, onBeforeMount, onMounted } from "vue";
import { useRoute } from "vue-router";
import LDefault from "@/layout/LDefault.vue";
import LError from "@/layout/LError.vue";
import LEmpty from "@/layout/LEmpty.vue";

const route = useRoute();
const layouts: { [key: string]: any } = {
  default: LDefault,
  error: LError,
  empty: LEmpty,
};

const detectLayout = computed(() => {
  return layouts[route.meta.layout as string];
});
</script>

<style>
.wrapper {
  max-width: 1187px !important;
  margin: auto !important;
}
@media screen and (max-width: 965px) {
  .wrapper {
    max-width: 95% !important;
    margin: auto !important;
  }
}
</style>
