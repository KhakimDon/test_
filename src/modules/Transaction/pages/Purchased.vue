<template>
  <div>
    <div class="border-y border-slate-100 dark:border-[#343540]">
      <div class="flex justify-between py-3 container">
        <div class="flex gap-4 items-center">
          <div
            @click="openBottomSheet(1)"
            class="py-[7px] px-5 rounded-lg dark:bg-[#343540] bg-[#D7DBE0] transition-300 cursor-pointer"
          >
            <p
              :class="
                fromDates !== t('from_date')
                  ? 'dark:text-white'
                  : 'dark:text-gray-100'
              "
              class="text-sm font-normal leading-130 text-dark"
            >
              {{ fromDates }}
            </p>
          </div>
          <div
            class="text-[#343540] dark:text-[#B2B7D0] text-sm leading-130 font-semibold"
          >
            {{ t("to") }}
          </div>
          <div
            @click="openBottomSheet(2)"
            class="py-[7px] px-5 rounded-lg dark:bg-gray bg-[#D7DBE0] transition-300 cursor-pointer"
          >
            <p
              :class="
                toDates !== t('to_date')
                  ? 'dark:text-white'
                  : 'dark:text-gray-100'
              "
              class="text-sm font-normal leading-130 text-dark"
            >
              {{ toDates }}
            </p>
          </div>
        </div>
        <div
          @click="openBottomSheet(1)"
          class="rounded-lg p-[5px] dark:bg-gray bg-[#D7DBE0] h-8 w-8 flex items-center justify-center shrink-0 transition-300 cursor-pointer relative"
        >
          <span class="icon-filter dark:text-white text-dark" />
          <div
            v-if="toDates !== t('to_date') && fromDates !== t('from_date')"
            class="w-2.5 h-2.5 rounded-full absolute -top-[3px] -right-[3px] bg-primary-gradient"
            style="box-shadow: 0px 2px 8px 0px rgba(1, 144, 255, 0.2)"
          />
        </div>
      </div>
    </div>

    <Transition mode="out-in">
      <div class="relative">
        <div v-if="!loading">
                    <div class="showAllTransactions">
                      <TransactionCard
                          v-for="(stock, id) in withdrawal"
                          :key="stock.img"
                          v-bind="{ item: stock, isSaved: false, id: id }"
                          variant="drawallist"
                      />
                    </div>
        </div>
        <div :class="{showAllTransactionsSkeleton: loading == false}" class="absolute  z-[999] opacity-1 duration-[.5s] top-0 w-[100%]">
          <Loadingtaransaction v-for="i in 5" :key="i" />
        </div>
        <div class="flex max-w-[350px] mx-auto flex-col mt-[56px] items-center justify-center" v-if="withdrawal.length == 0 && !loading">
          <nodatasold/>
          <nodatasoldDark/>
          <p class="mt-[10px] text-[16px] text-black font-helvetica">{{$t("offer_empty_title")}}</p>
          <p class="text-center mt-[5px] font-helvetica text-gray text-[14px]">{{$t("offer_empty_text")}}</p>
        </div>
      </div>
    </Transition>
    <BottomSheet
      :show="showBottomSheet"
      :title="t('purchased_ipo_spo_title')"
      @close="closeBottomSheet"
      class="container"
    >
      <div class="mt-6 w-full grid gap-3">
        <ScrollDatePicker
          @startDate="modelFromDate"
          @end-date="modelStartDate"
          :activeTabs="activeTab"
        />
      </div>
    </BottomSheet>
  </div>
</template>
<script setup lang="ts">
import { investmentAccunts, stocks } from "@/data/fake";
import TransactionCard from "@/components/Common/Card/Transaction.vue";
import { ISpoIpoSingle } from "@/modules/Market/types";
import BottomSheet from "@/components/CBottomSheet.vue";
import ScrollDatePicker from "@/components/Form/Date/ScrollDatePicker.vue";
import { IStock } from "@/types/common.ts";
import { ITransactionCardProps } from "@/types/components";
import { onMounted, ref } from "vue";
import Loadingtaransaction from "@/components/Common/Loading/Transaction.vue";
const data = ref<ISpoIpoSingle>(null);
const showBottomSheet = ref(false);
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const activeTab = ref();
const loading = ref(false);
const fromDates = ref(t("from_date"));
const toDates = ref(t("to_date"));
import { useMainStore } from "@/stores";
import { useHandleError } from "@/composables/useHandleError.ts";
import Nodatasold from "@/components/Icon/nodatasold.vue";


const TopUpList = ref([]);
const { handleError } = useHandleError();
function transformStock(stock: IStock): ITransactionCardProps {
  return {
    title: stock?.title,
    subtitle: stock?.code,
    subtitle_tag: "",
    img: stock?.logo,
    amount: {
      text: stock?.base_price,
      type: "price",
      subtitle: `${stock?.change_rate}%(24h)`,
      subtitle_type: stock?.change_rate >= 0 ? "up" : "down",
    },
  };
}

const mainStore = useMainStore();
const withdrawal = ref([]);

const withdrawalList = async (): Promise<void> => {
  try {
    loading.value = true;
    withdrawal.value = await mainStore
      .fetchWithdrawalList()
      .catch((error) => {
        useHandleError();
        handleError(error);
      })
      .finally(() => {
        loading.value = false;
      });
  } catch (error) {
    loading.value = true;
    // isBalanceError.value = true;
    handleError(error);
  } finally {
    // isAccountL
    // istLoading.value = false;
  }
};


const openBottomSheet = (item: number) => {
  activeTab.value = item;
  if (activeTab.value) {
    showBottomSheet.value = true;
  }
};

const closeBottomSheet = () => {
  showBottomSheet.value = false;
};
function modelFromDate(item: any) {
  fromDates.value = item;
}
function modelStartDate(item: any) {
  toDates.value = item;
}

onMounted(() => {
  withdrawalList();
});
</script>

<style scoped>
.showAllTransactions{
  animation-name: showBlocks;
  animation-duration: .5s;
  animation-fill-mode: forwards;
}
.showAllTransactionsSkeleton{
  opacity: 0;
}
@keyframes showBlocks {
  0%{
    opacity: 0 ;
  }
  100%{
    opacity: 1 !important;
  }
}

</style>