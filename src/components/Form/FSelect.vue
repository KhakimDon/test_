<template>
  <div class="relative" ref="select">
    <!--  SELECTED OPTION  -->
    <div
      class="transition-200 px-3 py-[11px] bg-gray-300 transition-all duration-300 border border-transparent cursor-pointer flex items-center justify-between rounded-lg"
      tabindex="1"
      :class="[
        selectedOptionStyles,
        error ? '!border-red' : 'focus-within:border-blue-100',
        { 'focus-within:border-gray-100': disabled },
      ]"
      @click="toggleSelect(!showOptions)"
    >
      <slot name="selectedOption" :value="value">
        <p
          tabindex="1"
          v-if="!value"
          class="text-dark-100 select-none text-sm"
          :class="{ '!text-gray': disabled }"
        >
          {{ placeholder }}
        </p>
        <p
          v-else
          class="select-none text-sm text-dark-100 font-medium"
          tabindex="1"
          :class="{ '!text-gray': disabled }"
        >
          {{ value[labelKey] || value }}
        </p>
        <slot name="chevron">
          <span
            class="text-dark-100 icon-arrow-sm transition-all duration-200 inline-block shrink-0 ml-1"
            :class="[{ 'rotate-180': showOptions }]"
          >
          </span>
        </slot>
      </slot>
    </div>
    <!--  OPTIONS  -->
    <Transition name="select">
      <div
        v-if="showOptions && !disabled"
        :key="showOptions"
        class="absolute top-full w-full bg-white border border-blue-50 z-10 translate-y-3 overflow-hidden max-h-[300px] overflow-y-scroll text-white rounded"
      >
        <slot name="options">
          <div
            v-for="(option, idx) in options"
            :key="idx"
            :class="{ 'bg-gray-350': isActive(option) }"
            class="transition-all duration-200 cursor-pointer hover:bg-gray-300 text-sm font-medium text-dark px-3"
            @click="onSelect(option)"
          >
            <div class="border-b border-white-100 py-3 pr-3">
              <slot name="option" :option="option" :index="idx">
                <div class="">{{ option[labelKey] }}</div>
              </slot>
            </div>
          </div>
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref, watch } from "vue";
type TOption = string | number | { [key: string]: string | number };

export interface Props {
  modelValue?: TOption;
  options: TOption[];
  labelKey: string;
  valueKey: string;
  placeholder?: string;
  selectedOptionStyles: string;
  dark?: boolean;
  error?: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  labelKey: "name",
  valueKey: "id",
});

const emit = defineEmits<{
  (e: "on-toggle", value: boolean): void;
  (e: "update:modelValue", value: boolean): void;
  (e: "load"): void;
  (e: "on-select", value: TOption): void;
}>();

const showOptions = ref(false);
function toggleSelect(newValue = showOptions.value) {
  showOptions.value = newValue;
  emit("on-toggle", showOptions.value);
}

function findOption(option: TOption) {
  return props.options.find(
    (o) => o === option || o[props.valueKey] === option
  );
}

const value = ref(findOption(props.modelValue));
function onSelect(option: TOption) {
  value.value = option;
  toggleSelect(false);
  emit("update:modelValue", option[props.valueKey] || option);
  emit("on-select", option);
}

const select = ref();
onClickOutside(select, () => toggleSelect(false));

function isActive(option: TOption) {
  return (
    option === value.value ||
    option[props.valueKey as keyof typeof option] === value.value ||
    (typeof value.value === "object" &&
      option[props.valueKey as keyof typeof option] ===
        value.value[props.valueKey])
  );
}

watch(
  () => props.modelValue,
  (newValue) => {
    value.value = findOption(newValue);
  },
  { immediate: true }
);
</script>

<style scoped>
.select-enter-active,
.select-leave-active {
  transition: all 0.2s ease-in-out;
}

.select-enter-from,
.select-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
