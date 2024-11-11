<template>
  <label
    :class="[{ 'cursor-not-allowed': disabled }, $attrs.class]"
    :for="id"
    class="group flex-center-between relative select-none border border-gray-100 dark:border-gray-700 rounded-lg cursor-pointer p-2.5 bg-slate-100 dark:bg-gray"
  >
    <div class="flex-center-between flex-row-reverse flex-1">
      <input
        v-model="modelValue"
        class="absolute opacity-0 invisible h-0 w-0 peer"
        type="checkbox"
        v-bind="{ disabled, name, id }"
      />
      <slot name="value">
        <span
          :class="[
            'duration-200 ease-in-out inline-block bg-gray-100 h-6 w-6 rounded-md border-2 border-white-200 peer-checked:-rotate-90 peer-checked:after:opacity-100 peer-checked:after:rotate-[138deg] after:transition-all after:duration-200 after:absolute after:left-2 after:top-1 after:w-2 after:h-3 after:border-r-[2.2px] after:border-b-[2.2px] after:rotate-[0deg] after:opacity-0 peer-checked:bg-primary-gradient border-transparent peer-checked:border-blue after:border-white peer-disabled:border-gray-100 peer-disabled:after:border-gray-100',
            {
              '!border-red': error,
              'group-hover:border-primary': !disabled,
            },
            valuesClass,
          ]"
          class="flex-shrink-0"
        />
        <!-- INDETERMINATE  ----- 'bg-primary-gradient after:bg-white after:opacity-100 after:w-3 after:h-0.5 after:relative after:top-0 rotate-90': true,-->
      </slot>
      <slot>
        <span
          :class="[labelStyles]"
          class="leading-130 text-sm text-dark dark:text-white"
        >
          {{ label }}
        </span>
      </slot>
    </div>

    <div v-if="img" class="w-6 h-6">
      <img
        :alt="label"
        :src="img"
        class="w-full h-full object-center object-cover rounded"
      />
    </div>
  </label>
</template>

<script lang="ts" setup>
import { defineModel } from "vue";

interface Props {
  id?: string;
  label?: string;
  name?: string;
  disabled?: boolean;
  error?: boolean;
  labelStyles?: string;
  valuesClass?: string;
  img?: string;
  indeterminate?: boolean;
}

withDefaults(defineProps<Props>(), {});

const modelValue = defineModel<boolean>();
</script>
