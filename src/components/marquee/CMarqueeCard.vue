<template>
  <div class="flex items-center text-black whitespace-nowrap !mr-0">
    <div
      class="min-w-10 rounded-md border border-[#8F96A8]/[0.16] overflow-hidden mr-2.5"
    >
      <img
        class="min-w-10 h-10 object-contain p-1"
        :src="companyData.logo"
        alt="logo"
      />
    </div>
    <div class="mr-4">
      <p class="font-medium">
        {{ companyData.ticker }}: {{ companyData.market }}
      </p>
      <p class="">{{ companyData.name }}</p>
    </div>
    <div class="flex flex-col items-end">
      <!-- <p class="font-bold">
        {{ tradePrice?.toFixed(1) }} <span class="font-medium">UZS</span>
      </p> -->
      <p class="font-bold">300.0 <span class="font-medium">UZS</span></p>
      <!-- <p
        v-if="priceChange !== null"
        :class="{
          'text-[#49B97D]': priceChange >= 0,
          'text-[#FF493D]': priceChange < 0,
        }"
      >
        {{ priceChange.toFixed(1) }}% (24h)
      </p> -->
      <p class="text-[#49B97D]">12% (24)</p>
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
import { onMounted, ref } from "vue";

interface CompanyData {
  name: string;
  ticker: string;
  market: string;
  logo: string;
  url: string;
}

const props = defineProps<{
  companyData: CompanyData;
}>();

const tradePrice = ref<number | null>(null);
const previousTradePrice = ref<number | null>(null);
const priceChange = ref<number | null>(null);

const getTradeDates = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // If yesterday is Saturday or Sunday, go back to the previous Friday
  if (yesterday.getDay() === 6) {
    // Saturday
    yesterday.setDate(yesterday.getDate() - 1);
  } else if (yesterday.getDay() === 0) {
    // Sunday
    yesterday.setDate(yesterday.getDate() - 2);
  }

  const dayBeforeYesterday = new Date(yesterday);
  dayBeforeYesterday.setDate(yesterday.getDate() - 1);

  // If dayBeforeYesterday is Saturday or Sunday, go back to the previous Friday
  if (dayBeforeYesterday.getDay() === 6) {
    // Saturday
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 1);
  } else if (dayBeforeYesterday.getDay() === 0) {
    // Sunday
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);
  }

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  return {
    yesterday: formatDate(yesterday),
    dayBeforeYesterday: formatDate(dayBeforeYesterday),
  };
};

onMounted(async () => {
  const { yesterday, dayBeforeYesterday } = getTradeDates();

  const fetchTradePrice = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].trade_price;
    }
    return null;
  };

  try {
    const tradePriceUrl = `${
      props.companyData.url.split("?")[0]
    }?page=1&page_size=1&start_date=${yesterday}&end_date=${yesterday}`;
    const previousTradePriceUrl = `${
      props.companyData.url.split("?")[0]
    }?page=1&page_size=1&start_date=${dayBeforeYesterday}&end_date=${dayBeforeYesterday}`;

    tradePrice.value = await fetchTradePrice(tradePriceUrl);
    previousTradePrice.value = await fetchTradePrice(previousTradePriceUrl);

    if (tradePrice.value !== null && previousTradePrice.value !== null) {
      priceChange.value =
        ((tradePrice.value - previousTradePrice.value) /
          previousTradePrice.value) *
        100;
    }
  } catch (error) {
    console.error("Error fetching trade prices:", error);
  }
});
</script>

<style scoped></style>
