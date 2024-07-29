<template>
  <div class="flex items-center whitespace-nowrap !mr-0 text-[#121214]">
    <div
      class="h-7 w-7 rounded-md border border-[#8F96A8]/[0.16] overflow-hidden mr-2.5"
    >
      <img
        class="h-7 w-7 object-contain"
        :src="companyData?.icon ?? '/asaka-bank.png'"
        alt="logo"
      />
    </div>
    <div class="mr-4">
      <p class="font-medium text-sm leading-[17.36px]">
        {{ companyData?.ticker }} : {{ companyData?.market_id }}
      </p>
      <p class="text-xs leading-[14.88px] font-light">{{ companyData?.issuer_short_name }}</p>
    </div>
    <div class="flex flex-col items-end text-sm leading-[17.36px]">
      <p class="font-bold">{{ companyData?.trade_price }} <span class="font-normal">UZS</span></p>
      <p class="font-normal text-xs leading-[14.88px]" :class="{'text-[#FF493D]':percentage===redPersentage, 'text-[#49B97D]':percentage===greenPersentage}">{{percentage}}%</p>
    </div>
    <div class="px-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="4"
        viewBox="0 0 4 4"
        fill="none"
      >
        <circle cx="2" cy="2" r="2" fill="#121214" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { onMounted, ref } from "vue";

import {computed, ref} from "vue";

interface CompanyData {
  "issuer_full_name"?: string,
  "issuer_short_name"?: string,
  "stock_type"?: string,
  "ticker"?: string,
  "trade_datetime"?: string,
  "isin_code"?: string,
  "market_id"?: string,
  "board_id"?: string,
  "trade_price"?: number,
  "trade_quantity"?: number,
  "trading_value"?: number,
  "icon"?: string,
  "difference"?: string | number,
}

const props=defineProps<{
  companyData: CompanyData;
}>();
const redPersentage=ref(0)
const greenPersentage=ref(0)
const percentage= computed(()=>{
  if (props?.companyData.difference?.toString().charAt(0)==='-'){
    redPersentage.value=props?.companyData.difference.toString().slice(1)
  }else {
    greenPersentage.value=props?.companyData?.difference
  }
  return (props?.companyData.difference?.toString().charAt(0)==='-')? props?.companyData.difference.toString().slice(1):props?.companyData.difference
})
</script>

<style scoped></style>
