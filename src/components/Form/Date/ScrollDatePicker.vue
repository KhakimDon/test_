<template>
  <div class="date-picker-container">
    <div class="flex justify-between items-center mb-4">
      <div
        @click="activeTab = 1"
        :class="
          activeTab === 1
            ? 'dark:border-blue border-blue dark:bg-gray bg-white'
            : 'dark:border-gray border-slate-100 dark:bg-gray bg-slate-100'
        "
        class="py-[7px] px-5 rounded-lg w-full text-center border"
      >
        <p
          :class="
            fromDates !== t('from_date')
              ? 'dark:text-white'
              : 'dark:text-gray-100'
          "
          class="text-dark text-sm font-normal leading-130"
        >
          {{ fromDates }}
        </p>
      </div>
      <div
        class="dark:text-gray-100 text-gray-300 text-sm leading-130 font-semibold w-full text-center"
      >
        {{ t("to") }}
      </div>
      <div
        @click="activeTab = 2"
        :class="
          activeTab === 2
            ? 'dark:border-blue border-primary-gradient dark:bg-gray bg-white'
            : 'dark:border-gray border-slate-100 dark:bg-gray bg-slate-100'
        "
        class="py-[7px] px-5 rounded-lg bg-gray w-full text-center border"
      >
        <p
          :class="
            toDates !== t('to_date') ? 'dark:text-white' : 'dark:text-gray-100'
          "
          class="text-dark text-sm font-normal leading-130"
        >
          {{ toDates }}
        </p>
      </div>
    </div>
    <div class="date-picker-scroll">
      <VueScrollPicker
        :options="monthOptions"
        v-model="currentMonth"
        class="scroll-picker !w-full"
      />
      <VueScrollPicker
        :options="dayOptions"
        v-model="currentDay"
        class="scroll-picker !w-full"
      />
      <VueScrollPicker
        :options="yearOptions"
        v-model="currentYear"
        class="scroll-picker !w-full"
      />
    </div>
    <div class="flex gap-3 mt-5 pt-3 pb-2">
      <CButton
        @click="dataClear"
        class="w-full bg-[#D2D5DC] !text-[#141414] dark:bg-[#D7DBE0]"
        :text="t('clear')"
      />
      <CButton @click="submit" class="w-full" :text="t('submit')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineEmits } from "vue";
import { VueScrollPicker } from "vue-scroll-picker";
import "vue-scroll-picker/lib/style.css";
import { useI18n } from "vue-i18n";
import CButton from "@/components/Base/CButton.vue";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import "dayjs/locale/uz-latn";
const { locale, t } = useI18n();

interface Props {
  activeTabs: number;
}
const props = defineProps<Props>();
const fromDates = ref(t("from_date"));
const toDates = ref(t("to_date"));
const activeTab = ref(props.activeTabs);

const emit = defineEmits<{
  (e: "startDate", value: string | number): void;
  (e: "endDate", value: string | number): void;
}>();
const yearOptions = Array.from(
  { length: new Date().getFullYear() - 1969 },
  (_, i) => 1970 + i
);
const monthOptions = Array.from({ length: 12 }, (_, i) =>
  dayjs(
    new Date(0, i).toLocaleString(
      locale.value === "uz"
        ? "uz-latn"
        : locale.value === "ru"
        ? "ru"
        : locale.value,
      { month: "numeric" }
    )
  )
    .locale(locale.value === "uz" ? "uz-latn" : locale.value)
    .format("MMMM")
);
const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1);

// Separate refs for 'from' and 'to' dates
const selectedFromYear = ref(yearOptions[0]);
const selectedFromMonth = ref(monthOptions[0]);
const selectedFromDay = ref(dayOptions[0]);

const selectedToYear = ref(yearOptions[0]);
const selectedToMonth = ref(monthOptions[0]);
const selectedToDay = ref(dayOptions[0]);
const currentYear = computed({
  get: () =>
    activeTab.value === 1 ? selectedFromYear.value : selectedToYear.value,
  set: (value: any) => {
    if (activeTab.value === 1) {
      selectedFromYear.value = value;
    } else {
      selectedToYear.value = value;
    }
  },
});
const currentMonth = computed({
  get: () =>
    activeTab.value === 1 ? selectedFromMonth.value : selectedToMonth.value,
  set: (value: any) => {
    if (activeTab.value === 1) {
      selectedFromMonth.value = value;
    } else {
      selectedToMonth.value = value;
    }
  },
});
const currentDay = computed({
  get: () =>
    activeTab.value === 1 ? selectedFromDay.value : selectedToDay.value,
  set: (value: any) => {
    if (activeTab.value === 1) {
      selectedFromDay.value = value;
    } else {
      selectedToDay.value = value;
    }
  },
});

function dataClear() {
  fromDates.value = t("from_date");
  toDates.value = t("to_date");
}
function submit() {
  fromDates.value = t("from_date");
  toDates.value = t("to_date");
}

// Watchers to update date strings
watch([currentYear, currentMonth, currentDay], () => {
  const formattedDate = `${currentDay.value}.${
    monthOptions.indexOf(currentMonth.value) >= 10
      ? monthOptions.indexOf(currentMonth.value) + 1
      : "0" + (monthOptions.indexOf(currentMonth.value) + 1)
  }.${currentYear.value}`;
  if (activeTab.value === 1) {
    fromDates.value = formattedDate;
  } else if (activeTab.value === 2) {
    toDates.value = formattedDate;
  }
});
watch(
  fromDates,
  () => {
    emit("startDate", fromDates.value);
  },
  { deep: true }
);
watch(
  toDates,
  () => {
    emit("endDate", toDates.value);
  },
  { deep: true }
);
watch(props, () => {
  activeTab.value = props.activeTabs;
});
</script>

<style>
.date-picker-container {
  /* Customize as per your design */
  padding: 16px;
  border-radius: 12px;
}
.vue-scroll-picker-layer-top {
  background: transparent !important;
  border-bottom: 0 !important;
}
.vue-scroll-picker-layer-bottom {
  background: transparent !important;
  border-top: 0 !important;
}

.scroll-picker {
  width: 100px;
  text-align: center;
}

.date-picker-scroll {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
}
.vue-scroll-picker-item-selected {
  @apply text-lg font-medium dark:!text-white !text-dark;
}
.vue-scroll-picker-item {
  /* Adjust these values as needed */
}
</style>
