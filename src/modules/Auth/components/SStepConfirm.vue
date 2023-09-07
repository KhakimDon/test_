<template>
  <div>
    <button class="flex-y-center gap-2 group" @click="$emit('back')">
      <i
        class="icon-chevron text-2xl block text-dark rotate-180 transition group-hover:-translate-x-1"
      />
      <span class="text-2xl leading-130 font-semibold text-dark">
        {{ $t("enter_code") }}
      </span>
    </button>
    <p class="text-sm leading-130 font-normal text-blue-100 mt-4">
      {{ $t("we_send_code") }}
    </p>
    <button
      class="flex-y-center px-2 py-1.5 gap-2.5 rounded bg-white-300 group mt-2"
    >
      <span class="text-sm leading-130 font-normal text-dark">
        {{ formatPhoneNumber(phone) }}
      </span>
      <i
        class="icon-pen-square text-gray text-base transition-300 group-hover:text-dark"
      />
    </button>

    <SFormGroup :label="$t('confirm_code')" class="my-8">
      <COtp v-model="form.values.code" :error="form.$v.value.code?.$error" />
    </SFormGroup>

    <SButton
      class="w-full"
      :text="$t('confirm')"
      @click="submit"
      v-bind="{ disabled }"
    />
  </div>
</template>

<script setup lang="ts">
import { formatPhoneNumber } from "@/utils";
import SFormGroup from "@/components/Form/FGroup.vue";
import COtp from "@/components/Form/FOtp.vue";
import { ref, watch } from "vue";
import { useForm } from "@/composables/useForm";
import { minLength, required } from "@vuelidate/validators";
import SButton from "@/components/Common/CButton.vue";
import { useCustomToast } from "@/composables/useCustomToast";
import { useI18n } from "vue-i18n";

interface Props {
  phone?: string;
}
defineProps<Props>();

const emit = defineEmits(["submit", "back"]);

const { showToast } = useCustomToast();

const { t } = useI18n();

const disabled = ref(true);

const form = useForm(
  {
    code: "",
  },
  {
    code: { required, minLength: minLength(6) },
  }
);

function submit() {
  form.$v.value.$touch();

  if (!form.$v.value.$invalid) {
    showToast(t("successfully_entered"), "success");
    emit("submit");
  } else {
    showToast(t("fill_code"), "error");
  }
}

watch(
  () => form.values.code,
  (val: string) => {
    disabled.value = val?.length !== 6;
  }
);
</script>
