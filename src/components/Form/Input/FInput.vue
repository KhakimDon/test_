<template>
  <label
    :class="[
      'transition-200 h-[45px] inline-flex items-center justify-start relative bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 border-white-300 overflow-hidden w-full py-[11px] px-3 gap-x-2',
      error
        ? '!dark:border-pink'
        : 'focus-within:border-blue focus-within:dark:border-blue',
      $attrs.class,
    ]"
    :for="id"
  >
    <span :class="[prefixClass]">
      <slot name="prefix" />
    </span>
    <input
      ref="kInput"
      v-maska="maskPattern"
      :class="[
        inputClass,
        'font-normal  text-sm leading-130 placeholder:text-gray-400 text-dark focus-within:text-dark dark:text-white dark:!bg-[#34353F] flex-grow outline-none transition-200 w-full h-full',
      ]"
      :readonly="!autocomplete"
      :value="modelValue"
      v-bind="{
        type,
        minlength,
        maxlength,
        max,
        min,
        disabled,
        placeholder,
        id,
      }"
      @blur="emit('blur')"
      @focus="emit('focus')"
      @input="handleInput"
    />

    <span :class="[suffixClass]">
      <slot name="suffix" />
    </span>
  </label>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { vMaska } from "maska/vue";

import { TClassName } from "~/types/common";
import type { MaskInputOptions } from "maska";

export interface Props {
  id?: string;
  type?: string;
  placeholder?: string;
  modelValue?: number | string;
  disabled?: boolean;
  error?: boolean;
  maxlength?: number;
  minlength?: number;
  max?: number | string;
  min?: number | string;
  inputClass?: TClassName;
  prefixClass?: TClassName;
  suffixClass?: TClassName;
  autocomplete?: boolean;
  maskPattern?: MaskInputOptions;
}

interface Emits {
  (e: "focus"): void;

  (e: "blur"): void;

  (e: "update:modelValue", value: Props["modelValue"]): void;
}

const emit = defineEmits<Emits>();

const handleInput = (e: { target: HTMLInputElement }) => {
  emit("update:modelValue", e.target.value);
};

const kInput = ref();
defineExpose({ kInput });

withDefaults(defineProps<Props>(), {
  type: "text",
  maxlength: undefined,
  minlength: undefined,
  max: undefined,
  min: undefined,
  inputClass: undefined,
  autocomplete: true,
});
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button,
input::-webkit-calendar-picker-indicator {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  display: none;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
