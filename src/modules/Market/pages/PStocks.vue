<template>
  <section>
    <CFilter :form="form" @clear="clearForm" @submit="submitForm" />
    <CSelect
      :form="form"
      class="absolute top-[228px]"
      @clear="clearSelect"
      @submit="handleSelect"
    />
    <div class="h-20 w-full" />
    <Transition mode="out-in" name="fade">
      <div v-if="!loading">
        <TransactionCard
          v-for="stock in stocks.results"
          :key="stock?.id"
          v-bind="{
            item: transformStock(stock),
            isSaved: stock?.is_favorite,
            id: stock?.id,
          }"
          variant="primary"
        />
        <Transition mode="out-in" name="fade">
          <div v-if="loadingMore" class="grid gap-3 mt-3">
            <TransactionLoading v-for="card in 5" :key="card" />
          </div>
        </Transition>
        <div
          v-if="stocks?.count > 10 && stocks.count !== stocks.results?.length"
          ref="target"
          class="w-full h-10"
        />
      </div>
      <div v-else class="grid gap-3">
        <TransactionLoading v-for="card in 5" :key="card" />
      </div>
    </Transition>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from "vue";

import { useForm } from "@/composables/useForm";
import { useMainStore } from "@/stores";
import type { IMarketFilter } from "@/modules/Market/types";

import CFilter from "@/modules/Market/components/CFilter.vue";
import CSelect from "@/modules/Market/components/CSelect.vue";
import TransactionCard from "@/components/Common/Card/Transaction.vue";
import TransactionLoading from "@/components/Common/Loading/Transaction.vue";
import { IResponse, IStock, IStockPagination } from "@/types/common";
import { ITransactionCardProps } from "@/types/components";
import { debounce } from "@/utils";
import { useIntersectionObserver } from "@vueuse/core/index";

const form = useForm<IMarketFilter>(
  {
    search: "",
    activity: "",
    action: "",
    market: "",
    favorites: false,
    cost: {
      max: "",
      min: "",
    },
    time: "",
    volume: "",
    status: "",
  },
  {}
);
const store = useMainStore();

const target = ref<HTMLDivElement | null>();
const loading = ref(true);
const loadingMore = ref(false);
const pagination = reactive<IStockPagination>({
  limit: 10,
  offset: 0,
  type: "",
  is_bonds: false,
});

const stocks = ref<IResponse<IStock>>({
  results: [],
  count: 0,
});

onMounted(() => {
  getStocks();
});

watch(
  () => form.values.search,
  (query) => {
    pagination.offset = 0;
    pagination.search = query;
    debounce("get-stocks-search", getStocks);
  }
);

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      loadingMore.value = true;
      if (isIntersecting) {
        debounce("load-more-stocks", loadMoreStocks);
      }
    }
  },
  {}
);

function clearSelect(key: string) {
  form.values[key] = "";
}

function handleSelect() {
  // pagination
  getStocks();
}

function clearForm() {
  form.values.search = "";
  form.values.activity = "";
  form.values.action = "";
  form.values.market = "";
  form.values.favorites = false;
  form.values.cost = {
    max: "",
    min: "",
  };
}

function submitForm() {
  pagination.offset = 0;
  pagination.type = form.values.action;
  pagination.category = form.values.activity;

  getStocks();
}

function getStocks() {
  store
    .fetchStocks(pagination)
    .then((response) => {
      if (pagination.offset > 0) {
        stocks.value = {
          ...response,
          results: [...stocks.value.results, ...response.results],
        };
      } else {
        stocks.value = response;
      }
    })
    .catch((error) => console.log(error))
    .finally(() => {
      loading.value = false;
      loadingMore.value = false;
    });
}

function loadMoreStocks() {
  pagination.offset += pagination.limit;
  getStocks();
}

function transformStock(stock: IStock): ITransactionCardProps {
  return {
    title: `${stock.abbreviated_title}:${stock?.stk_or_sms}`,
    subtitle: stock.title,
    subtitle_tag: "",
    img: stock?.logo,
    amount: {
      text: stock?.base_price,
      type: "price",
      subtitle: `${stock.change_rate}%(${form.values.time})`,
      subtitle_type: stock.change_rate >= 0 ? "up" : "down",
    },
  };
}
</script>
