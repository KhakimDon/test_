<template>
  <div
    :class="$attrs.class"
    class="flex-y-center gap-3 overflow-x-auto w-full pr-10 no-scrollbar"
  >
    <FSelect
      v-model="form.values.time"
      :options="timeOptions"
      :placeholder="$t('filter.time_options.all')"
      class="flex-shrink-0 w-fit"
      label-key="label"
      value-key="value"
    />
    <FSelect
      v-model="form.values.status"
      :options="statusOptions"
      :placeholder="$t('filter.status_options.all')"
      class="flex-shrink-0 w-fit"
      label-key="label"
      value-key="value"
    >
      <template #footer>
        <div class="flex gap-2">
          <CButton
            :text="$t('clear')"
            class="w-full"
            variant="gray"
            @click="$emit('clear', 'status')"
          />
          <CButton
            :text="$t('submit')"
            class="w-full"
            @click="$emit('submit')"
          />
        </div>
      </template>
    </FSelect>
    <FSelect
      v-model="form.values.volume"
      :options="volumeOptions"
      :placeholder="$t('filter.volume_options.all')"
      class="flex-shrink-0 w-fit"
      label-key="label"
      value-key="value"
    >
      <template #footer>
        <div class="flex gap-2">
          <CButton
            :text="$t('clear')"
            class="w-full"
            variant="gray"
            @click="$emit('clear', 'volume')"
          />
          <CButton
            :text="$t('submit')"
            class="w-full"
            @click="$emit('submit')"
          />
        </div>
      </template>
    </FSelect>
  </div>
</template>

<script lang="ts" setup>
import FSelect from "@/components/Form/FSelect.vue";
import { TForm } from "@/composables/useForm";
import { ISelectFilter } from "@/modules/Market/types";
import { toRef } from "vue";
import {
  statusOptions,
  timeOptions,
  volumeOptions,
} from "@/modules/Market/data";
import CButton from "@/components/Base/CButton.vue";

interface Props {
  form: TForm<ISelectFilter>;
}

interface Emits {
  (e: "clear", key: string): void;

  (e: "submit"): void;
}

const props = defineProps<Props>();
defineEmits<Emits>();
const form = toRef(props.form);
</script>
