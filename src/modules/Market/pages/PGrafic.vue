<template>
  <div>
    <div class="container">
      <div
        class="flex items-center max-[370px]:flex-wrap justify-between gap-x-5 gap-y-2"
      >
        <CTab
          v-model="currentTab"
          :list="tabs"
          option-class="!px-2.5 whitespace-nowrap"
          label-class="!text-xs"
        />
        <div class="flex items-center gap-2 text-white">
          <button class="size-8 rounded-lg flex-center bg-gray">
            <i class="icon-vertical-settings text-lg" />
          </button>
          <button class="size-8 rounded-lg flex-center bg-gray">
            <i class="icon-arrows-diagonal text-lg" />
          </button>
        </div>
      </div>
      <div class="grid gap-3">
        <div class="h-[200px]">
          <GradientLine
            :data="generateFakeData(100)"
            range="day"
            :range-num="100"
          />
        </div>
        <div class="grid grid-cols-4 gap-2">
          <CStatisticCard is-increase title="24 часа" stat-info="0.6%" />
          <CStatisticCard is-increase title="7 дней" stat-info="0.6%" />
          <CStatisticCard is-increase title="30 дней" stat-info="0.6%" />
          <CStatisticCard is-increase title="90 дней" stat-info="0.6%" />
        </div>
      </div>
      <div class="mb-5">
        <div class="py-3 border-b border-gray grid gap-0.5">
          <h2 class="text-white text-sm leading-130">
            {{ $t("column_info.running_line") }}:
          </h2>
          <p class="text-xs text-gray-100 leading-[17.36px]">AA044590</p>
        </div>
        <div class="py-3 border-b border-gray grid gap-0.5">
          <h2 class="text-white text-sm leading-130">
            {{ $t("column_info.code_stock") }}:
          </h2>
          <p class="text-xs text-gray-100 leading-[17.36px]">UZ7044590006</p>
        </div>
        <div class="py-3 border-b border-gray grid gap-0.5">
          <h2 class="text-white text-sm leading-130">
            {{ $t("column_info.issuer") }}:
          </h2>
          <p class="text-xs text-gray-100 leading-[17.36px]">
            ОАО «Мировой специализированный товарно-ассортиментный торговый
            комплекс»
          </p>
        </div>
        <div class="py-3 border-b border-gray grid gap-0.5">
          <h2 class="text-white text-sm leading-130">
            {{ $t("column_info.category") }}:
          </h2>
          <p class="text-xs text-gray-100 leading-[17.36px]">Банк</p>
        </div>
        <div class="py-3 border-b border-gray grid gap-0.5">
          <h2 class="text-white text-sm leading-130">
            {{ $t("column_info.number_shares") }}:
          </h2>
          <p class="text-xs text-gray-100 leading-[17.36px]">28 304 980 шт.</p>
        </div>
        <div class="py-3 border-b border-gray grid gap-0.5">
          <h2 class="text-white text-sm leading-130">
            {{ $t("column_info.nominal_price") }}:
          </h2>
          <p class="text-xs text-gray-100 leading-[17.36px]">1 000 Cум</p>
        </div>
        <div class="pb-0 pt-3 grid gap-0.5">
          <h2 class="text-white text-sm leading-130">
            {{ $t("column_info.nominal") }}:
          </h2>
          <p class="text-xs text-gray-100 leading-[17.36px]">8900,11 Cум</p>
        </div>
      </div>
    </div>
    <div class="h-[1px] w-full bg-gray my-5" />
    <div class="container">
      <h2 class="text-base font-bold text-white mb-2.5">
        {{ $t("column_info.contact_info") }}
      </h2>
      <div class="flex items-center gap-2.5 mb-3">
        <div
          class="shrink-0 size-10 rounded-lg overflow-hidden border border-white/20"
        >
          <img
            src="/images/market-avatar.png"
            alt="market avatar"
            class="size-full"
          />
        </div>
        <p class="text-sm text-white font-medium leading-124">ATSZ: STK</p>
      </div>
      <div class="py-3 border-y border-gray grid gap-1">
        <p class="text-xs text-gray-300 leading-130">
          {{ $t("column_info.classify") }}:
        </p>
        <h3 class="text-xs font-medium leading-124">No. 4</h3>
      </div>
      <div class="py-3 border-y border-gray grid gap-1">
        <p class="text-xs text-gray-300 leading-130">
          {{ $t("column_info.website") }}:
        </p>
        <h3 class="text-xs font-medium leading-124">
          <a href="#" class="underline"> uztelecom.uz </a>
          <span class="size-4 !inline-flex flex-center ml-1">
            <i class="icon-arrow-top-right !text-[8px] text-gray-100"></i>
          </span>
        </h3>
      </div>
      <div class="py-3 border-t border-gray grid gap-1">
        <p class="text-xs text-gray-300 leading-130">
          {{ $t("column_info.contacts") }}:
        </p>
        <h3 class="text-xs font-medium leading-124">+998 71 200-70-07</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ITabItem } from "@/types/components";
import CTab from "@/components/Tab/CTab.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import GradientLine from "@/components/Common/Chart/GradientLine.vue";
import { generateFakeData } from "@/data/fake";
import CStatisticCard from "@/modules/Market/components/CStatisticCard.vue";

const { t } = useI18n();
const currentTab = ref("daily");
const tabs = ref<ITabItem[]>([
  {
    label: t("tab_range.daily"),
    value: "daily",
  },
  {
    label: t("tab_range.weekly"),
    value: "weekly",
  },
  {
    label: t("tab_range.monthly"),
    value: "monthly",
  },
  {
    label: t("tab_range.half_year"),
    value: "half_year",
  },
  {
    label: t("tab_range.yearly"),
    value: "yearly",
  },
  {
    label: t("tab_range.all"),
    value: "all",
  },
]);
</script>
