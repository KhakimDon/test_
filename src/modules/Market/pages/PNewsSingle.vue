<template>
  <div>
    <CBreadcrumb has-chevron :title="$t('market_single_tabs.news')" />
    <div class="w-full h-[223px] overflow-hidden">
      <img
        :src="newsSingleData?.imageUrl"
        alt="news image"
        class="size-full object-cover"
      />
    </div>
    <div class="container mt-5">
      <p class="text-xs text-gray-100 leading-124">
        {{ newsSingleData?.date }}
      </p>
      <h2 class="text-base font-medium leading-130 mt-3">
        {{ newsSingleData?.name }}
      </h2>
      <p class="text-sm text-justify mt-4 leading-130">
        {{ newsSingleData?.info }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { news } from "@/data/fake";
import { News } from "@/modules/Market/types";
import CBreadcrumb from "@/components/Common/CBreadcrumb.vue";

const route = useRoute();
const newsSingleData = ref<News | undefined>(undefined);

onMounted(() => {
  const newsId: number = +route.params.id;
  newsSingleData.value = news.find((news) => news.id === newsId);
});
</script>
