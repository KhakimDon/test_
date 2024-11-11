<template>
  <div class="grid grid-cols-2 gap-2">
    <div class="grid gap-1">
      <Stack
        v-for="(stack, idx) in buy"
        :key="idx"
        v-bind="{ ...stack, ...getMaxAndMin(buy) }"
        variant="buy"
      />
    </div>

    <div class="grid gap-1">
      <Stack
        v-for="(stack, idx) in sell"
        :key="idx"
        v-bind="{ ...stack, ...getMaxAndMin(sell) }"
        variant="sell"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Stack from "@/components/Common/Chart/Difference/Stack.vue";

type TStack = {
  amount: number;
  price: number;
  pieces: number;
};

interface Props {
  buy: TStack[];
  sell: TStack[];
}

defineProps<Props>();

// get min and max to calculate chart width
function getMaxAndMin(numbers: TStack[]): { min: number; max: number } {
  return {
    max: Math.max(...numbers.map((el) => el.price)),
    min: Math.min(...numbers.map((el) => el.price)),
  };
}
</script>
