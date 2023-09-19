<template>
  <div>
    <Teleport v-if="mounted" to="#header-breadcrumbs">
      <SBreadcrumb v-bind="{ routes }" />
    </Teleport>

    <div class="mt-7 bg-white p-10">
      <h1>Metronic Boilerplate Next</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMounted } from "@/composables/useMounted";
import SBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { mounted } = useMounted();
const { t } = useI18n();

const routes = computed(() => [
  {
    name: "Dashboard",
    route: "/",
  },
]);

</script>
