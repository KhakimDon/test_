<template>
  <CBreadcrumb :title="single?.organization?.title" has-chevron />
  <main
    class="container flex flex-col justify-between min-h-[calc(100vh-130px)] pb-4"
  >
    <div>
      <CSingleOfferingTop
        :has-category="true"
        :has-list="false"
        :single="single"
      />
      <CCounter v-model="buyAmount" class="mt-7" />
      <div class="w-full h-px bg-slate-100 dark:bg-gray my-5" />
      <CBuyInfo
        :amount="buyAmount"
        :commission="single?.commission_percent"
        :price="single?.price || 0"
      />

      <div
        class="bg-slate-100 dark:bg-gray border border-gray-100 dark:border-gray-700 p-2 flex-center-between rounded-lg mt-3"
        @click="open"
      >
        <span class="text-dark dark:text-white text-sm">
          {{ $t("refund_instructions") }}
        </span>
        <button
          class="icon-chevron-left text-dark dark:text-white text-lg rotate-180"
        />
      </div>
    </div>
    <CButton
      :disabled="buyAmount <= 0"
      :text="$t('pay')"
      class="w-full"
      @click="openConfirm"
    />
    <!-- MODALS -->
    <CInstructionModal v-model="isOpen" v-bind="instruction" />
    <CConfirmModal
      v-model="isConfirmOpen"
      :loading="loading"
      @close="closeConfirm"
      @submit="handleConfirmPayment"
    />
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import { useMarketStore } from "@/modules/Market/stores.ts";
import useToggle from "@/composables/useToggle";

import CBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import CSingleOfferingTop from "@/modules/Market/components/CSingleOfferingTop.vue";
import CCounter from "@/modules/Market/components/CCounter.vue";
import CBuyInfo from "@/modules/Market/components/CBuyInfo.vue";
import CButton from "@/components/Base/CButton.vue";
import CInstructionModal from "@/modules/Market/components/CInstructionModal.vue";
import CConfirmModal from "@/modules/Market/components/CConfirmModal.vue";
import { useCustomToast } from "@/composables/useCustomToast.ts";
import { useApi } from "@/composables/useApi.ts";

const { showToast } = useCustomToast();
const { t } = useI18n();
const routeId = useRoute().params?.id;
const router = useRouter();
const { open, isOpen } = useToggle();
const {
  isOpen: isConfirmOpen,
  open: openConfirm,
  close: closeConfirm,
} = useToggle();
const store = useMarketStore();

const buyAmount = ref(1);
const instruction = ref();

const single = computed(() => store.offeringSingle);
const loading = computed(() => store.buyLoading);

onMounted(() => {
  if (!store.offeringSingle?.id) {
    store.fetchOfferingSingle(routeId);
  }

  useApi()
    .$get("StaticPageDetail/refund-instruction")
    .then((res) => (instruction.value = res));
});

function handleConfirmPayment() {
  store
    .buyOfferingOrder({
      ipo: single.value?.id,
      count: parseInt(buyAmount.value),
    })
    .then(() => {
      closeConfirm();
      showToast(t("order_success"));
      router.push({ name: "OfferingsSingle", params: { id: routeId } });
    });
}
</script>
