<template>
  <div class="pb-5">
    <div
      class="bg-gray rounded-xl px-4 relative flex items-center justify-between"
    >
      <img
        :src="item?.img"
        :alt="item?.title"
        class="absolute top-0 -translate-y-2 rounded-md border border-white/[0.16]"
      />

      <div>
        <h3 class="text-gray-100 text-xs font-normal leading-124">
          {{ item?.subtitle }}
        </h3>
        <p class="text-white text-base font-bold leading-124">
          {{ item?.title }}
        </p>
      </div>
      <img
        src="/images/fake/coins.svg"
        alt="coin image"
        class="max-w-[151px] max-h-[140px]"
      />

      <div
        class="absolute bottom-0 left-0 w-full bg-gray-700/50 rounded-b-xl backdrop-blur-[6px] py-2 px-4"
      >
        <p class="text-xs font-normal leading-124 text-white">
          <span class="text-gray-100">{{ $t("request_for_purchase") }}</span>
          {{ date }}
        </p>
      </div>
    </div>
    <div
      class="border rounded-xl py-3 px-4 border-success my-5 flex items-center justify-between"
    >
      <div>
        <p class="text-success text-sm font-normal">Успешно</p>
        <div class="flex gap-2 items-center">
          <p class="text-white text-2xl font-bold leading-7">
            {{ formatMoneyDecimal(item?.amount?.subtitle) }}
          </p>
          <div
            class="px-2 py-1 rounded-md bg-gray text-gray-100 text-xs font-semibold leading-4"
          >
            UZS
          </div>
        </div>
      </div>
      <div class="p-2 rounded-lg bg-gray cursor-pointer transition-300">
        <img src="/images/svg/check.svg" alt="check" />
      </div>
    </div>
    <div class="divide-gray divide-y">
      <div class="py-2.5">
        <p class="text-gray-100 text-sm font-normal leading-130 mb-1">
          {{ $t("amount") }}
        </p>
        <p
          :class="
            item?.amount?.type === 'pcs-sell'
              ? 'text-red'
              : item?.amount?.type === 'pcs-buy'
              ? 'text-success'
              : 'text-success'
          "
        >
          {{ item?.amount?.text }} pcs.
        </p>
      </div>
      <div class="py-2.5">
        <p class="text-gray-100 text-sm font-normal leading-130 mb-1">
          {{ $t("share_price") }}
        </p>
        <p class="text-white text-sm font-semibold leading-124">
          {{ formatMoneyDecimal(1900030) }} UZS
        </p>
      </div>
      <div class="py-2.5">
        <p class="text-gray-100 text-sm font-normal leading-130 mb-1">
          {{ $t("transaction_amount") }}
        </p>
        <p class="text-white text-sm font-semibold leading-124">
          {{ formatMoneyDecimal(1900030) }} UZS
        </p>
      </div>
      <div class="py-2.5">
        <p class="text-gray-100 text-sm font-normal leading-130 mb-1">
          {{ $t("commission") }}
        </p>
        <p class="text-white text-sm font-semibold leading-124">
          {{ formatMoneyDecimal(1900030) }} UZS
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import { formatMoneyDecimal } from "@/utils";
interface Props {
  item: {
    title: string | number;
    subtitle: string;
    subtitle_tag: string;
    img: string;
    amount: {
      type: "price" | "pcs-sell" | "pcs-buy";
      text: string | number;
      subtitle: string | number;
      subtitle_type: "date" | "price" | "status" | "up" | "down";
    };
  };
}
defineProps<Props>();

const date = dayjs(new Date()).format("HH:mm DD.MM.YYYY");
</script>
