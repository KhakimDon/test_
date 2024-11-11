<template>
  <KeepAlive>
    <main
      class="flex flex-col gap-2 text-white px-4 relative overflow-x-hidden"
    >
      <CBreadcrumb has-logo />
      <CTab v-model="currentTab" :list="marketTabs" as-link class="mt-4 mb-5" />
      <RouterView />
    </main>
  </KeepAlive>
</template>

<script lang="ts" setup>
import { marketTabs } from "@/data/tabs";
import CTab from "@/components/Tab/CTab.vue";
import { ref, watch } from "vue";
import CBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentTab = ref(
  marketTabs.find((tab) => {
    if (tab.routeName) {
      return tab.routeName.includes(route?.name?.toString() || "market");
    }
  })?.value
);

watch(
  () => route.name,
  () => {
    currentTab.value = marketTabs.find((tab) => {
      if (tab.routeName) {
        return tab.routeName.includes(route?.name?.toString() || "market");
      }
    })?.value;
  }
);
</script>
