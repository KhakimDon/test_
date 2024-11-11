<template>
  <div class="max-w-phone w-full">
    <CBreadcrumb :title="$t('breadcrumb.login')" />
    <CModal v-model="isOpen" has-header title="">
      <template #trigger>
        <SStepLogin v-bind="{ form }" @submit="open" />
      </template>

      <SStepConfirm @cancel="close" @submit="handleSubmit" />
    </CModal>
  </div>
</template>

<script lang="ts" setup>
import { required } from "@vuelidate/validators";

import { useForm } from "@/composables/useForm";
import useToggle from "@/composables/useToggle";

import SStepLogin from "@/modules/Auth/components/SStepLogin.vue";
import CBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import CModal from "@/components/Base/CModal.vue";
import SStepConfirm from "@/modules/Auth/components/SStepConfirm.vue";

const { isOpen, open, close } = useToggle();
const form = useForm(
  {
    brokerAccount: "",
    password: "",
    securePassword: "",
    login: "",
  },
  {
    brokerAccount: {
      required,
    },
    password: {
      required,
      minLength: 8,
    },
    securePassword: {
      required,
    },
    login: {
      required,
    },
  }
);

function handleSubmit() {
  console.log("submitted");
  close();
}
</script>
