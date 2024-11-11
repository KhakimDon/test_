<template>
  <div class="container">
    <NewsCardWrapper :news="newsData" />
  </div>
</template>

<script setup lang="ts">
import NewsCardWrapper from "@/modules/Market/components/News/NewsCardWrapper.vue";
import { news } from "@/data/fake";
import { ref } from "vue";

const newsData = ref(news);
</script>
