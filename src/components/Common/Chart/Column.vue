<template>
  <div>
    <VueApexCharts
      :height="400"
      :options="options"
      :series="data"
      class="w-full relative"
    />
    <template v-if="showDataAtBottom">
      <div
        class="flex justify-between gap-3 mb-0.5 px-[1rem]"
        v-for="(item, idx) in data"
        :key="idx"
      >
        <p
          v-for="(value, index) in item?.data"
          :key="index"
          class="text-xs text-center w-14 font-medium"
          :style="`color: ${colors[idx]}`"
        >
          {{ value }}
        </p>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { formatDate } from "@/utils";

interface Props {
  data: unknown;
  showDataAtBottom?: boolean;
  colors?: string[];
  strokeColors?: string[];
  strokeWidth?: number[];
  // rangeNum: number;
  // range: string;
}

const props = defineProps<Props>();
const colors = props.colors || ["#49B97D", "#0073FF", "#FAA04D", "#D9D9D9"];
const strokeWidth = props.strokeWidth || [4, 4, 4, 1];
const strokeColors = props.strokeColors || [
  "transparent",
  "transparent",
  "transparent",
  "#D9D9D9",
];
const chart = ref(null);
const options = reactive({
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
    },
  },
  colors: colors,
  stroke: {
    width: strokeWidth,
    colors: strokeColors,
  },
  grid: {
    borderColor: "#343540",
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    labels: {
      formatter: (date: Date) => formatDate(date, "YYYY"),
      style: {
        colors: "#ffffff",
      },
    },
  },
  tooltip: {
    enabled: false,
  },
  markers: {
    size: 3,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    markers: {
      width: 8,
      height: 8,
    },
    labels: {
      colors: "#fff",
      useSeriesColors: false,
    },
  },
});

// const data = ref([...props.data]);

// const generatedData = computed(() => {
//   return generateFakeData(props.rangeNum, props.range);
// });

// watch(generatedData, (newData) => {
//   data.value = newData;
// });

// watch(
//   () => props.range,
//   (format) => {
//     switch (format) {
//       case "day":
//         dateFormat.value = "HH:mm";
//         break;
//       case "week":
//         dateFormat.value = "DD MMM";
//         break;
//       case "month":
//         dateFormat.value = "MMM DD";
//         break;
//       case "year":
//         dateFormat.value = "MMM YYYY";
//         break;
//       default:
//         dateFormat.value = "HH:MM";
//     }
//   }
// );

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

// function generateFakeData(rangeNum, range) {
//   const data = [];
//   const now = Date.now();
//
//   // Calculate the start time based on the range
//   let startTime;
//   switch (range) {
//     case "day":
//       startTime = now - rangeNum * 60 * 60 * 1000; // One day
//       break;
//     case "week":
//       startTime = now - rangeNum * 24 * 60 * 60 * 1000; // One week
//       break;
//     case "month":
//       startTime = now - rangeNum * 30 * 24 * 60 * 60 * 1000; // One month (approximation)
//       break;
//     case "year":
//       startTime = now - rangeNum * 365 * 24 * 60 * 60 * 1000; // One year (approximation)
//       break;
//     default:
//       startTime = now - rangeNum * 60 * 1000; // Default to 5 minutes
//   }
//
//   const interval = (startTime - now) / (rangeNum * 60); // Interval in seconds
//
//   for (let i = 0; i < rangeNum * 60; i++) {
//     const timestamp = now + i * interval * 1000;
//     const randomValue = Math.random() * 100; // Replace with desired value generation logic
//     data.push({
//       x: timestamp,
//       y: randomValue,
//     });
//   }
//
//   return data;
// }
</script>

<style>
.apexcharts-legend-series {
  background: #343540 !important;
  border-radius: 16px !important;
  padding: 1px 8px 4px 8px !important;
}

.apexcharts-legend-series span {
  font-family: "Helvetica Neue" !important;
  font-weight: 500 !important;
}
</style>
