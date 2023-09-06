<template>
  <div class="w-[335px]">
    <p class="text-3xl leading-130 font-semibold text-dark text-center">
      {{ $t("enter_system") }}
    </p>

    <div class="mt-7">
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
        class="my-7 mx-auto"
        ref="recaptcha"
        size="100px"
        :sitekey="siteKey"
        @verify="verifyMethod"
        @expired="expiredMethod"
      />
      <SButton
        class="w-full"
        :text="$t('submit')"
        @click="submit"
        v-bind="{ loading }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SButton from "@/components/Common/Button/SButton.vue";
import { ref } from "vue";
import { VueRecaptcha } from "vue-recaptcha";
import SFormGroup from "@/components/Form/Group/Group.vue";
import SInput from "@/components/Form/Input/Input.vue";
import { useForm } from "@/composables/useForm";
import SEyeToggle from "@/components/Form/EyeToggle/EyeToggle.vue";
import { required } from "@vuelidate/validators";
import { useToast } from "vue-toastification";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const siteKey = import.meta.env.VITE_APP_SITE_KEY;
const router = useRouter();
const captchaToken = ref();
const loading = ref(false);
const isPassword = ref(true);
const toast = useToast();
const { t } = useI18n();
function verifyMethod(response: any) {
  captchaToken.value = response;
}
function expiredMethod() {
  captchaToken.value = null;
}

const form = useForm(
  {
    name: "",
    password: "",
  },
  {
    name: {
      required,
    },
    password: {
      required,
    },
  }
);
function submit() {
  form.$v.value.$touch();

  if (!form.$v.value.$invalid) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      form.values.name = "";
      form.values.password = "";
      form.$v.value.$reset();
      toast.success(t("success_login"));
      router.push({ name: "Index" });
    }, 1000);
  }
}
</script>

<style scoped></style>
