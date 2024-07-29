<template>
  <div class="bg-gray-100 py-5">
    <vue-marquee-slider
        v-if="!loading"
      id="marquee-slider-loop"
      :speed="100500"
      :auto-width="true"
    >
      <CMarqueeCard
        v-for="(item, index) in result"
        :key="index"
        :company-data="item"
      />
    </vue-marquee-slider>
 <pre>{{result}}</pre>

  </div>

</template>

<script setup lang="ts">
import CMarqueeCard from "./CMarqueeCard.vue";

import { VueMarqueeSlider } from "vue3-marquee-slider";
import "../../../node_modules/vue3-marquee-slider/dist/style.css";
const loading = ref(true);


import {onMounted, ref} from "vue";

const result=ref(null)
const fetchTradePrice = async (url: string) => {
  loading.value = true;
  const response = await fetch(url);
  const data = await response.json();
  if (data.results && data.results.length > 0) {
    return data.results
  }
  return null;
};

onMounted(async ()=>{
  loading.value = true;
  try {
    const tradePriceUrl = 'https://goinvest.jprq.app/api/app/v1/common/landing-stocks-slider/?page_size=20&page=1'


    result.value = await fetchTradePrice(tradePriceUrl);

  } catch (error) {
    console.error("Error fetching trade prices:", error);
  }finally {
    loading.value = false;
  }
})

</script>
