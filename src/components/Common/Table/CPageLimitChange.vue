<template>
  <div class="flex-y-center gap-2">
    <p class="text-xs leading-20 font-normal text-dark">{{ $t("show") }}</p>
    <Select
      v-model="itemsCountInTable"
      :disabled="disabled"
      label-key="value"
      selected-option-styles="!py-2 !px-2.5 bg-white-100"
      selected-styles="!text-gray-700 mr-1"
      v-bind="{ options }"
      value-key="value"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, WritableComputedRef } from "vue";
import Select from "@/components/Form/FSelect.vue";

interface Props {
  itemsPerPage: number;
  itemsPerPageDropdownEnabled: {
    type: boolean;
    required: false;
    default: true;
  };
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 10,
});
const emit = defineEmits(["update:itemsPerPage"]);

const inputItemsPerPage = ref<number>(10);

onMounted(() => {
  inputItemsPerPage.value = props.itemsPerPage;
});

const itemsCountInTable: WritableComputedRef<number> = computed({
  get(): number {
    return props.itemsPerPage;
  },
  set(value: number): void {
    emit("update:itemsPerPage", value);
  },
});

const options = [
  {
    value: 10,
  },
  {
    value: 15,
  },
  {
    value: 20,
  },

  {
    value: 50,
  },
];
</script>
