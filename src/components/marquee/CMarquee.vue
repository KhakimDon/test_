<template>
  <div class="bg-gray-100 py-5">
    <vue-marquee-slider
      id="marquee-slider-loop"
      :speed="100000"
      :auto-width="true"
    >
      <CMarqueeCard
        v-for="(item, index) in companiesData"
        :key="index + companiesData.length"
        :company-data="item"
      />
    </vue-marquee-slider>
  </div>
</template>

<script setup lang="ts">
import CMarqueeCard from "./CMarqueeCard.vue";
import { companiesData } from "../../assets/static-data";

import { VueMarqueeSlider } from "vue3-marquee-slider";
import "../../../node_modules/vue3-marquee-slider/dist/style.css";
</script>
