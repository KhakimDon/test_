<template>
  <VueApexCharts
    :height="400"
    :options="options"
    :series="series"
    class="w-full relative"
    type="candlestick"
  />
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { formatDate, formatNumbers } from "@/utils";

interface Props {
  data: unknown;
  rangeNum: number;
}

const props = defineProps<Props>();
const series = ref([
  {
    data: props.data,
  },
]);
const XAXISRANGE = ref(props.rangeNum * 60 * 1000); // 5 minute
const options = reactive({
  chart: {
    type: "candlestick",
    height: 350,
    zoom: {
      enabled: true,
      type: "x",
      autoScaleXaxis: true,
    },
  },
  zoom: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    labels: {
      formatter: (value) => formatDate(value, "HH:MM"),
      style: {
        colors: "#B2B7D0",
        fontSize: "12px",
        fontWeight: "bold",
      },
    },
  },
  yaxis: {
    labels: {
      formatter: (val) => formatNumbers(val),
      offset: 50,
      style: {
        colors: "#B2B7D0",
        fontSize: "12px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      enabled: true,
    },
    tickAmount: 5,
    opposite: true,
  },
  grid: {
    borderColor: "#343540",
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    custom: function ({ seriesIndex, dataPointIndex, w }: Record<any, any>) {
      const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
      return `<div class="p-1 bg-primary-gradient rounded text-white text-sm">
            ${formatNumbers(data.y.toFixed(2))}
        </div>`;
    },
    marker: {
      show: true,
    },
  },
});
</script>
