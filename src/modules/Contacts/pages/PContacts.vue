<template>
  <section class="h-[80vh] main-wrapper w-full">
    <div
      class="h-full flex items-center justify-center w-full"
      style="background: linear-gradient(65deg, black, rgba(0, 0, 0, 0.21))"
    >
      <div
        class="contact-background formData wrapper w-full flex gap-[64px] px-[64px] border border-white/20 rounded-[32px]"
      >
        <div
          class="flex-1 forms-content my-[100px] flex flex-col items-start justify-center"
        >
          <h1 class="text-white md:text-[32px] text-[28px]">
            {{ contactData.title }}
          </h1>
          <p class="text-white/60 text-[14px] md:text-[16px]">
            {{ contactData.sub }}
          </p>
          <div class="flex flex-col gap-2 mt-[32px]">
            <div
              class="w-full flex gap-[8px] rounded-[16px] border border-white/20 p-[12px]"
            >
              <div
                class="bg-[#2C1B27] flex items-center justify-center rounded-[8px] w-[42px] h-[42px] p-[9px]"
              >
                <img src="/vector-3.svg" alt="svg" />
              </div>
              <div class="flex flex-col gap-[3px]">
                <p class="text-sm text-white/60">{{ contactData.address }}</p>
                <p class="text-white text-[16px]">
                  {{ contactData.address_item }}
                </p>
              </div>
            </div>
            <div
              class="w-full flex gap-[8px] rounded-[16px] border border-white/20 p-[12px]"
            >
              <div
                class="bg-[#2C1B27] flex items-center justify-center rounded-[8px] w-[42px] h-[42px] p-[9px]"
              >
                <img src="/vector-2.svg" alt="svg" />
              </div>
              <div class="flex flex-col gap-[3px]">
                <p class="text-sm text-white/60">{{ contactData.phone }}</p>
                <p class="text-white text-[16px]">
                  {{ contactData.phone_item }}
                </p>
              </div>
            </div>
            <div
              class="w-full flex gap-[8px] rounded-[16px] border border-white/20 p-[12px]"
            >
              <div
                class="bg-[#2C1B27] flex items-center justify-center rounded-[8px] w-[42px] h-[42px] p-[9px]"
              >
                <img src="/vector-1.svg" alt="svg" />
              </div>
              <div class="flex flex-col gap-[3px]">
                <p class="text-sm text-white/60">{{ contactData.mail }}</p>
                <p class="text-white text-[16px]">
                  {{ contactData.mail_item }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 forms relative">
          <div
            class="form-size forms-content absolute bg-white rounded-[32px] py-[32px] px-[32px]"
          >
            <h1 class="text-[22px] md:text-[32px] font-bold mb-[8px]">
              {{ $t("contact.question") }}
            </h1>
            <p class="text-[16px] mb-[20px] text-[#697583]">
              {{ $t("contact.quesiton_sub") }}
            </p>
            <form class="flex flex-col items-end gap-[18px]">
              <FGroup
                labelClass="text-black"
                :label="`${$t('contact.your_name')}`"
                forText="email"
              >
                <FInput class="bg-[#F2F2F2]" />
              </FGroup>
              <FGroup
                labelClass="text-black"
                :label="`${$t('contact.your_email')}`"
                forText="email"
              >
                <FInput class="bg-[#F2F2F2]" />
              </FGroup>
              <FGroup
                labelClass="text-black"
                :label="`${$t('contact.your_phone')}`"
                forText="email"
              >
                <FInput class="bg-[#F2F2F2]" />
              </FGroup>
              <FGroup
                labelClass="text-black"
                :label="$t('contact.your_message')"
                forText="email"
              >
                <FTextarea class="bg-[#F2F2F2]" />
              </FGroup>
              <CButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FTextarea from "~/components/Form/Input/FTextarea.vue";
import FInput from "~/components/Form/Input/FInput.vue";
import FGroup from "~/components/Form/FGroup.vue";
import CButton from "~/components/Base/CButton.vue";
import { Contact } from "~/data/info";
import { computed } from "vue";
import { useForm } from "@/composables/useForm";
import { required } from "@vuelidate/validators";

const contactData = computed(() => Contact());
</script>

<style scoped>
.form-size {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: calc(100% + 150px);
  width: calc(100%);
}
section {
  background-image: url("/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom center;
}
.contact-background {
  backdrop-filter: blur(10px);
}
@media screen and (max-width: 1200px) {
  .formData {
    flex-direction: column !important;
    align-items: center;
    width: 100%;
  }
  .forms-content {
    margin: 0px;
  }
  .forms {
    height: max-content !important;
    width: 700px !important;
  }
  .main-wrapper {
    height: initial !important;
  }

  .contact-background {
    backdrop-filter: blur(2px);
    padding: 50px 0px;
  }
  .forms-content {
    transform: none !important;
    position: initial !important;
  }
}
@media screen and (max-width: 750px) {
  .forms {
    height: max-content !important;
    width: 100% !important;
  }
  .contact-background {
    backdrop-filter: blur(0px);
    border: none !important;
    padding: 50px 0px;
  }
}
</style>