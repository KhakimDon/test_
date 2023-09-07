<template>
  <div class="w-[335px]">
    <Transition name="fade" mode="out-in">
      <div :key="step">
        <SStepLogin v-if="step === 1" v-bind="{ form }" @submit="step = 2" />
        <SStepConfirm
          v-if="step === 2"
          v-bind="{ phone }"
          @back="step = 1"
          @submit="toHome"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "@/composables/useForm";
import { required } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import SStepLogin from "@/pages/Auth/components/SStepLogin.vue";
import { ref } from "vue";
import SStepConfirm from "@/pages/Auth/components/SStepConfirm.vue";

const router = useRouter();

const phone = ref("+998996753211");

const step = ref(1);

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

function toHome() {
  router.push({ name: "Index" });
}
</script>
