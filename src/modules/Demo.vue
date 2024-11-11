<template>
  <main class="container py-3">
    <Tab :list="list" v-model="tab" />
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Tab from "@/components/Tab/CTab.vue";

const tab = ref("1");

const list = [
  { value: "1", label: "Tab 1" },
  { value: "2", label: "Tab 2" },
  { value: "3", label: "Tab 3" },
];
</script>
