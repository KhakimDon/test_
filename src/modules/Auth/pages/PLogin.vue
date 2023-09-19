<template>
  <div class="w-[335px]">
    <Transition :name="transitionName" mode="out-in">
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
import SStepLogin from "@/modules/Auth/components/SStepLogin.vue";
import { ref, watch } from "vue";
import SStepConfirm from "@/modules/Auth/components/SStepConfirm.vue";

const router = useRouter();

const phone = ref("+998996753211");

const step = ref(2);

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

const transitionName = ref("slide-right");
watch(
  () => step.value,
  (newValue, oldValue) => {
    if (newValue < oldValue) {
      transitionName.value = "slide-left";
    } else {
      transitionName.value = "slide-right";
    }
  }
);
</script>
