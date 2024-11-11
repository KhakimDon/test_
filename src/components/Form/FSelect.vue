<template>
  <div ref="select">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed top-0 left-0 w-full h-screen bg-[#111217D4] z-[101]"
        @click="close"
      />
    </Transition>
    <!--  SELECTED OPTION  -->
    <div
      :class="[
        selectedOptionStyles,
        error ? '!border-red' : '',
        { 'opacity-75': disabled },
      ]"
      class="transition-200 px-3 py-2.5 bg-slate-100 dark:bg-gray transition-all duration-300 border border-transparent cursor-pointer flex items-center justify-between rounded-lg min-h-[45px] gap-1"
      tabindex="1"
      @click="open"
    >
      <slot :value="selectedValue" name="selectedOption">
        <p
          v-if="!selectedValue"
          :class="{ '!text-dark dark:text-white': disabled }"
          class="font-medium text-dark dark:text-white select-none text-sm leading-130"
          tabindex="1"
        >
          {{ placeholder ?? $t("select") }}
        </p>
        <p
          v-else
          :class="[{ '!text-gray': disabled }, selectedStyles]"
          class="font-medium select-none text-sm text-dark dark:text-white leading-140"
          tabindex="1"
        >
          {{ selectedValue[labelKey] }}
        </p>

        <slot name="chevron">
          <span
            :class="[{ 'rotate-180': isOpen }, iconClass]"
            class="icon-chevron-down1 flex-center h-5 transition-200 text-sm text-dark dark:text-white inline-block shrink-0"
          />
        </slot>
      </slot>
    </div>
    <!--  OPTIONS  -->
    <Transition name="dropdown">
      <div
        v-if="isOpen && !disabled"
        class="fixed bottom-3 left-0 w-full bg-white dark:bg-dark select-none z-[102] rounded-t-3xl px-5 pb-4 text-dark dark:text-white"
      >
        <ul :key="isOpen">
          <slot name="options">
            <!-- HEADER -->
            <li class="flex-center-between p-4">
              <span />

              <p class="text-lg text-dark dark:text-white font-medium">
                {{ placeholder }}
              </p>

              <button class="icon-close text-2xl" @click="close" />
            </li>

            <!--  OPTIONS -->
            <li
              v-for="(option, idx) in options"
              :key="idx"
              class="transition-300 cursor-pointer"
              @click="onSelect(option)"
            >
              <p class="flex-y-center space-x-1.5 py-2.5">
                <slot :index="idx" :option="option" name="option">
                  <FRadio
                    :model-value="selectedValue?.[valueKey]"
                    :value="option?.[valueKey]"
                  >
                    <span
                      :class="{ 'font-medium': isActive(option) }"
                      class="text-dark dark:text-white text-sm"
                    >
                      {{ option[labelKey] }}
                    </span>
                  </FRadio>
                </slot>
              </p>
            </li>
          </slot>
        </ul>
        <slot name="footer">
          <CButton :text="$t('submit')" class="w-full mt-3" @click="close" />
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { defineModel, ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

import type { TClassName } from "@/types/common";
import CButton from "~/components/Base/CButton.vue";
import FRadio from "@/components/Form/Radio/FRadio.vue";
import useToggle from "@/composables/useToggle";
import { TOption } from "@/types/components";

interface Props {
  options: TOption[];
  labelKey: string;
  valueKey: string;
  placeholder: string;
  selectedOptionStyles?: TClassName;
  selectedStyles?: TClassName;
  iconClass?: TClassName;
  dark?: boolean;
  error?: boolean;
  disabled?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  labelKey: "name",
  valueKey: "id",
});
const modelValue = defineModel<TOption>();
const emit = defineEmits<Emits>();

const { isOpen, open, close } = useToggle();

const selectedValue = ref(findOption(modelValue.value));
const select = ref<HTMLDivElement | null>();

function findOption(option: TOption) {
  return props.options.find(
    (o) => o === option || o[props.valueKey] === option
  );
}

function onSelect(option: TOption) {
  selectedValue.value = option;
  emit("update:modelValue", option[props.valueKey]);
}

onClickOutside(select, close);

function isActive(option: TOption) {
  return (
    option === selectedValue.value ||
    option[props.valueKey as keyof typeof option] === selectedValue.value ||
    (typeof selectedValue.value === "object" &&
      option[props.valueKey as keyof typeof option] ===
        selectedValue.value[props.valueKey])
  );
}

watch(
  () => modelValue.value,
  (newValue) => {
    selectedValue.value = findOption(newValue);
  }
);
</script>
