<template>
  <div
    class="px-2.5 py-1.5 bg-gray rounded-md flex flex-col items-center gap-0.5"
  >
    <p class="text-xs text-gray-100 leading-[14px]">
      {{ title }}
    </p>
    <Finance
      :is-increase="isIncrease"
      :label="statInfo"
      label-class="!text-white text-xs"
      icon-class="!text-success"
    />
  </div>
</template>
<script setup lang="ts">
import Finance from "@/components/Common/Chip/Finance.vue";

interface Props {
  title: string;
  isIncrease: boolean;
  statInfo: string;
}

defineProps<Props>();
</script>
