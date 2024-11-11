<template>
  <Teleport to="body">
    <vue-bottom-sheet
      overlay-color="#111217D4"
      ref="myBottomSheet"
      @closed="emit('close')"
    >
      <template #default>
        <div class="flex justify-end px-4">
          <button @click="emit('close')">
            <i class="icon-close dark:text-white text-[#141414] text-2xl"></i>
          </button>
        </div>
        <div class="flex justify-center pb-[31px]">
          <CLogoGoInvest :darkmode="isDark" class="h-[48px] w-[81px]" />
        </div>
        <h3
          class="font-bold text-[21px] font-helvetica text-center leading-[28px] rounded-t-2xl dark:text-white text-dark px-[25px]"
        >
          {{ title }}
        </h3>

        <div
          :class="bodyClass"
          class="min-h-[210px] w-[100%] pb-3 overflow-y-scroll overflow-x-hidden"
        >
          <div class="container">
            <slot></slot>
          </div>
        </div>
      </template>
    </vue-bottom-sheet>
  </Teleport>
</template>
<script lang="ts" setup>
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import "@webzlodimir/vue-bottom-sheet/dist/style.css";
import { computed, ref, watch } from "vue";
import CLogoGoInvest from "@/components/Logo/CLogoGoInvest.vue";
import { useThemeMode } from "@/composables/useThemeMode";
const myBottomSheet = ref<InstanceType<typeof VueBottomSheet>>();
const { theme } = useThemeMode();
const isDark = computed(() => theme.value === "dark");
interface Props {
  show?: boolean;
  title?: string;
  bodyClass?: string;
  showTopLine?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
watch(
  () => props.show,
  (val: boolean) => {
    if (val) {
      myBottomSheet.value.open();
    } else {
      myBottomSheet.value.close();
    }
  }
);
</script>
<style scoped>
.bottom-sheet__content {
  background: #ebf0f5 !important;
}

.dark .bottom-sheet__content {
  background: #141414 !important;
}
</style>
