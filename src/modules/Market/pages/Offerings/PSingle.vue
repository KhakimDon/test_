<template>
  <main class="pb-14">
    <CBreadcrumb
      :has-logo="false"
      :title="single?.organization?.title"
      has-chevron
    />
    <!-- ::TOP:::::::HEADER:: -->
    <template v-if="loading">
      <CSingleTopLoading />
    </template>
    <template v-else>
      <CSingleOfferingTop :single="single" />
    </template>
    <div class="w-full h-px bg-slate-100 dark:bg-gray mt-4" />
    <!-- :::TABS::: -->
    <div class="container grid gap-3 mt-3">
      <CTab v-model="currentTab" :list="offeringsTab" />
      <Transition mode="out-in" name="fade">
        <section v-if="currentTab == 'about'">
          <Transition mode="out-in" name="fade">
            <CAboutLoading v-if="loading" />
            <CAbout
              v-else
              v-bind="{
                title: single?.organization?.title,
                info: single?.organization?.description,
              }"
            />
          </Transition>
        </section>
        <section v-else>
          <Transition mode="out-in" name="fade">
            <div v-if="!loadingApps" class="grid gap-3">
              <CApplicationCard
                v-for="order in orders?.results"
                :key="order?.id"
                v-model="isOpen"
                v-bind="order"
                @open="openCancelModal"
              />
              <Transition mode="out-in" name="fade">
                <div v-if="loadingMore" class="grid gap-3">
                  <ApplicationLoading v-for="card in 4" :key="card" />
                </div>
              </Transition>
            </div>
            <div v-else class="grid gap-3">
              <ApplicationLoading v-for="card in 4" :key="card" />
            </div>
          </Transition>
          <div
            v-if="!orders?.results?.length"
            class="grid place-items-center py-8 text-center"
          >
            <empty class="mb-5" />
            <span
              class="font-medium text-base dark:text-white font-helvetica"
              >{{ $t("offer_empty_title") }}</span
            >
            <p
              class="mt-3 font-normal dark:text-[#B2B7D0] text-sm font-helvetica"
            >
              {{ $t("offer_empty_text") }}
            </p>
          </div>
          <div
            v-if="
              orders?.count > 10 &&
              orders.count > orders.results?.length &&
              !loadingMore
            "
            ref="target"
            class="w-full h-10"
          />
        </section>
      </Transition>
      <div
        class="bg-gradient-to-b from-white/10 to-white/90 dark:from-dark/10 dark:to-dark/90 w-full grid pb-3 fixed bottom-[72px] -translate-x-1/2 left-1/2"
      >
        <RouterLink
          :to="{ name: 'OfferingsBuy' }"
          class="mx-auto w-full max-w-[95%]"
        >
          <CButton :text="$t('send_buy_request')" class="w-full" />
        </RouterLink>
      </div>
    </div>

    <CCancelModal
      v-model="isOpen"
      :loading="cancelLoading"
      @close="close"
      @submit="cancelOrder"
    />
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useIntersectionObserver } from "@vueuse/core/index";

import { useMarketStore } from "@/modules/Market/stores";
import { offeringsTab } from "@/modules/Market/data";

import type { IOfferingApp } from "@/types.ts";
import type { IPagination, IResponse } from "@/types/common.ts";

import CTab from "@/components/Tab/CTab.vue";
import CAbout from "@/modules/Market/components/CAbout.vue";
import CBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import CApplicationCard from "@/components/Common/Card/Application.vue";
import CSingleOfferingTop from "@/modules/Market/components/CSingleOfferingTop.vue";
import CSingleTopLoading from "@/components/Common/Loading/CSingleTop.vue";
import CAboutLoading from "@/modules/Market/components/CAboutLoading.vue";
import ApplicationLoading from "@/components/Common/Loading/Application.vue";
import CButton from "@/components/Base/CButton.vue";
import { useCustomToast } from "@/composables/useCustomToast.ts";
import useToggle from "@/composables/useToggle.ts";
import CCancelModal from "@/modules/Market/components/CCancelModal.vue";
import Empty from "@/components/Icon/empty.vue";

const store = useMarketStore();
const routeId = useRoute().params?.id;
const { showToast } = useCustomToast();
const { isOpen, open, close } = useToggle();

const target = ref<HTMLDivElement | null>();
const cancelLoading = ref(false);
const loadingMore = ref(false);
const currentTab = ref(offeringsTab[0].value);
const loadingApps = ref(true);
const cancelingOrderId = ref("");
const orders = ref<IResponse<IOfferingApp>>({
  results: [],
  count: 0,
});

const pagination = reactive<IPagination>({
  limit: 10,
  offset: 0,
  type: "",
  is_bonds: false,
});

const single = computed(() => store.offeringSingle);
const loading = computed(() => store.loading);

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      if (isIntersecting) {
        loadingMore.value = true;
        pagination.offset += pagination.limit;
        getOrders();
      }
    }
  },
  {}
);

onMounted(async () => {
  await store.fetchOfferingSingle(routeId as string);
  await getOrders();
});

// TODO: causing re-fetch when switching to this tab. is this ok?)
// watch(
//   () => currentTab.value,
//   (selectedTab) => {
//     if (selectedTab === "apps") {
//       getOrders();
//     }
//   }
// );

function getOrders() {
  store
    .fetchOfferingOrders(pagination, single.value?.id)
    .then((response) => {
      if (pagination.offset > 0) {
        orders.value = {
          ...response,
          results: [...orders.value.results, ...response.results],
        };
      } else {
        orders.value = response;
      }
    })
    .catch((error) => console.log(error))
    .finally(() => {
      loadingApps.value = false;
      loadingMore.value = false;
    });
}

function openCancelModal(id: string) {
  cancelingOrderId.value = id;
  open();
}

function cancelOrder() {
  cancelLoading.value = true;
  store
    .cancelOfferingOrder(cancelingOrderId.value)
    .then((response) => {
      if ("detail" in response) {
        showToast(response?.detail, "success");
        close();
      }
    })
    .finally(() => {
      cancelLoading.value = false;
    });
}
</script>
