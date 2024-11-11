<template>
  <div :class="$attrs.class" class="flex flex-col gap-3 w-full">
    <div class="flex-center-between w-full">
      <Label :class="labelClass" v-bind="{ for: forText, label }" />
      <slot name="labelOpposite" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Label from "~/components/Form/FLabel.vue";

interface Props {
  label: string;
  isRightLabel?: boolean;
  rightLabel?: boolean;
  labelClass?: string;
  tooltip?: boolean;
  tooltipText?: string;
  forText?: string;
}

withDefaults(defineProps<Props>(), {
  label: "",
  rightLabel: false,
});
</script>
