<template>
  <div class="grid gap-3">
    <NewsCard
      v-for="item in news"
      :id="item.id"
      :key="item.id"
      :imageUrl="item.imageUrl"
      :date="item.date"
      :name="item.name"
    />
  </div>
</template>

<script setup lang="ts">
import NewsCard from "./NewsCard.vue";
import { News } from "@/modules/Market/types";

interface Props {
  news: News[];
}

defineProps<Props>();
</script>
