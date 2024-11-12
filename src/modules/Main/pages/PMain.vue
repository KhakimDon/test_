<template>
  <main>
    <Hero
        :is-loading="isPortfolioLoading"
        :is-error="isBalanceError"
        :is-account-list-loading="isAccountListLoading"
        :account-list="accountList"
        :data="portfolio"
        @select-investment="getPortfolioDetail"
    />
    <Stories
        v-if="isStoryShow"
        :is-loading="isStoryLoading"
        :stories="stories"
    />
  </main>
</template>

<script lang="ts" setup>
import Hero from "@/modules/Main/components/CHero.vue";
import Stories from "@/modules/Main/components/CStories.vue";
import { computed, onMounted } from "vue";
import { useMainStore } from "@/stores";

const mainStore = useMainStore();

const isPortfolioLoading = computed(() => mainStore.loading.accountDetail);
const isAccountListLoading = computed(() => mainStore.loading.accountList);
const isStoryLoading = computed(() => mainStore.loading.stories);
const accountList = computed(() => mainStore.accountList);
const portfolio = computed(() => mainStore.accountDetail);
const stories = computed(() => mainStore.stories);
const isStoryShow = computed(() => mainStore.isStoryShow);
const isBalanceError = computed(() => !portfolio.value);

const getPortfolioDetail = async (id?: number) => {
  await mainStore.fetchAccountDetail(id);
};

onMounted(() => {
  mainStore.fetchStories();
  mainStore.fetchAccountList();
});
</script>
