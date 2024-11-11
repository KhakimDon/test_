<template>
  <div
    class="w-full dark:bg-gray bg-white rounded-2xl flex justify-between items-end h-full max-h-[96px] relative"
  >
    <div v-if="isLoading" class="flex-1 flex-center h-[96px]">
      <Spinner />
    </div>
    <div v-else-if="isError" class="flex-1 flex-center h-[96px]">
      <span class="text-red-light"> <i class="icon-error text-3xl"></i>a </span>
    </div>
    <div class="dark:text-white text-dark py-4 pl-5" v-else>
      <h6 class="text-xs leading-none mb-0.5">
        {{ data?.account_number ?? "0000" }}
      </h6>
      <h2 class="text-xl font-bold leading-none">
        {{ formatMoneyDecimal(parseInt(data?.balance), 2) }} UZS
      </h2>
      <p class="mt-2.5 dark:text-gray-200 text-xs">{{ data?.broker }}</p>
    </div>
    <CMoverButton
      v-if="!isError && !isLoading"
      @click="emit('handleClick')"
      class="absolute top-1/2 -translate-y-1/2 right-3"
    />
  </div>
</template>

<script setup lang="ts">
import CMoverButton from "@/components/Base/CMoverButton.vue";
import { Portfolio } from "@/modules/Main/types";
import Spinner from "@/components/Icon/Spinner.vue";
import { formatMoneyDecimal } from "@/utils";
interface Props {
  data: Portfolio;
  isLoading: boolean;
  isError?: boolean;
  noImage: boolean;
}

defineProps<Props>();
const emit = defineEmits<{
  (e: "handleClick"): void;
}>();
</script>
