<template>
  <section>
    <CBreadcrumb title="breadcrumb.register" />
    <form
      class="flex flex-col justify-between h-[calc(100vh-140px)] pt-2 pb-5"
      @submit.prevent="submit"
    >
      <div class="flex flex-col gap-3">
        <FFormGroup :label="$t('form.broker_number')">
          <FSelect
            v-model="form.values.brokerAccount"
            :error="form.$v.value.brokerAccount?.$error"
            :options="options"
            :placeholder="$t('form.select_broker_account')"
            :title="$t('form.broker_number')"
            label-key="label"
            value-key="value"
          />
        </FFormGroup>
        <FFormGroup :label="$t('form.full_name')" for-text="fullName">
          <FInput
            id="fullName"
            v-model="form.values.name"
            :error="form.$v.value.name?.$error"
            :placeholder="$t('form.enter_full_name')"
          />
        </FFormGroup>
        <FFormGroup :label="$t('form.birthdate')" for-text="fullName">
          <FInput
            id="fullName"
            v-model="form.values.birthdate"
            :error="form.$v.value.birthdate?.$error"
            :placeholder="$t('form.enter_birthdate')"
            max="2010-12-12"
            type="date"
          />
        </FFormGroup>
        <FFormGroup :label="$t('form.passport')" for-text="passport">
          <FInput
            id="passport"
            v-model="form.values.passport"
            :error="form.$v.value.passport?.$error"
            :mask-pattern="{ mask: '@@ #######' }"
            placeholder="AA 000000"
          />
        </FFormGroup>
        <FFormGroup :label="$t('form.email')" for-text="email">
          <FInput
            id="email"
            v-model="form.values.email"
            :error="form.$v.value.email?.$error"
            :placeholder="$t('form.enter_email')"
            type="email"
          />
        </FFormGroup>
      </div>
      <CButton
        :disabled="isBtnDisabled"
        :text="$t('login')"
        class="w-full"
        type="submit"
        v-bind="{ loading }"
      />
    </form>
  </section>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { required } from "@vuelidate/validators";

import { useForm } from "@/composables/useForm";

import { options } from "@/data/fake";

import CButton from "@/components/Base/CButton.vue";
import FFormGroup from "@/components/Form/FGroup.vue";
import FInput from "@/components/Form/Input/FInput.vue";
import FSelect from "@/components/Form/FSelect.vue";
import CBreadcrumb from "@/components/Common/CBreadcrumb.vue";

interface Emits {
  (e: "submit"): void;
}

const emit = defineEmits<Emits>();

const form = useForm(
  {
    brokerAccount: "",
    name: "",
    birthdate: "",
    passport: "",
    email: "",
  },
  {
    brokerAccount: {
      required,
    },
    name: {
      required,
    },
    birthdate: {
      required,
    },
    passport: {
      required,
    },
    email: {
      required,
      minLength: 5,
      maxLength: 320,
    },
  }
);
const loading = ref(false);
const isBtnDisabled = ref(true);

function submit() {
  form.$v.value.$touch();
  if (!form.$v.value.$invalid) {
    loading.value = true;
    setTimeout(() => {
      emit("submit");
      loading.value = false;
    }, 1000);
  }
}

watch(
  () => form.values,
  () => {
    form.$v.value.$touch();
    isBtnDisabled.value = form.$v.value.$invalid;
  },
  { deep: true }
);

watch(
  () => form.values.passport,
  () => {
    form.values.passport = form.values.passport.toUpperCase();
  }
);
</script>
