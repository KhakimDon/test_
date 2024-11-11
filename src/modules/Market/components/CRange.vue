<template>
  <div class="flex-center-between gap-x-3">
    <FGroup
      :label="$t('filter.from')"
      :label-class="'absolute left-4 ' + minLabelClass"
      class="relative"
    >
      <FInput
        v-model="modelValue.min"
        :input-class="
          !isMinLabelFocused && !String(modelValue.min)?.length
            ? 'h-full'
            : '!h-fit'
        "
        :mask-pattern="maskOptions"
        class="!pt-0 !pb-1 !items-end"
        @blur="isMinLabelFocused = false"
        @focus="isMinLabelFocused = true"
      />
    </FGroup>

    <FGroup
      :label="$t('filter.to')"
      :label-class="'absolute left-4 ' + maxLabelClass"
      class="relative"
    >
      <FInput
        v-model="modelValue.max"
        :input-class="
          !isMaxLabelFocused && !String(modelValue.max)?.length
            ? 'h-full'
            : '!h-fit'
        "
        :mask-pattern="maskOptions"
        class="!pt-0 !pb-1 !items-end"
        @blur="isMaxLabelFocused = false"
        @focus="isMaxLabelFocused = true"
      />
    </FGroup>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineModel, ref } from "vue";
import FInput from "@/components/Form/Input/FInput.vue";
import FGroup from "@/components/Form/FGroup.vue";
import { formatMoneyDecimal } from "@/utils";
import { useI18n } from "vue-i18n";

type TModel = {
  max: string | number;
  min: string | number;
};

const modelValue = defineModel<TModel>({
  min: "",
  max: "",
});

const { t } = useI18n();

const isMinLabelFocused = ref(false);
const isMaxLabelFocused = ref(false);

const minLabelClass = computed(() => {
  if (String(modelValue.value.min)?.length > 0 || isMinLabelFocused.value) {
    return "translate-y-6 z-50 text-xs transition-200";
  } else {
    return "translate-y-8 z-50  transition-200";
  }
});
const maxLabelClass = computed(() => {
  if (String(modelValue.value.max)?.length > 0 || isMaxLabelFocused.value) {
    return "translate-y-6 z-50 text-xs transition-200";
  } else {
    return "translate-y-8 z-50  transition-200";
  }
});

const maskOptions = {
  mask: "##############",
  postProcess: (value: string) => {
    return formatMoneyDecimal(value) + " " + t("sum");
  },
};
</script>
