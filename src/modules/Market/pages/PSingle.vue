<template>
  <main>
    <CBreadcrumb has-chevron has-logo />
    <div class="container mt-4">
      <div>
        <div class="flex items-center justify-between gap-5">
          <div class="flex items-center gap-3">
            <div
              class="shrink-0 size-10 rounded-lg overflow-hidden border border-white/20"
            >
              <img
                src="/images/market-avatar.png"
                alt="market avatar"
                class="size-full"
              />
            </div>
            <div>
              <h1 class="text-lg font-bold leading-124 text-white">
                ATSZ: STK
              </h1>
              <p class="text-xs text-gray-100 leading-normal">Uzpost</p>
            </div>
          </div>
          <div class="text-white flex items-center gap-3">
            <button class="size-6 flex-center">
              <i class="icon-search text-xl" />
            </button>
            <button class="size-6 flex-center">
              <i class="icon-share text-xl" />
            </button>
          </div>
        </div>
        <div class="py-2 mt-4">
          <h2 class="text-2xl text-white font-bold mb-2">
            28 455,02
            <span class="px-2 py-0.5 rounded-md bg-gray text-gray-100 text-sm">
              CUM
            </span>
          </h2>
          <div class="flex items-center gap-1.5">
            <span class="px-2 py-1 rounded-md bg-gray text-gray-100 text-sm">
              #8
            </span>
            <div
              class="px-2 py-1 rounded-md bg-gray text-gray-100 leading-none"
            >
              <Finance
                is-increase
                label="0.6% (24ч)"
                label-class="!text-success"
                icon-class="!text-success"
              />
            </div>
          </div>
        </div>

        <div class="mt-3 mb-4">
          <CMiniTab v-model="currentTab" :list="tabs" />
        </div>
      </div>
    </div>
    <div class="pt-4 border-t border-gray">
      <RouterView />
    </div>
  </main>
</template>
<script setup lang="ts">
import CBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import Finance from "@/components/Common/Chip/Finance.vue";
import CMiniTab from "@/components/Tab/CMiniTab.vue";
import { ITabItem } from "@/types/components";
import { TabValue, RouteName } from "@/modules/Market/enums";
import { useI18n } from "vue-i18n";
import { onBeforeMount, onMounted, ref } from "vue";
import { useHandleError } from "@/composables/useHandleError";
import { useRoute } from "vue-router";
import { useApi } from "@/composables/useApi";

const { t } = useI18n();
const currentTab = ref<string>(TabValue.Grafic);
const route = useRoute();
const { handleError } = useHandleError();
const data = ref({});

const tabs = ref<ITabItem[]>([
  {
    label: t("market_single_tabs.grafic"),
    value: TabValue.Grafic,
    routeName: RouteName.MarketSingleGrafic,
  },
  {
    label: t("market_single_tabs.cup"),
    value: TabValue.Cup,
    routeName: RouteName.MarketSingleCup,
  },
  {
    label: t("market_single_tabs.news"),
    value: TabValue.News,
    routeName: RouteName.MarketSingleNews,
  },
  {
    label: t("market_single_tabs.analytics"),
    value: TabValue.Analytics,
    routeName: RouteName.MarketSingleAnalytics,
  },
  {
    label: t("market_single_tabs.dividents"),
    value: TabValue.Dividents,
    routeName: RouteName.MarketDividents,
  },
]);

const getStockSingle = async (id: number | string): Promise<void> => {
  try {
    const res = await useApi().$get(`/stock/Stock/${id}/`);
    data.value = res;
    console.log(res);
  } catch (error) {
    handleError(error);
  }
};

onMounted(() => {
  getStockSingle(route.params.id.toString());
});

onBeforeMount(() => {
  const activeTab = tabs.value.find((tab) => tab.routeName === route.name);
  if (activeTab) {
    currentTab.value = activeTab.value;
  }
});
</script>
