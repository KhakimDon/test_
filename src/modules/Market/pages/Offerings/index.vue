<template>
  <main class="flex flex-col gap-y-5 container">
    <CBreadcrumb has-logo />
    <h1 class="text-xl font-semibold text-dark dark:text-white">IPO/SPO</h1>
    <FSearch
      v-model="pagination.search"
      :placeholder="$t('filter.search_placeholder')"
    />
    <Transition mode="out-in" name="fade">
      <div v-if="!loading" class="grid gap-3">
        <OfferingCard
          v-for="offering of offerings.results"
          :key="offering?.id"
          v-bind="{ offering }"
        />

        <Transition mode="out-in" name="fade">
          <div v-if="loadingMore" class="grid gap-3 mt-3">
            <OfferingLoading v-for="card in 3" :key="card" />
          </div>
        </Transition>
        <div v-if="isTargetVisible" ref="target" class="w-full h-10" />
      </div>

      <div v-else class="grid gap-3">
        <OfferingLoading v-for="card in 3" :key="card" />
      </div>
    </Transition>
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useIntersectionObserver } from "@vueuse/core/index";

import { useMarketStore } from "@/modules/Market/stores";
import { debounce } from "@/utils";
import type { IResponse, IStockPagination } from "@/types/common";
import type { IOffering } from "@/modules/Market/types";

import OfferingCard from "@/components/Common/Card/Offering.vue";
import OfferingLoading from "@/components/Common/Loading/Offering.vue";
import CBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import FSearch from "@/components/Form/Input/FSearch.vue";

const marketStore = useMarketStore();

const loading = ref(true);
const loadingMore = ref(false);
const target = ref<HTMLDivElement | null>();
const offerings = ref<IResponse<IOffering>>({
  results: [] as IOffering[],
  count: 0,
});

const pagination = reactive<IStockPagination>({
  limit: 10,
  offset: 0,
  type: "",
  is_bonds: false,
});
const isTargetVisible = computed(
  () =>
    offerings.value.count > 10 &&
    offerings.value.results?.length !== offerings.value.count
);

onMounted(() => {
  getOfferings();
});

watch(
  () => pagination.search,
  () => {
    debounce("get-stocks-search", getOfferings);
  }
);

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      loadingMore.value = true;
      if (isIntersecting) {
        debounce("load-more-offerings", () => {
          pagination.offset += pagination.limit;
          getOfferings();
        });
      }
    }
  },
  {}
);

function getOfferings() {
  marketStore
    .fetchOfferings(pagination)
    .then((response) => {
      if (pagination.offset > 0) {
        offerings.value = {
          ...response,
          results: [...offerings.value.results, ...response.results],
        };
      } else {
        offerings.value = response;
      }
    })
    .catch((error) => console.log(error))
    .finally(() => {
      loading.value = false;
      loadingMore.value = false;
    });
}
</script>
