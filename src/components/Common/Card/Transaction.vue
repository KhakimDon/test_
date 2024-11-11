<template>
  <div
    :class="$attrs.class"
    :to="{ name: 'MarketSingle', params: { id } }"
    class="flex-center-between gap-x-2 card"
    @click.prevent="selectData(item)"
  >
    <!--    EX rounter link-->

    <div class="container !pr-0 !w-auto">
      <div
        v-if="variant != 'transaction'"
        class="rounded-full size-9 flex-center bg-white-400 dark:bg-gray border-gray-100/[12%] border"
      >
        <wallet-arrow-up-white />
      </div>

      <div
        v-if="variant == 'transaction'"
        class="rounded-full size-9 flex-center bg-white-400 dark:bg-gray border-gray-100/[12%] border"
      >
        <wallet-arrow-down-light />
      </div>
    </div>

    <div
      class="border-b border-[#D7DBE0] dark:border-[#343540] dark:bg-[#141414] w-full h-full py-2"
    >
      <div class="container flex-center-between !pl-0">
        <!-- LEFT -->
        <div class="flex flex-col gap-1 flex-1">
          <div class="flex-y-center gap-1">
            <h3
              class="text-sm font-medium flex gap-1 items-center dark:text-white text-dark line-clamp-1 max-w-xs uppercase"
            >
              <payment-system-logos logo="Humo" />
              <div>
                <span class="text-dark font-[500] dark:text-white">****</span
                >&nbsp;<span v-if="item?.card_number">
                  {{
                    item?.card_number
                      .toString()
                      .substr(
                        item?.card_number.toString().length - 4,
                        item?.card_number.toString().length
                      )
                  }}</span
                >
              </div>
            </h3>
          </div>
          <div class="flex flex-row items-center font-[400] text-xs gap-1">
            <span v-if="item?.status == 'success'" class="text-[#49B97D]"
              >Успешно</span
            >
            <span v-else class="text-[#FF493D]">Отказано</span>
          </div>
        </div>
        <!-- RIGHT -->
        <div class="flex flex-col gap-1 text-right">
          <h3 class="text-dark dark:text-white text-xs font-normal leading-130">
            {{ dayjs(item?.create_at).format("DD.MM.YYYY") }}
          </h3>
          <div class="flex-y-center gap-1 justify-end">
            <p class="text-[14px] font-[700] dark:text-white">
              {{ formatter.format(item?.amount) }}
              <span class="text-[12px] font-[400]">UZS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineEmits } from "vue";
import { formatDate, formatMoneyDecimal } from "@/utils";
import { useI18n } from "vue-i18n";
import { ITransactionCardProps } from "@/types/components";
import dayjs from "dayjs";
import WalletArrowUpWhite from "@/components/Icon/wallet-arrow-up-white.vue";
import WalletArrowDownLight from "@/components/Icon/wallet-arrow-down-light.vue";
import PaymentSystemLogos from "@/components/Icon/paymentSystemLogos.vue";

interface Props {
  item: ITransactionCardProps;
  id: string | number;
  variant: string;
}

const formatter = new Intl.NumberFormat("fr-FR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
defineProps<Props>();
const { t } = useI18n();
const emit = defineEmits<{
  (e: "handleClick", value: Props): void;
}>();

const selectData = (item: Props) => {
  emit("handleClick", item);
};
</script>
