<template>
  <div class="bg-[#EBF0F5] dark:bg-[#141414]">
    <pre>{{ data }}</pre>
    <div class="container bg-[#EBF0F5] dark:bg-[#141414]">
      <CBreadcrumb hasLogo class="!px-0 container" />
      <Investment
        v-if="portfolio?.status !== 'pending'"
        :data="portfolio!"
        :isLoading="isPortfolioLoading"
        @handle-click="openBottomSheet"
        :noImage="false"
        :is-error="false"
      />
      <div class="pt-3 pb-4 flex gap-3">
        <IncomeExpense income />
        <IncomeExpense :income="false" />
      </div>
    </div>
    <div
      class="container border-t border-slate-100 bg-[#EBF0F5] dark:border-[#343540] dark:bg-[#141414]"
    >
      <CTab
        class="my-3 container bg-[#D7DBE0] dark:bg-[#343540]"
        as-link
        v-model="currentTab"
        :list="SpoIpoTab"
      />
    </div>
    <router-view />
    <BottomSheet
      :show="showBottomSheet"
      :title="$t('select_account')"
      @close="closeBottomSheet"
    >
      <div class="mt-3 w-full grid gap-3">
        <template v-if="loading">
          <div class="flex items-center justify-center">
            <Spinner />
          </div>
        </template>
        <template v-else>
          <SelectInvestment
            v-for="(account, idx) in accountList"
            :key="idx"
            :cardNumber="account.account_number"
            :isActive="selectedInvestment === account.id"
            :money="account.balance"
            :name="account.broker"
            :status="account.status"
            @select="selectInvestmentCard(account.id)"
            @close="closeBottomSheet"
          />
        </template>
      </div>
      <Button class="mt-6 w-full" :text="$t('confirm')" />
    </BottomSheet>
  </div>
</template>
<script setup lang="ts">
import CBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import Investment from "@/components/Common/Card/Investment.vue";
import IncomeExpense from "@/modules/Transaction/IncomeExpense.vue";
import BottomSheet from "@/components/CBottomSheet.vue";
import SelectInvestment from "@/components/Common/Card/SelectInvestment.vue";
import Button from "@/components/Base/CButton.vue";
import { ref, computed, handleError } from "vue";
import { Account, Portfolio } from "@/modules/Main/types";
import CTab from "@/components/Tab/CTab.vue";
import { SpoIpoTab } from "@/modules/Market/data";
import Spinner from "@/components/Icon/Spinner.vue";
import { useMainStore } from "@/stores";
import { onMounted, watch } from "vue";
import router from "@/router";
// import CTabTransactions from "@/components/Tab/CTabTransactions.vue";
const currentTab =
  router.currentRoute.value.name == "purchased-spo"
    ? "purchased"
    : ref(SpoIpoTab[0].value);
const showBottomSheet = ref(false);
const portfolio = ref<Portfolio | undefined>(undefined);
const accountList = ref<Account[] | undefined>([]);
const isAccountListLoading = ref(true);
const isBalanceError = ref(false);
const isPortfolioLoading = ref(true);
const mainStore = useMainStore();
const openBottomSheet = () => {
  showBottomSheet.value = true;
};
const selectedInvestment = ref<number | undefined>(accountList.value?.[0]?.id);
const closeBottomSheet = () => {
  showBottomSheet.value = false;
};

const activeAccountId = computed(() => {
  return accountList.value?.[0]?.id;
});

const selectInvestmentCard = (id?: number) => {
  if (id !== selectedInvestment.value) {
    getPortfolioDetail(id).then(() => {
      selectedInvestment.value = id;
    });
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
    await getPortfolioDetail(accountList.value?.[0]?.id);
  } catch (error) {
    isBalanceError.value = true;
    handleError(error);
  } finally {
    isAccountListLoading.value = false;
  }
};

watch(activeAccountId, (newVal) => {
  if (newVal) {
    selectedInvestment.value = newVal;
  }
});

onMounted(() => {
  getAccountList();
});
</script>
