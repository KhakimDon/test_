<template>
  <div
    class="flex flex-col bg-white dark:bg-gray p-3 rounded-xl relative"
    @click="handleOpen"
  >
    <div class="flex-center-between !items-start">
      <div class="flex-y-center gap-x-2">
        <img
          :src="ipo?.organization?.logo?.s100x100 || '/images/default.svg'"
          alt=""
          class="size-10 object-center object-cover rounded-lg border-2 border-transparent dark:border-gray-700"
        />

        <div>
          <p
            class="text-sm leading-tight font-medium text-dark dark:text-white-200"
          >
            {{ ipo?.organization?.title }}
          </p>
          <span
            :class="{ '!text-success': ipo_status?.includes('finished') }"
            class="text-xs text-blue leading-tight"
          >
            {{ $t("status." + ipo?.status) }}
          </span>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 mt-3">
      <div>
        <p class="text-xs text-gray-100">{{ $t("amount") }}:</p>
        <span class="text-sm text-dark dark:text-white-200 font-semibold">
          {{ formatMoneyDecimal(amount) }}
        </span>
      </div>
      <div>
        <p class="text-xs text-gray-100">{{ $t("submitted_date") }}</p>
        <span class="text-sm text-dark dark:text-white-200 font-semibold">
          {{ formatDate(created_at) }}
        </span>
      </div>
      <div>
        <p class="text-xs text-gray-100">{{ $t("nomination") }}</p>
        <span class="text-sm text-dark dark:text-white-200">
          <span class="font-semibold">
            {{ formatMoneyDecimal(ipo?.price * amount, 2) }}
          </span>
          {{ $t("sum") }}
        </span>
      </div>
      <div>
        <p class="text-xs text-gray-100">{{ $t("application_status") }}</p>
        <span :class="statuses[order_status]" class="text-sm font-semibold">
          {{ $t("status." + order_status) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatDate, formatMoneyDecimal } from "@/utils";

import type { IOfferingApp } from "@/modules/Market/types";

interface Emits {
  (e: "open", id: string): void;
}

const emits = defineEmits<Emits>();
const props = defineProps<IOfferingApp>();

function handleOpen() {
  if (props.order_status?.includes("pending")) {
    emits("open", props?.id);
  }
}

const statuses: Record<string, string> = {
  pending: "text-yellow",
  rejected: "text-red",
  accepted: "text-success",
  cancelled: "text-gray-100/40",
};
</script>
