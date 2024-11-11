<template>
  <VueApexCharts
    ref="chart"
    :height="400"
    :options="options"
    :series="[{ data }]"
    class="w-full relative"
    type="area"
  />
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { genGradientLineConfig } from "@/config";

interface Props {
  data: unknown;
  rangeNum: number;
  range: string;
}

const props = defineProps<Props>();

// RANGE SHOULD CHANGE WHEN RANGE STRING CHANGED. NEEDS TO BE CALCULATED
const XAXISRANGE = ref(props.rangeNum * 60 * 1000); // 5 minute
const chart = ref(null);
const dateFormat = ref("HH:MM");
const options = computed(() =>
  genGradientLineConfig(XAXISRANGE.value, dateFormat.value)
);

watch(
  () => props.range,
  (format) => {
    switch (format) {
      case "day":
        dateFormat.value = "HH:mm";
        break;
      case "week":
        dateFormat.value = "DD MMM";
        break;
      case "month":
        dateFormat.value = "MMM DD";
        break;
      case "year":
        dateFormat.value = "MMM YYYY";
        break;
      default:
        dateFormat.value = "HH:MM";
    }
  }
);

//todo TURNING OFF FOR NOW
// setInterval(() => {
//   const newDataPoint = generateFakeData(1)[0];
//   const newSeriesData = [...data.value, newDataPoint];
//
//   const filteredData = newSeriesData.filter(
//     (d) => new Date(d.x).getTime() > XAXISRANGE
//   );
//
//   options.series = [{ data: filteredData }];
//   if (chart.value) {
//     chart.value.updateSeries(options.series, true);
//   }
//
//   data.value.push(newDataPoint);
// }, 1000);
//todo need to add range here
</script>
