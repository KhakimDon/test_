<template>
  <ul
    class="bg-slate-100 dark:bg-gray border border-gray-100 dark:border-gray-700 rounded-lg p-3"
  >
    <li
      class="text-dark dark:text-white pb-2 border-b border-gray-100 dark:border-gray-700 flex-center-between text-sm"
    >
      <span class="text-gray dark:text-gray-100">1 {{ $t("stock") }}</span>
      <span class="font-semibold"
        >{{ formatMoneyDecimal(price, 2) }} {{ $t("sum") }}</span
      >
    </li>
    <li
      class="text-dark dark:text-white py-2 border-b border-gray-100 dark:border-gray-700 flex-center-between text-sm"
    >
      <span class="text-gray dark:text-gray-100">{{ $t("amount") }}</span>
      <span class="font-semibold">{{ amount }}</span>
    </li>
    <li
      class="text-dark dark:text-white py-2 border-b border-gray-100 dark:border-gray-700 flex-center-between text-sm"
    >
      <span class="text-gray dark:text-gray-100">{{ $t("total_cost") }}</span>
      <span class="font-semibold">{{ formatMoneyDecimal(totalCost, 2) }}</span>
    </li>
    <li class="text-dark dark:text-white pt-2 flex-center-between text-sm">
      <span class="text-gray dark:text-gray-100">{{ $t("commission") }}</span>
      <span class="font-semibold">
        {{ commission }}% ({{ formatMoneyDecimal(calculatedCommission) }}
        {{ $t("sum") }})
      </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { formatMoneyDecimal } from "~/utils";
import { computed } from "vue";

interface Props {
  amount: number | string;
  price: number;
  commission: number;
}

const props = defineProps<Props>();

const totalCost = computed(() => {
  if (typeof props.amount !== "number") {
    return props.price * String(props.amount).replace(/\s/g, "");
  }
  return Number(props.amount) * props.price;
});
const calculatedCommission = computed(
  () => (props?.commission / 100) * totalCost.value
);
</script>
