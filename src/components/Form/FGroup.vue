<template>
  <div :class="$attrs.class" class="flex flex-col gap-3 w-full">
    <div class="flex-center-between w-full mb-[-5px]">
      <Label :class="labelClass" class="label-class" v-bind="{ for: forText, label }" />
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

<style scoped>
.label-class{
  color: black;
  font-weight: medium;
  font-size: 16px;
}
</style>