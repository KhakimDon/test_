<template>
  <FSelect
    v-model="modelValue"
    icon-class="-rotate-90"
    label-key="label"
    selected-option-styles="dark:border-gray-700"
    v-bind="{ options, placeholder }"
    value-key="value"
  >
    <template #selectedOption="{ value }">
      <div class="flex-center-between w-full">
        <span class="text-dark dark:text-white text-sm leading-130">
          {{ placeholder }}
        </span>
        <div class="flex-y-center gap-3">
          <span class="text-disabled-text dark:text-gray-100 text-sm">{{
            value?.label || value
          }}</span>
          <button
            class="icon-chevron-left text-disabled-text dark:text-gray-100 text-sm rotate-180"
          />
        </div>
      </div>
    </template>
  </FSelect>
</template>

<script lang="ts" setup>
import { defineModel } from "vue";
import type { TOption } from "@/types/components";
import FSelect from "@/components/Form/FSelect.vue";

interface Props {
  options: (string | number | { [key: string]: string | number })[];
  placeholder: string;
  value?: TOption;
}

defineProps<Props>();
const modelValue = defineModel<TOption>();
</script>
