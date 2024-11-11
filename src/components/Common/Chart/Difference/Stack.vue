<template>
  <div class="grid grid-cols-6 gap-2">
    <div class="col-span-3 flex justify-between">
      <div
        :class="[variants[variant].tag]"
        class="px-2 rounded shrink-0 text-xs text-white max-w-fit leading-130 grid place-items-center"
      >
        {{ amount }}
      </div>
      <div
        :class="{ '-order-2': variant === 'sell' }"
        class="text-white text-xs"
      >
        {{ pieces }}
      </div>
    </div>

    <div
      :class="{ '-order-3': variant === 'sell' }"
      class="w-full h-5 relative p-1 col-span-3 flex-y-center"
    >
      <div :class="[variants[variant].text]" class="w-full text-xs">
        {{ formatMoneyDecimal(price, 2) }}
      </div>
      <div
        :class="[variants[variant].background]"
        :style="{ maxWidth: priceWidth + 'px' }"
        class="absolute top-0 h-full rounded w-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { formatMoneyDecimal } from "~/utils";

type TVariants = Record<
  string,
  {
    tag: string;
    text: string;
    background: string;
  }
>;

interface Props {
  amount: number;
  price: number;
  pieces: number;
  variant: "buy" | "sell";
  max: number;
  min: number;
}

const props = defineProps<Props>();

const priceWidth = computed(() => {
  const range = props.max - props.min;
  return (((props.price - props.min) / range) * 140).toFixed(2);
});

const variants: TVariants = {
  buy: {
    tag: "bg-success",
    text: "text-success text-right",
    background: `bg-success/15 right-0`,
  },
  sell: {
    tag: "bg-red justify-self-end",
    text: "text-red text-left",
    background: `bg-red/15 left-0`,
  },
};
</script>
