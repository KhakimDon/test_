<template>
  <div
    class="w-full dark:bg-gray bg-white p-4 rounded-xl"
    :class="{ 'opacity-40 pointer-events-none': isPending }"
    @click="handleClick"
  >
    <div v-if="isPending" />
    <div class="flex items-center justify-between">
      <div>
        <h6 class="card-number text-xs">{{ cardNumber ?? "0000" }}</h6>
        <h2
          v-if="isPending"
          class="text-xl dark:text-white text-dark font-bold leading-8"
        >
          {{ $t("add_account.process") }}
        </h2>
        <div v-else class="flex items-center gap-1.5">
          <h2 class="text-xl dark:text-white text-dark font-bold leading-8">
            {{ formatMoneyDecimal(parseInt(money), 2) }}
          </h2>
          <span
            class="text-xs dark:text-white text-dark font-medium leading-none uppercase py-0.5 px-2 border border-[#25242A]/10 dark:border-[#8F96A8]/30 rounded-md"
          >
            {{ currency ?? "UZS" }}
          </span>
        </div>
        <p
          class="mt-3 py-1 inline-block px-2 rounded-md dark:bg-gray-700 bg-light dark:text-white text-dark text-xs leading-[16px]"
        >
          {{ name }}
        </p>
      </div>
      <div>
        <Radio v-if="isActive" />
        <span v-else-if="isPending">
          <i class="icon-hour-process text-gray-100 text-2xl" />
        </span>
        <div v-else class="size-6 rounded-full border border-dark-100" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Radio from "@/components/Icon/Radio.vue";
import { formatMoneyDecimal } from "@/utils";

interface Props {
  status: "active" | "pending" | string;
  isActive: boolean;
  cardNumber: string;
  money: string;
  name: string;
  currency?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(["select", "close"]);

const isPending = computed(() => props.status && props.status === "pending");

const handleClick = () => {
  if (props.status === "pending") {
    return;
  }

  emit("select");
  emit("close");
};
</script>

<style scoped>
.card-number {
  background: linear-gradient(0deg, #0073ff -1.25%, #00c2ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
