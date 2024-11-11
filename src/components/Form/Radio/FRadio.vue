<template>
  <label
    :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
    :style="{ minHeight: computedSize, '--btn-size': computedBtnSize }"
    class="transition group flex-y-center relative select-none min-h-[20px] w-full pr-3"
  >
    <input
      :checked="modelValue === value"
      class="absolute opacity-0 invisible h-0 w-0 peer"
      type="radio"
      v-bind="{ name, value, disabled }"
      @change="handleChange"
    />

    <span
      :class="[computedBtnStyles, radioClass]"
      :style="{ width: computedSize, height: computedSize }"
      class="before:w-3 before:h-3 shrink-0 duration-200 ease-in-out peer-checked:before:opacity-100 mr-1.5 before:opacity-0 relative border-2 rounded-full box-border before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-200 border-gray-100 peer-disabled:before:bg-gray-100 peer-checked:bg-primary before:bg-gray-100"
    />
    <slot>
      <span :class="[labelStyles]" class="transition-200 text-base text-white">
        {{ label }}
      </span>
    </slot>
  </label>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  modelValue: string | number | object;
  value?: string | number | object;
  label?: string | number | object;
  name?: string | number;
  disabled?: boolean;
  size?: string | number;
  btnStyles?: string;
  labelStyles?: string;
  radioClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  size: 24,
  btnStyles:
    "group-hover:border-primary border-gray bg-gray-100 peer-checked:border-primary peer-checked:before:!bg-white",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | object | boolean): void;
}>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", props.value ? target.value : target.checked);
};

const computedSize = computed(() => props.size + "px");

const computedBtnSize = computed(() => +props.size * 0.5 + "px");

const computedBtnStyles = computed(() =>
  !props.disabled ? props.btnStyles : "peer-checked:before:!bg-gray-100"
);
</script>
