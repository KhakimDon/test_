<template>
  <section>
    <CSelect :form="form" class="absolute top-[150px]" />
    <div class="h-12 w-full" />
    <Transition mode="out-in" name="fade">
      <div v-if="!loading">
        <TransactionCard
          v-for="bond in bonds.results"
          :key="bond?.id"
          v-bind="{
            item: transformBond(bond),
            isSaved: bond?.is_favorite,
            id: bond?.id,
          }"
          variant="primary"
        />
        <Transition mode="out-in" name="fade">
          <div v-if="loadingMore" class="grid gap-3 mt-3">
            <TransactionLoading v-for="card in 5" :key="card" />
          </div>
        </Transition>
        <div
          v-if="bonds?.count > 10 && bonds.count !== bonds.results?.length"
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
import { onMounted, reactive, ref } from "vue";

import { useForm } from "@/composables/useForm";
import { useMainStore } from "@/stores";
import type { ISelectFilter } from "@/modules/Market/types";

import CSelect from "@/modules/Market/components/CSelect.vue";
import TransactionCard from "@/components/Common/Card/Transaction.vue";
import TransactionLoading from "@/components/Common/Loading/Transaction.vue";
import { IResponse, IStock, IStockPagination } from "@/types/common";
import { ITransactionCardProps } from "@/types/components";
import { debounce } from "@/utils";
import { useIntersectionObserver } from "@vueuse/core/index";

const form = useForm<ISelectFilter>(
  {
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
  is_bonds: true,
});

const bonds = ref<IResponse<IStock>>({
  results: [],
  count: 0,
});

onMounted(() => {
  getStocks();
});

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      loadingMore.value = true;
      if (isIntersecting) {
        debounce("load-more-bonds", loadMoreBonds);
      }
    }
  },
  {}
);

function getStocks() {
  store
    .fetchStocks(pagination)
    .then((response) => {
      if (pagination.offset > 0) {
        bonds.value = {
          ...response,
          results: [...bonds.value.results, ...response.results],
        };
      } else {
        bonds.value = response;
      }
    })
    .catch((error) => console.log(error))
    .finally(() => {
      loading.value = false;
      loadingMore.value = false;
    });
}

function loadMoreBonds() {
  pagination.offset += pagination.limit;
  getStocks();
}

function transformBond(stock: IStock): ITransactionCardProps {
  return {
    title: stock?.title,
    subtitle: stock?.code,
    subtitle_tag: "",
    img: stock?.logo,
    amount: {
      text: stock?.base_price,
      type: "price",
      subtitle: `${Math.abs(stock?.change_rate)}%(24h)`,
      subtitle_type: stock?.change_rate >= 0 ? "up" : "down",
    },
  };
}
</script>

<style></style>
