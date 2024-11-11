<template>
  <FInput
    id="ipo-search"
    ref="target"
    v-model="modelValue"
    :placeholder="placeholder"
    v-bind="{ error }"
  >
    <template #prefix>
      <button class="icon-search text-gray-500" />
    </template>
    <template #suffix>
      <Transition mode="out-in" name="fade">
        <button
          v-if="isSearching"
          class="icon-close text-gray-500"
          @click="handleClear"
        />
      </Transition>
    </template>
  </FInput>
</template>

<script lang="ts" setup>
import { defineEmits, defineModel, ref, watch } from "vue";
import FInput from "@/components/Form/Input/FInput.vue";

interface Props {
  error?: boolean;
  placeholder: string;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

defineProps<Props>();

const emit = defineEmits<Emits>();

const modelValue = defineModel<string>();
const isSearching = ref(false);
const target = ref<HTMLInputElement | null>();

watch(
  () => modelValue.value,
  (text) => {
    isSearching.value = text?.trim().length > 0;
  }
);

function handleClear() {
  emit("update:modelValue", "");
  isSearching.value = false;
}
</script>
