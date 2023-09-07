<template>
  <div class="flex-y-center gap-4">
    <p class="text-xs leading-5 font-normal text-dark">{{ $t("show") }}</p>
    <Select
      class="h-8 w-[58px]"
      selected-option-styles="!py-1.5 bg-white-100"
      v-bind="{ options }"
      value-key="value"
      :disabled="disabled"
      label-key="value"
      v-model="itemsCountInTable"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  WritableComputedRef,
} from "vue";
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

const inputItemsPerPage = ref<any>(10);

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
