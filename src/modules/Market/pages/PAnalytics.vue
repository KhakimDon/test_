<template>
  <div>
    <div class="pb-5 border-b border-gray">
      <div class="container">
        <Title :text="$t('analytics.eps')" />
        <ChipWithDot
          :label="$t('analytics.valid')"
          dot-class="bg-success"
          class="mt-2"
        />
      </div>
      <EpsArea
        :data="[
          {
            x: new Date('2022-01-01').toISOString(),
            y: 0.4,
          },
          {
            x: new Date('2023-02-01').toISOString(),
            y: 0.3,
          },
          {
            x: new Date('2023-06-01').toISOString(),
            y: 0.4,
          },
          {
            x: new Date('2024-08-01').toISOString(),
            y: 0.1,
          },
          {
            x: new Date('2025-02-01').toISOString(),
            y: null,
          },
        ]"
      />
    </div>
    <div class="py-5 border-b border-gray">
      <div class="container">
        <Title :text="$t('analytics.balance')" class="mb-3" />
        <CTab
          v-model="currentBalanceTab"
          :list="tabList"
          option-class="text-xs"
        />
        <div class="mt-4">
          <div>
            <Column
              show-data-at-bottom
              :data="[
                {
                  name: $t('analytics.chart.active'),
                  type: 'column',
                  data: [1.4, 2, 2.5, 1.5, 2.5],
                },
                {
                  name: $t('analytics.chart.cash'),
                  type: 'column',
                  data: [1.1, 3, 3.1, 4, 4.1],
                },
                {
                  name: $t('analytics.chart.debt'),
                  type: 'column',
                  data: [20, 29, 37, 36, 44],
                },
                {
                  name: 'Revenue (Cум)',
                  type: 'line',
                  data: [1, 2, 24, 2, 44],
                },
              ]"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 border-b border-gray">
      <div class="container">
        <Title :text="$t('analytics.effectiveness')" class="mb-3" />
        <div class="grid grid-cols-3 gap-2">
          <div
            v-for="type in effectiveTypeList"
            :key="type.value"
            class="bg-transparent border border-gray py-2 text-center rounded-lg"
            :class="{
              'bg-primary-gradient text-white': type.value === effectiveActive,
            }"
            @click="selectEffectiveType(type.value)"
          >
            <span class="text-sm font-medium">{{ type.label }}</span>
          </div>
        </div>
        <Column
          :data="[
            {
              name: 'ROA (TTM)',
              type: 'column',
              data: [1.4],
            },
          ]"
        />
      </div>
    </div>
    <div class="py-5 border-b border-gray">
      <div class="container">
        <Title :text="$t('analytics.certificate_income')" class="mb-3" />
        <div class="grid gap-4">
          <CTab
            v-model="currentCertificateTab"
            :list="tabList"
            option-class="text-xs"
          />
          <CTab
            v-model="currentIncomeTab"
            :list="incomeTabList"
            variant="secondary"
            option-class="text-xs !w-auto !pb-2"
          />
          <div class="overflow-auto">
            <Column
              :stroke-colors="['trasparent', '#D9D9D9']"
              :stroke-width="[2, 1]"
              show-data-at-bottom
              :colors="['#49B97D', '#D9D9D9']"
              :data="[
                {
                  name: 'ROA (TTM)',
                  type: 'column',
                  data: [440, 100, 10, 40, 30],
                },
                {
                  name: 'YoY (%)',
                  type: 'line',
                  data: [440, 90, 10, 40, 18],
                  zIndex: 100,
                },
              ]"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 border-b border-gray">
      <div class="container">
        <div class="flex items-start justify-between gap-3">
          <div>
            <Title :text="$t('analytics.comparison')" class="mb-1" />
            <div class="flex gap-2">
              <p class="text-xs text-gray-100">Услуги поддержки бизнеса</p>
              <div class="w-[1px] h-4 bg-gray" />
              <p class="text-xs text-gray-100">Всего компаний: 231</p>
            </div>
          </div>
          <div>
            <span class="rotate-180 block">
              <i class="icon-chevron-left text-gray-100 text-sm" />
            </span>
          </div>
        </div>
        <div>
          <CTable
            :head="tableHead"
            :data="bodyData"
            :limit="10"
            :current-page="1"
            :loading="false"
            th-class="text-gray-100 text-xs !font-normal !pl-0"
            body-tr-class="!border-gray"
            td-class="!py-2 !pl-0"
          >
            <template #indicator="{ data }">
              <span class="text-white text-xs font-medium">
                {{ data.name }}
              </span>
            </template>
            <template #price="{ data }">
              <span class="text-white text-xs font-medium">
                {{ data.price }}
              </span>
            </template>
            <template #rating="{ data }">
              <span class="text-white text-xs font-medium">
                {{ data.rating }}
              </span>
            </template>
          </CTable>
        </div>
      </div>
    </div>
    <div class="pt-5">
      <div class="container">
        <div class="grid grid-cols-2 gap-2">
          <FileCard name="Quarterly" description="Report" url="https://" />
          <FileCard name="Annual" description="Report" url="https://" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import EpsArea from "@/components/Common/Chart/EpsArea.vue";
import Title from "@/modules/Market/components/CTitle.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { ITabItem } from "@/types/components";
import CTab from "@/components/Tab/CTab.vue";
import Column from "@/components/Common/Chart/Column.vue";
import ChipWithDot from "@/components/Common/Chip/ChipWithDot.vue";
import CTable from "@/components/Common/Table/CTable.vue";
import FileCard from "@/modules/Market/components/CFileCard.vue";

const { t } = useI18n();
const currentBalanceTab = ref<string>("annual");
const currentCertificateTab = ref<string>("annual");
const currentIncomeTab = ref<string>("income");
const effectiveActive = ref<string>("ROA");

const effectiveTypeList = ref([
  {
    label: "ROA",
    value: "ROA",
  },
  {
    label: "ROE",
    value: "ROE",
  },
  {
    label: "Market Cap",
    value: "Market Cap",
  },
  {
    label: "PB",
    value: "PB",
  },
  {
    label: "PE",
    value: "PE",
  },
  {
    label: "PS",
    value: "PS",
  },
]);

const selectEffectiveType = (type: string) => {
  effectiveActive.value = type;
};

const tabList = ref<ITabItem[]>([
  {
    label: t("analytics.balance_tabs.annual"),
    value: "annual",
  },
  {
    label: t("analytics.balance_tabs.quarterly"),
    value: "quarterly",
  },
]);

const incomeTabList = ref<ITabItem[]>([
  {
    label: t("analytics.income"),
    value: "income",
  },
  {
    label: t("analytics.net_profit"),
    value: "net_profit",
  },
]);

const tableHead = [
  {
    title: t("analytics.indicator"),
    key: "indicator",
  },
  {
    title: t("analytics.price"),
    key: "price",
  },
  {
    title: t("analytics.rating"),
    key: "rating",
  },
];

const bodyData = [
  {
    name: "Eps",
    price: "12,34",
    rating: "90/110",
  },
  {
    name: "Чистая маржа",
    price: "12,34",
    rating: "90/110",
  },
  {
    name: "ROE",
    price: "12,34",
    rating: "90/110",
  },
  {
    name: "DA",
    price: "12,34",
    rating: "90/110",
  },
  {
    name: "Долг к активам",
    price: "12,34",
    rating: "90/110",
  },
  {
    name: "BVPS",
    price: "12,34",
    rating: "90/110",
  },
  {
    name: "PB",
    price: "12,34",
    rating: "90/110",
  },
  {
    name: "Дивидендная доходность (TTM)",
    price: "12,34",
    rating: "90/110",
  },
  {
    name: "PE(TTM)",
    price: "12,34",
    rating: "90/110",
  },
];
</script>
