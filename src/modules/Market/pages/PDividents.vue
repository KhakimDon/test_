<template>
  <div>
    <div class="container mt-4">
      <div class="grid grid-cols-12 gap-3 pb-3 border-b border-gray mb-4">
        <div class="col-span-6">
          <p class="text-sm font-medium">{{ $t("analytics.payment_date") }}</p>
        </div>
        <div class="col-span-3 flex justify-end">
          <p class="text-sm font-medium">{{ $t("summa") }}</p>
        </div>
        <div class="col-span-3 flex justify-end">
          <p class="text-sm font-medium">{{ $t("analytics.income") }}</p>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-3">
        <template v-for="(item, index) in dividentsData" :key="index">
          <div class="col-span-6" @click="toggleMore(index)">
            <div class="flex items-center gap-2">
              <span
                :class="{
                  'rotate-180 bg-primary-gradient text-white':
                    !isCollapsed(index),
                }"
                class="size-6 py-1 flex-center text-sm text-gray-100 rounded-md"
              >
                <i class="icon-chevron-down1"></i>
              </span>
              <span class="text-sm font-medium leading-130">{{
                item.payment_date
              }}</span>
            </div>
          </div>
          <div class="col-span-3 flex justify-end">
            <span class="text-sm font-medium leading-130">{{
              item.price
            }}</span>
          </div>
          <div class="col-span-3 flex justify-end">
            <span class="text-sm font-medium leading-130">{{
              item.income
            }}</span>
          </div>
          <CollapseTransition class="col-span-12">
            <div
              v-if="item.more.length"
              v-show="!isCollapsed(index)"
              class="w-full border border-gray-100 dark:border-gray-700 rounded-xl py-1 bg-gray"
            >
              <div>
                <div
                  v-for="(item, index) in item.more"
                  :key="index"
                  class="flex justify-between px-3 border-b border-gray-100 dark:border-gray-700 py-2 last:border-b-0"
                >
                  <p class="text-sm leading-130">{{ item.label }}</p>
                  <p class="text-sm leading-130">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </CollapseTransition>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";
import { dividentsData } from "@/data/fake";

const expandedIndex = ref<number | null>(null);

const toggleMore = (index: number) => {
  if (expandedIndex.value === index) {
    expandedIndex.value = null;
  } else {
    expandedIndex.value = index;
  }
};

const isCollapsed = (index: number) => {
  return expandedIndex.value !== index;
};
</script>
