<template>
  <section>
    <Header class="!absolute" />
    <div
      class="max-w-phone relative"
      :style="{
        background: isDark
          ? `linear-gradient(180deg, #00C1FF, #0076FE00)`
          : 'linear-gradient(180deg, rgba(0, 193, 255, 0.40) 0%, rgba(0, 118, 254, 0.00) 82.5%)',
      }"
    >
      <img
        v-if="isDark"
        alt="Click logo"
        class="absolute top-0 right-0 z-[4]"
        src="/images/svg/click.svg"
      />
      <img
        v-else
        alt="Click logo"
        class="absolute top-0 right-0 z-[4]"
        src="/images/svg/light-click.svg"
      />
      <div class="max-w-[245px] mx-auto pb-24 pt-28 relative z-10">
        <div class="flex flex-col items-center">
          <h6 class="dark:text-white text-dark text-sm font-helvetica">
            {{ $t("balance") }}
          </h6>
          <div class="flex items-center gap-2">
            <span
              v-if="isLoading"
              class="dark:text-white text-dark flex-center h-[38px]"
            >
              <Spinner />
            </span>

            <div v-else-if="isError" class="flex-center h-[38px]">
              <h2
                class="text-3.5xl font-bold leading-[38px] dark:text-white text-dark font-helvetica"
              >
                0
              </h2>
              <span class="text-red-light">
                <i class="icon-error text-xl"></i>
              </span>
            </div>

            <h2
              v-else-if="isShowBalance"
              :class="{ 'dark:!text-red-light !text-red': !isIncrease }"
              class="text-3.5xl font-bold leading-[38px] dark:text-white text-dark font-helvetica"
            >
              {{ formatMoneyDecimal(parseInt(data?.portfolio_balance)) }}
            </h2>
            <div v-else class="flex items-center gap-1.5 mr-2 h-[38px]">
              <div
                v-for="i in 6"
                :key="i"
                class="size-2 dark:bg-white bg-dark rounded-full"
              />
            </div>
            <span
              class="soft-wrapper dark:bg-dark-accent bg-light-accent dark:text-white text-dark font-medium text-sm"
              >UZS</span
            >
            <span
              class="soft-wrapper dark:bg-dark-accent bg-light-accent dark:text-white text-dark !p-1"
              :class="{ 'opacity-50 pointer-events-none': isError }"
              @click="toggleBalance"
            >
              <i v-if="isShowBalance" class="icon-eyes"></i>
              <i v-else class="icon-no-eyes"></i>
            </span>
          </div>
          <div
            v-if="!isError"
            class="px-2.5 mt-2 py-1.5 flex gap-2 items-center rounded-md border dark:border-border-soft border-dark/10"
          >
            <span v-if="isLoading" class="dark:text-white pl-2">
              <Spinner />
            </span>
            <template v-else-if="isError">
              <span class="text-red-light">
                <i class="icon-error text-xl"></i>
              </span>
            </template>
            <template v-else>
              <span class="dark:text-white text-dark font-medium">
                {{
                  isShowBalance
                    ? parseInt(data?.changed_stats.overall_change ?? "0")
                    : "*******"
                }}
              </span>
              <Finance
                :is-display="isShowBalance"
                :is-increase="isIncrease"
                :label="`${parseInt(
                  data?.changed_stats.overall_changed_percent
                ).toFixed(1)}% (24h)`"
              />
            </template>
          </div>
        </div>
        <!--        <CAddAccountCard />-->
      </div>
    </div>
    <div v-if="!isError" class="container -mt-[68px] relative z-10">
      <Investment
        v-if="data?.status !== 'pending'"
        :data="data"
        :isLoading="isLoading"
        :isError="isError"
        @handle-click="openBottomSheet"
        :noImage="false"
      />
    </div>
    <div v-if="isError" class="container">
      <CAddAccountCard class="-mt-[68px] mb-[32px]" />
    </div>
    <BottomSheet
      :show="showBottomSheet"
      :title="$t('select_account')"
      @close="closeBottomSheet"
    >
      <!-- <AddAccount />-->
      <div class="mt-3 w-full grid gap-3">

        <template v-if="isAccountListLoading">
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
  </section>
</template>

<script lang="ts" setup>
import Finance from "@/components/Common/Chip/Finance.vue";
import Header from "@/components/Shared/Header.vue";
import Investment from "@/components/Common/Card/Investment.vue";
import BottomSheet from "@/components/CBottomSheet.vue";
import SelectInvestment from "@/components/Common/Card/SelectInvestment.vue";
import { useThemeMode } from "@/composables/useThemeMode";

import {computed, onMounted, ref, watch} from "vue";
import Button from "@/components/Base/CButton.vue";
import { formatMoneyDecimal } from "@/utils";
import { Account, Portfolio } from "@/modules/Main/types";
import Spinner from "@/components/Icon/Spinner.vue";
import CAddAccountCard from "@/modules/Main/components/CAddAccountCard.vue";

interface Props {
  data: Portfolio;
  isError: boolean;
  accountList: Account[];
  isLoading: boolean;
  isAccountListLoading: boolean;
}

const emit = defineEmits(["select-investment"]);
const props = defineProps<Props>();

const { theme } = useThemeMode();
const isShowBalance = ref(localStorage.getItem("isShowBalance") === "true");

const isDark = computed(() => theme.value === "dark");
const toggleBalance = () => {
  const isShow = localStorage.getItem("isShowBalance");
  if (isShow) {
    localStorage.removeItem("isShowBalance");
  } else {
    localStorage.setItem("isShowBalance", "true");
  }
  isShowBalance.value = !isShowBalance.value;
};

const isIncrease = computed(() => {
  return props.data && +props.data.portfolio_balance >= 0;
});

const showBottomSheet = ref(false);
const openBottomSheet = () => {
  showBottomSheet.value = true;
};

const closeBottomSheet = () => {
  showBottomSheet.value = false;
};

const activeAccountId = computed(() => {
  return props.accountList?.[0]?.id;
});
const selectedInvestment = ref<number | undefined>(props.accountList?.[0]?.id);

const selectInvestmentCard = (id?: number) => {
  if (id !== selectedInvestment.value) {
    emit("select-investment", id);
    selectedInvestment.value = id;
  }
};

watch(activeAccountId, (newVal) => {
  if (newVal) {
    selectedInvestment.value = newVal;
  }
});
</script>

<style scoped>
.soft-wrapper {
  display: flex;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}
</style>
