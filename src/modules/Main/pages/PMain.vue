<template>
  <main>
    <Hero
      :is-loading="isPortfolioLoading"
      :is-error="isBalanceError"
      :is-account-list-loading="isAccountListLoading"
      :account-list="accountList!"
      :data="portfolio!"
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
import { useApi } from "@/composables/useApi";
import { onMounted, ref } from "vue";
import { Account, Portfolio, Story } from "@/modules/Main/types";
import { useHandleError } from "@/composables/useHandleError";
import { IResponse } from "@/types/common";
import { useMainStore } from "@/stores";

const mainStore = useMainStore();
const stories = ref<Story[] | undefined>([]);
const portfolio = ref<Portfolio | undefined>(undefined);
const accountList = ref<Account[] | undefined>([]);
const isAccountListLoading = ref(true);
const isBalanceError = ref(false);
const isStoryShow = ref(true);
const isPortfolioLoading = ref(true);
const isStoryLoading = ref(true);

const { handleError } = useHandleError();

const getStories = async (): Promise<void> => {
  try {
    const res = await useApi().$get<IResponse<Story>>("/StoryNewsList/");
    stories.value = res?.results;
    if (stories.value?.length === 0) isStoryShow.value = false;
  } catch (error) {
    isStoryShow.value = false;
    handleError(error);
  } finally {
    isStoryLoading.value = false;
  }
};

const getPortfolioDetail = async (id?: number): Promise<void> => {
  if (!id) {
    isPortfolioLoading.value = false;
    isBalanceError.value = true;
    return;
  }

  isPortfolioLoading.value = true;
  try {
    portfolio.value = await mainStore.fetchAccountDetail(id);
  } catch (error) {
    isBalanceError.value = true;
    handleError(error);
  } finally {
    isPortfolioLoading.value = false;
  }
};

const getAccountList = async (): Promise<void> => {
  try {
    accountList.value = await mainStore
      .fetchAccountList()
      .catch((error) => {
        isBalanceError.value = true;
        handleError(error);
      })
      .finally(() => {
        isAccountListLoading.value = false;
      });
    localStorage.setItem(
      "eventAccountId",
      JSON.stringify(accountList.value[0].id)
    );
    await getPortfolioDetail(accountList.value?.[0]?.id);
  } catch (error) {
    isBalanceError.value = true;
    handleError(error);
  } finally {
    isAccountListLoading.value = false;
  }
};

onMounted(() => {
  getStories();
  getAccountList();
});
</script>
