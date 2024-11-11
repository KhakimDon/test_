<template>
  <section class="grid gap-2">
    <div
      class="flex-center-between bg-slate-100 dark:bg-gray border border-gray-100 dark:border-gray-700 rounded-lg px-4 text-white"
    >
      <button class="grid place-items-center h-full px-1.5" @click="decrement">
        <div class="w-3.5 h-0.5 bg-gray dark:bg-gray-300" />
      </button>
      <FGroup
        :label="$t('amount')"
        :label-class="'absolute-x !text-dark dark:!text-white ' + labelClass"
        class="relative -mt-3 flex-1"
      >
        <FInput
          v-model="modelValue"
          :input-class="
            !isLabelFocused && !String(modelValue)?.length
              ? 'h-full !bg-slate-100 font-semibold'
              : '!h-fit !text-center !bg-slate-100 font-semibold'
          "
          :mask-pattern="maskOptions"
          class="!pt-0 !pb-1 !items-end border-none !bg-slate-100 dark:!bg-[#34353F]"
          @blur="isLabelFocused = false"
          @focus="isLabelFocused = true"
        />
      </FGroup>
      <button
        class="icon-plus text-gray dark:text-gray-300 h-full px-1.5"
        @click="increment"
      />
    </div>

    <div class="flex gap-2 w-full">
      <button
        v-for="value in suggestValues"
        :key="value"
        :class="{
          'bg-primary-gradient border-blue text-white': value === modelValue,
        }"
        class="p-1.5 bg-slate-100 dark:bg-gray border border-gray-100 dark:border-gray-700 text-dark dark:text-white rounded-lg w-full transition-300 font-semibold"
        @click="modelValue = value"
      >
        {{ value }}
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, defineModel, ref } from "vue";
import FInput from "@/components/Form/Input/FInput.vue";
import FGroup from "@/components/Form/FGroup.vue";
import { formatMoneyDecimal } from "@/utils";

const modelValue = defineModel({
  type: Number,
  default: 1,
});

const isLabelFocused = ref(false);

const labelClass = computed(() => {
  if (String(modelValue.value)?.length > 0 || isLabelFocused.value) {
    return "translate-y-6 z-50 text-xs transition-200";
  } else {
    return "translate-y-8 z-50  transition-200";
  }
});

function decrement() {
  if (parseInt(modelValue.value) > 1) {
    modelValue.value =
      parseInt(String(modelValue.value).replace(/\s/g, "")) - 1;
  }
}

function increment() {
  modelValue.value = parseInt(String(modelValue.value).replace(/\s/g, "")) + 1;
}

const suggestValues = [100, 200, 250, 300, 400];
const maskOptions = {
  mask: "#########",
  postProcess: (value: string) => formatMoneyDecimal(value),
};
</script>
