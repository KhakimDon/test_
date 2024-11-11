<template>
  <CModal v-model="isOpen" :title="title" has-header>
    <p class="text-dark dark:text-white text-sm content" v-html="content" />
  </CModal>
</template>

<script lang="ts" setup>
import { defineModel } from "vue";
import CModal from "@/components/Base/CModal.vue";

interface Props {
  title: string;
  content: string;
}

defineProps<Props>();
const isOpen = defineModel<boolean>();
</script>

<style>
.content p {
  margin: 10px 0;
}
</style>
