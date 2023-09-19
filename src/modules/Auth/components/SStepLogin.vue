<template>
  <div class="w-[335px]">
    <p class="text-3xl leading-130 font-semibold text-dark text-center">
      {{ $t("enter_system") }}
    </p>

    <div class="mt-8">
      <SFormGroup class="mb-4" :label="$t('login')">
        <SInput
          :error="form.$v.value.name.$error"
          v-model="form.values.name"
          :placeholder="$t('enter_login')"
        />
      </SFormGroup>
      <SFormGroup :label="$t('password')">
        <SInput
          v-model="form.values.password"
          :error="form.$v.value.password.$error"
          :placeholder="$t('enter_password')"
          :type="isPassword ? 'password' : 'text'"
        >
          <template #suffix>
            <SEyeToggle
              class="translate-y-0.5"
              :type-password="isPassword"
              @click="isPassword = !isPassword"
              hover-color="#333"
            />
          </template>
        </SInput>
      </SFormGroup>
      <vue-recaptcha
        class="mt-5 mb-8 mx-auto"
        ref="recaptcha"
        :sitekey="siteKey"
        @verify="verifyMethod"
        @expired="expiredMethod"
      />
      <SButton
        class="w-full"
        :text="$t('login')"
        @click="submit"
        v-bind="{ loading }"
        :disabled="!captchaToken"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SButton from "@/components/Common/CButton.vue";
import { ref, unref } from "vue";
import { VueRecaptcha } from "vue-recaptcha";
import SFormGroup from "@/components/Form/FGroup.vue";
import SInput from "@/components/Form/Input/FInput.vue";
import SEyeToggle from "@/components/Form/Input/CEyeToggle.vue";
import { useI18n } from "vue-i18n";
import { useCustomToast } from "@/composables/useCustomToast";
import { TForm } from "@/composables/useForm";

interface Props {
  form: TForm<any>;
}
const props = defineProps<Props>();
const emit = defineEmits(["submit"]);

const { form } = unref(props);

const siteKey = import.meta.env.VITE_APP_SITE_KEY;
const { t } = useI18n();
const { showToast } = useCustomToast();

const captchaToken = ref();
const loading = ref(false);
const isPassword = ref(true);
function verifyMethod(response: any) {
  captchaToken.value = response;
}
function expiredMethod() {
  captchaToken.value = null;
}

function submit() {
  form.$v.value.$touch();
  if (captchaToken?.value) {
    if (!form.$v.value.$invalid) {
      loading.value = true;
      setTimeout(() => {
        emit("submit");
        loading.value = false;
      }, 1000);
    }
  } else {
    showToast(t("check_captcha"), "error");
  }
}
</script>
