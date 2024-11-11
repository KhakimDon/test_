<template>
  <VueApexCharts
    ref="chart"
    height="100%"
    :options="options"
    :series="[{ data }]"
    class="w-full relative"
    type="area"
  />
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { formatDate, formatNumbers } from "@/utils";

interface Props {
  data: unknown;
  rangeNum: number;
  range: string;
}

const props = defineProps<Props>();

const XAXISRANGE = ref(props.rangeNum * 60 * 1000); // 5 minute
const chart = ref(null);
const dateFormat = ref("HH:MM");
const options = computed(() => ({
  chart: {
    id: "realtime",
    type: "area",
    stacked: false,
    height: 350,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
      type: "x",
      autoScaleXaxis: true,
    },
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 300,
      },
    },
  },
  stroke: {
    width: [2, 3],
    curve: ["straight", "monotoneCubic"],
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.61,
      opacityTo: 0,
    },
  },
  grid: {
    borderColor: "#343540",
  },
  zoom: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  yaxis: {
    labels: {
      formatter: (val) => formatNumbers(val),
      style: {
        colors: "#B2B7D0",
        fontSize: "12px",
        fontWeight: "medium",
        position: "absolute",
        zIndex: 9999,
      },
      offsetX: 0,
    },
    axisBorder: {
      show: false,
    },
    tickAmount: 4,
    opposite: true,
  },
  xaxis: {
    type: "datetime",
    range: XAXISRANGE.value,
    tooltip: {
      enabled: false,
    },
    labels: {
      formatter: (value) => formatDate(value, dateFormat.value),
      style: {
        colors: "#B2B7D0",
      },
    },
    crosshairs: {
      show: false,
    },
  },
  axisBorder: {
    show: true,
    color: "red",
  },
  axisTicks: {
    show: false,
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
      show: false,
    },
  },
}));

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
