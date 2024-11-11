<template>
  <div class="p-3 rounded-xl dark:bg-[#343540] bg-white w-full">
    <div
      class="rounded-md size-6 flex items-center justify-center"
      :class="income ? 'bg-success' : 'bg-red'"
    >
      <span
        class="icon-chevron-down1 text-white text-sm relative align-middle"
        :class="income ? 'rotate-180' : ''"
      />
    </div>
    <h3
      v-if="income"
      class="mt-2 dark:text-gray-100 text-gray-50 text-xs font-normal leading-4"
    >
      {{ $t("income") }}
    </h3>
    <h3
      v-else
      class="mt-2 dark:text-gray-100 text-gray-50 text-xs font-normal leading-4"
    >
      {{ $t("expense") }}
    </h3>
    <Transition mode="out-in">
      <div :key="loading" class="!h-[14px]">
        <p
          v-if="!loading"
          class="dark:text-white text-dark text-sm font-semibold leading-4"
        >
          +{{ formatMoneyDecimal(42872159500) }} UZS
        </p>
        <span v-else class="shimmer w-[70%] h-[14px] rounded-sm bg-gray-500" />
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { formatMoneyDecimal } from "@/utils";

interface Props {
  income: boolean;
}
defineProps<Props>();
const loading = ref(false);
</script>
