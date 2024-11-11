<template>
  <div
    class="dark:bg-gray bg-white rounded-2xl pt-6 px-7 pb-4 overflow-hidden relative"
  >
    <div class="dark:text-white text-dark text-center">
      <h2 class="text-xl font-bold leading-130 mb-1">
        {{ $t("open") }}
      </h2>
      <p class="text-xs leading-130">
        {{ $t("open_title") }}
      </p>
    </div>
    <div class="open_account_gradient absolute bottom-0 left-0 w-full h-1/2" />
    <img
      alt="Add account"
      class="w-[294px] mx-auto h-[229px] -mb-16 -mt-3"
      src="/images/add-account.png"
    />
    <div class="flex gap-3 justify-between">
      <!--      <RouterLink :to="{ name: 'Register' }" class="w-full">-->
      <Button
        @click="openBottomSheet()"
        :text="$t('add_account.open')"
        class="w-full"
      />
      <CRegisterBottomSheet
        :show="showRegisterBottomSheet"
        :title="$t('submit_to_open')"
        @close="closeBottomSheet"
      >
        <div
          class="w-full font-helvetica border-[#D1D4E5] dark:border-[#343540] border pl-3 py-3 rounded-lg mt-5"
        >
          <div class="pr-3 border-b border-[#D1D4E5] dark:border-[#343540]">
            <span
              class="font-normal text-xs text-[#2C2D33] dark:text-[#8F96A8]"
            >
              {{ $t("account.full_name") }}</span
            >
            <h3 class="font-medium text-sm font-helvetica pb-2 dark:text-white">
              BAXTIYOROV SHOHRUX BAXTIYOROVICH
            </h3>
          </div>
          <div class="pr-3 border-b border-[#D1D4E5] dark:border-[#343540]">
            <span
              class="font-normal text-xs text-[#2C2D33] dark:text-[#8F96A8]"
            >
              {{ $t("account.passport") }}
            </span>
            <h3 class="font-medium text-sm font-helvetica pb-2 dark:text-white">
              AC 2560059
            </h3>
          </div>
          <div class="pr-3 border-b dark:border-[#343540] border-[#D1D4E5]">
            <span
              class="font-normal text-xs text-[#2C2D33] dark:text-[#8F96A8]"
            >
              {{ $t("account.passport_code") }}
            </span>
            <h3 class="font-medium text-sm font-helvetica pb-2 dark:text-white">
              49238052378902632
            </h3>
          </div>
          <div class="pr-3 border-b dark:border-[#343540] border-[#D1D4E5]">
            <span
              class="font-normal text-xs text-[#2C2D33] dark:text-[#8F96A8]"
            >
              {{ $t("account.birthday") }}
            </span>
            <h3 class="font-medium text-sm font-helvetica pb-2 dark:text-white">
              15.01.2001
            </h3>
          </div>
          <div class="pr-3">
            <span
              class="font-normal text-xs text-[#2C2D33] dark:text-[#8F96A8]"
            >
              {{ $t("account.address") }}
            </span>
            <h3 class="font-medium text-sm font-helvetica pb-2 dark:text-white">
              Мирзо Улуғбек тумани, Мирзо Улуғбек кўчаси, 122/1
            </h3>
          </div>
        </div>
        <p
          class="mt-[32px] dark:text-white text-center mb-[20px] text-xs text-[#141414]"
          v-html="$t('confirm_privacy')"
        ></p>
        <CButton
          :text="$t('confirm_btn')"
          @click="closeBottomSheet()"
          class="w-full mb-2"
        >
        </CButton>
      </CRegisterBottomSheet>
      <!--      </RouterLink>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/Base/CButton.vue";
import CRegisterBottomSheet from "@/modules/Main/components/CRegisterBottomSheet.vue";
import { ref } from "vue";
import CButton from "@/components/Base/CButton.vue";

const showRegisterBottomSheet = ref(false);
const openBottomSheet = () => {
  showRegisterBottomSheet.value = true;
};

const closeBottomSheet = () => {
  showRegisterBottomSheet.value = false;
};
</script>

<style scoped>
.open_account_gradient {
  background: linear-gradient(180deg, #ffffff00, #ffffff);
}
.dark .open_account_gradient {
  background: linear-gradient(180deg, #34354000, #343540);
}
</style>
