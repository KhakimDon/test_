<template>
  <div>
    <FInput
      id="market-search-inp"
      v-model="form.values.search"
      :placeholder="$t('filter.search_placeholder')"
    >
      <template #prefix>
        <button class="icon-search text-lg text-dark dark:text-gray-100" />
      </template>
      <template #suffix>
        <button
          class="icon-horizontal-settings text-lg text-slate dark:text-gray-100"
          @click.stop="open"
        />
      </template>
    </FInput>
    <CModal v-model="isOpen" :title="$t('filter.title')" has-header>
      <!-- FILTER TRIGGER -->
      <!-- FILTER BODY-->
      <div class="flex flex-col">
        <CFilterSelect
          v-model="form.values.action"
          :options="actionOptions"
          :placeholder="$t('filter.action')"
          class="mb-3"
        />
        <CFilterSelect
          v-model="form.values.market"
          :options="marketOptions"
          :placeholder="$t('filter.market')"
        />

        <FCheckbox
          v-model="form.values.favorites"
          :label="$t('filter.favorites')"
          class="my-3"
        />

        <h3 class="text-base text-white font-medium">
          {{ $t("filter.cost") }}
        </h3>
        <CRange v-model="form.values.cost" />
        <div class="flex-center-between gap-3 mt-6">
          <CButton
            :text="$t('clear')"
            class="w-full"
            variant="gray"
            @click="$emit('clear')"
          />
          <CButton :text="$t('submit')" class="w-full" @click="handleSubmit" />
        </div>
      </div>
    </CModal>
  </div>
</template>

<script lang="ts" setup>
import { toRef } from "vue";

import useToggle from "@/composables/useToggle";
import { TForm } from "@/composables/useForm";

import type { IMarketFilter } from "@/modules/Market/types";

import FInput from "@/components/Form/Input/FInput.vue";
import CModal from "@/components/Base/CModal.vue";
import CButton from "@/components/Base/CButton.vue";
import CFilterSelect from "@/modules/Market/components/CFilterSelect.vue";
import { actionOptions, marketOptions } from "@/modules/Market/data";
import FCheckbox from "@/components/Form/FCheckbox.vue";
import CRange from "@/modules/Market/components/CRange.vue";

interface Props {
  form: TForm<IMarketFilter>;
}

interface Emits {
  (e: "clear"): void;

  (e: "submit"): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const { open, isOpen, close } = useToggle();
const form = toRef(props.form);

function handleSubmit() {
  emits("submit");
  close();
}
</script>
