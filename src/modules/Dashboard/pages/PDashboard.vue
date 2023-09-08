<template>
  <div>
    <teleport v-if="mounted" to="#header-breadcrumbs">
      <SBreadcrumb v-bind="{ routes }" />
    </teleport>
    <div class="mt-7 bg-white p-10">
      <FInput placeholder="Hello" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMounted } from "@/composables/useMounted";
import SBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import FInput from "@/components/Form/Input/FInput.vue";
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";

const { mounted } = useMounted();
const { t } = useI18n();

const routes = computed(() => [
  {
    name: t("menus.news"),
    route: "/",
  },
]);

const value = ref(true);
</script>
