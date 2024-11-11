<template>
  <VueApexCharts
    type="area"
    :options="options"
    :series="[{ name: 'EPS', data }]"
    :height="340"
    width="100%"
  />
</template>

<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";
import { formatDate } from "@/utils";

interface Props {
  data: any[];
}

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: { enabled: false },
  },
  animations: {
    enabled: false,
  },
  zoom: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    offsetX: -10,
  },
  grid: {
    borderColor: "#343540",
  },
  stroke: {
    curve: "straight",
    colors: ["#49B97D"],
    width: [2, 3],
  },
  fill: {
    type: "gradient",
    colors: "#49B97D",
    gradient: {
      opacityFrom: 0.61,
      opacityTo: 0,
    },
  },
  markers: {
    size: 5,
    colors: ["#49B97D"],
    strokeColors: ["#49B97D"],
    hover: {
      size: 9,
    },
  },
  tooltip: {
    enabled: false,
    intersect: false,
    shared: false,
  },
  xaxis: {
    type: "datetime",
    labels: {
      formatter: (value) => {
        return formatDate(value, "YYYY");
      },
      style: {
        colors: "#ffffff",
      },
    },
  },
  yaxis: {
    labels: {
      formatter: (val) => Number(val).toFixed(2),
      style: {
        colors: "#ffffff",
        fontSize: "12px",
        fontWeight: "medium",
        position: "absolute",
        zIndex: 9999,
      },
      offsetX: 0,
      tickAmount: 6,
    },
  },
};

defineProps<Props>();
</script>
