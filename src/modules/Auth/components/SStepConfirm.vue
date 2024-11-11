<template>
  <div
    class="py-4 flex flex-col gap-4 justify-between h-screen max-h-[calc(100vh-130px)]"
  >
    <div class="grid place-items-center gap-7">
      <div class="max-w-56 h-52 w-full">
        <img
          alt="coins"
          class="size-full object-center object-fill rounded-2xl"
          src="/images/fake/coins.svg"
        />
      </div>

      <div class="text-center text-white">
        <h3 class="text-3xl font-semibold my-3">
          {{ $t("one_time_payment.title") }}
        </h3>
        <i18n-t
          class="text-gray-100 text-sm"
          keypath="one_time_payment.info"
          scope="global"
          tag="p"
        >
          <template #fee>
            <span class="text-white">$2.0</span>
          </template>
        </i18n-t>
      </div>
    </div>

    <div class="flex-center-between gap-2">
      <CButton
        :text="$t('navigation.back')"
        class="w-full"
        variant="secondary"
        @click="$emit('cancel')"
      />
      <CButton
        :text="$t('navigation.next')"
        class="w-full"
        @click="$emit('submit')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CButton from "@/components/Base/CButton.vue";

interface Emits {
  (e: "submit"): void;

  (e: "cancel"): void;
}

defineEmits<Emits>();
</script>
