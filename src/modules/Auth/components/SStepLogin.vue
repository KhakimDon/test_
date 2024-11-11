<template>
  <form class="flex flex-col justify-between h-[calc(100vh-140px)] pt-2 pb-5">
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
          w
        />
      </FFormGroup>
      <FFormGroup :label="$t('login')" for-text="login">
        <FInput
          id="login"
          v-model="form.values.login"
          :error="form.$v.value.login?.$error"
          :mask-pattern="{ mask: '####################' }"
          :placeholder="$t('form.enter_login')"
        />
      </FFormGroup>
      <FFormGroup :label="$t('form.password')" for-text="password">
        <FInput
          id="password"
          v-model="form.values.password"
          :error="form.$v.value.password?.$error"
          :placeholder="$t('form.enter_password')"
          :type="isPassword ? 'password' : 'text'"
        >
          <template #suffix>
            <CEyeToggle
              :type-password="isPassword"
              class="translate-y-0.5"
              @click="isPassword = !isPassword"
            />
          </template>
        </FInput>
      </FFormGroup>
      <FFormGroup :label="$t('form.secure_password')" for-text="sec-password">
        <FInput
          id="sec-password"
          v-model="form.values.securePassword"
          :error="form.$v.value.securePassword?.$error"
          :placeholder="$t('form.enter_secure_password')"
          :type="isPassword ? 'password' : 'text'"
        >
          <template #suffix>
            <CEyeToggle
              :type-password="isPassword"
              class="translate-y-0.5"
              @click="isPassword = !isPassword"
            />
          </template>
        </FInput>
      </FFormGroup>
    </div>
    <CButton
      :disabled="isBtnDisabled"
      :text="$t('login')"
      class="w-full"
      type="button"
      v-bind="{ loading }"
      @click="submit"
    />
  </form>
</template>

<script lang="ts" setup>
import { ref, unref, watch } from "vue";

import { TForm } from "@/composables/useForm";

import CButton from "@/components/Base/CButton.vue";
import FFormGroup from "@/components/Form/FGroup.vue";
import FInput from "@/components/Form/Input/FInput.vue";
import CEyeToggle from "@/components/Form/Input/CEyeToggle.vue";
import FSelect from "@/components/Form/FSelect.vue";
import { options } from "@/data/fake";

interface Props {
  form: TForm<any>;
}

interface Emits {
  (e: "submit"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { form } = unref(props);

const loading = ref(false);
const isPassword = ref(true);
const isBtnDisabled = ref(true);

watch(
  () => form.values,
  () => {
    form.$v.value.$touch();
    isBtnDisabled.value = form.$v.value.$invalid;
  }
);

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

// CAPTCHA
// <vue-recaptcha
// ref="recaptcha"
// :sitekey="siteKey"
// class="mt-5 mb-8 mx-auto"
// @expired="expiredMethod"
// @verify="verifyMethod"
//     />
// import { VueRecaptcha } from "vue-recaptcha";
// const siteKey = import.meta.env.VITE_APP_SITE_KEY;
// function verifyMethod(response: any) {
//   captchaToken.value = response;
// }
// function expiredMethod() {
//   captchaToken.value = null;
// }
</script>
