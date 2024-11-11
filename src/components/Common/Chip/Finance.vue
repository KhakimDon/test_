<template>
  <span class="inline-flex items-center gap-1">
    <template v-if="isDisplay">
      <i
        v-if="isIncrease"
        class="icon-chevron-bold-up dark:text-success-light text-success-200 text-[7px]"
        :class="iconClass"
      ></i>
      <i v-else class="icon-chevron-bold-down text-red-light text-[7px]"></i>
      <span
        class="dark:text-red-light text-red text-sm font-medium"
        :class="[
          { 'dark:!text-success-light !text-success-200': isIncrease },
          labelClass,
        ]"
      >
        {{ label }}
      </span>
    </template>
    <template v-else>
      <span class="dark:text-gray-200 text-dark font-medium">***% (***)</span>
    </template>
  </span>
</template>
<script setup lang="ts">
interface Props {
  label: string;
  isIncrease: boolean;
  labelClass?: string;
  iconClass?: string;
  isDisplay?: boolean;
}

withDefaults(defineProps<Props>(), {
  isDisplay: true,
});
</script>
