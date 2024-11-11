<template>
  <div class="bg-gray py-4 px-3 rounded-2xl">
    <div class="flex justify-between gap-3 items-center">
      <div class="text-white">
        <h6 class="text-xs leading-normal">{{ cardNumber }}</h6>
        <h2 class="font-bold text-xl">
          {{ formatMoneyDecimal(balance) }} {{ currency }}
        </h2>
        <p class="text-xs text-gray-200">{{ name }}</p>
      </div>
      <CMoveButton />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CMoveButton from "@/components/Base/CMoverButton.vue";
import { formatMoneyDecimal } from "@/utils";

interface Props {
  name: string;
  balance: number;
  cardNumber: number;
  currency?: string;
}

withDefaults(defineProps<Props>(), {
  currency: "UZS",
});
</script>
