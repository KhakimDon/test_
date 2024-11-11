<template>
  <CModal v-model="isOpen" title="">
    <div class="grid place-items-center text-center p-4 gap-5">
      <div
        class="w-20 h-20 grid place-items-center rounded-full bg-primary-gradient"
      >
        <i class="icon-alert text-white text-[40px] align-middle" />
      </div>
      <div class="grid gap-2 text-dark dark:text-white">
        <h3 class="text-xl font-medium">{{ $t("pay_attention") }}</h3>
        <p class="text-base leading-140">{{ $t("pay_attention_info") }}</p>
      </div>

      <div class="flex-center-between gap-4 w-full mt-3">
        <CButton
          :text="$t('cancel')"
          class="w-full"
          variant="gray"
          @click="$emit('close')"
        />
        <CButton
          :loading="loading"
          :text="$t('submit')"
          class="w-full"
          @click="$emit('submit')"
        />
      </div>
    </div>
  </CModal>
</template>

<script lang="ts" setup>
import { defineModel } from "vue";
import CModal from "@/components/Base/CModal.vue";
import CButton from "@/components/Base/CButton.vue";

interface Props {
  loading: boolean;
}

interface Emits {
  (e: "submit"): void;

  (e: "close"): void;
}

defineProps<Props>();
defineEmits<Emits>();
const isOpen = defineModel<boolean>();
</script>
