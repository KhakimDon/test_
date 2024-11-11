<template>
  <Teleport to="body">
    <vue-bottom-sheet ref="myBottomSheet" @closed="emit('close')">
      <template #default>
        <div class="flex justify-between p-4">
          <div />
          <h3
            class="font-bold text-base rounded-t-2xl dark:text-white text-dark"
          >
            {{ title }}
          </h3>
          <button @click="emit('close')">
            <i class="icon-close dark:text-white text-dark-500 text-xl"></i>
          </button>
        </div>

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
import { ref, watch } from "vue";
const myBottomSheet = ref<InstanceType<typeof VueBottomSheet>>();

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
<style>
.bottom-sheet__content {
  background: #ebf0f5 !important;
}

.dark .bottom-sheet__content {
  background: #141414 !important;
}
</style>
