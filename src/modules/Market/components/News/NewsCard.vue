<template>
  <div @click="navigateToNewsSingle(id)">
    <div class="flex items-center gap-3">
      <div class="w-[120px] h-[75px] rounded-md overflow-hidden shrink-0">
        <img :src="imageUrl" alt="news-image" class="size-full object-cover" />
      </div>
      <div>
        <h6 class="text-gray-100 text-xs font-medium leading-124 mb-1">
          {{ date }}
        </h6>
        <h2 class="text-sm font-bold leading-124 line-clamp-3">{{ name }}</h2>
      </div>
    </div>
    <div class="flex">
      <div class="w-[calc(120px_+_12px)] shrink-0" />
      <div class="w-full h-[1px] bg-gray mt-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { News } from "@/modules/Market/types";
import { useRouter } from "vue-router";

type Props = News;

const router = useRouter();

const navigateToNewsSingle = (id: Props["id"]) => {
  router.push(`news/${id}`);
};

defineProps<Props>();
</script>
