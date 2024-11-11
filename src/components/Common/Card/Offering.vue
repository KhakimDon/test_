<template>
  <RouterLink
    :class="{ '!bg-red': offering?.is_spo }"
    :to="{ name: 'OfferingsSingle', params: { id: offering?.id } }"
    class="rounded-2xl bg-blue p-1 w-full flex flex-col gap-y-3"
  >
    <div class="flex-center-between p-3 pb-0">
      <div>
        <h3 class="text-white">{{ offering?.organization.title }}</h3>
        <p class="text-white/70 text-xs">
          {{ offering?.organization?.category?.title }}
        </p>
      </div>
      <img
        :alt="offering?.organization?.title"
        :src="offering?.organization?.logo?.original ?? '/images/default.svg'"
        class="size-8 object-cover object-center rounded-md"
      />
    </div>

    <div class="bg-dark/20 rounded-xl p-3 text-white flex flex-col gap-3">
      <div class="flex-center-between gap-2">
        <ul class="w-full">
          <li class="text-xs leading-14">{{ $t("price") }}</li>
          <li>{{ formatMoneyDecimal(offering?.price, 2) }} {{ $t("sum") }}</li>
        </ul>
        <ul class="w-full">
          <li class="text-xs leading-14">{{ $t("amount") }}</li>
          <li>{{ formatMoneyDecimal(offering?.count) }}</li>
        </ul>
      </div>

      <div class="w-full h-px !bg-white/10" />

      <div class="flex-center-between gap-2">
        <p class="flex gap-1">
          <i class="icon-calender text-lg" />
          <span class="text-sm">
            {{ formatDate(offering?.start_date) }} -
            {{ formatDate(offering?.end_date) }}
          </span>
        </p>

        <div
          class="py-1 px-2.5 rounded-lg bg-white text-black uppercase text-xs"
        >
          {{ offering?.is_spo ? "SPO" : "IPO" }}
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts" setup>
import { formatDate, formatMoneyDecimal } from "~/utils";
import { IOffering } from "@/modules/Market/types";

interface Props {
  offering: IOffering;
}

defineProps<Props>();
</script>
