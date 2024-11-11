<template>
  <section class="grid place-items-center gap-3 container">
    <img
      :alt="single?.organization?.title"
      :src="single?.organization?.logo?.s100x100 ?? '/images/default.svg'"
      class="size-16 object-center object-cover rounded-full border border-white/15"
    />
    <div class="text-center">
      <h1 class="text-xl font-medium text-dark dark:text-white">
        {{ single?.organization?.abreviated_title }}
      </h1>
      <p class="text-sm text-gray-100 dark:text-gray-100">
        {{
          hasCategory
            ? single?.organization?.category.title
            : single?.organization?.title
        }}
      </p>
    </div>

    <ul v-if="hasList" class="w-full">
      <li
        class="flex-center-between py-3 border-b border-slate-100 dark:border-gray"
      >
        <span class="text-xs text-dark dark:text-gray-100">
          {{ $t("price") }}
        </span>
        <span class="text-dark dark:text-white text-sm font-semibold">
          {{ formatMoneyDecimal(single?.price) }}
          <span class="font-normal">{{ $t("sum") }}</span>
        </span>
      </li>
      <li
        class="flex-center-between py-3 border-b border-slate-100 dark:border-gray"
      >
        <span class="text-xs text-gray dark:text-gray-100">
          {{ $t("amount") }}
        </span>
        <span class="text-dark dark:text-white text-sm font-semibold">
          {{ formatMoneyDecimal(single?.count) }}
        </span>
      </li>
      <li class="flex-center-between py-3">
        <span class="text-xs text-gray dark:text-gray-100">
          {{ $t("expire") }} {{ single?.type?.toUpperCase() }}
        </span>
        <span class="text-dark dark:text-white text-sm font-semibold">
          {{ formatDate(single?.start_date) }} -
          {{ formatDate(single?.end_date) }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { formatDate, formatMoneyDecimal } from "@/utils";
import { IOffering } from "@/modules/Market/types";

interface Props {
  single: IOffering;
  hasList: boolean;
  hasCategory: boolean;
}

withDefaults(defineProps<Props>(), {
  hasList: true,
  hasCategory: false,
});
</script>
