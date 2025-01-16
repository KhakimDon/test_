<template>
  <section class="city-image relative !h-[724px] w-full">
    <div class="city-image fixed"></div>
    <div class="before">
      <span class="text-white">{{ data.sub }}</span>
      <h1 class="font-bold text-[52px] text-white">{{ data.title }}</h1>
      <p class="text-sm md:text-center pr-5 mt-5 mb-10 md:max-w-[593px] text-[#EDEDED]">
        {{ data.text }}
      </p>
      <div class="flex gap-4">
        <router-link to="/contacts"
          ><CButton
            mainClass="text-white"
            variant="outline"
            :text="$t('contact_us')"
          />
        </router-link>
        <router-link to="/about"
          ><CButton variant="primary" :text="$t('more_about_us')" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { FirstSection } from "@/data/Main";
import CButton from "@/components/Base/CButton.vue";

const data = FirstSection();
</script>


<style scoped>
@media screen and (max-width: 650px) {
  h1{
    font-size: 34px;
  }
  .before{
    align-items: flex-start !important;
    padding-left: 20px;
  }
}
.city-image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/background.png");
  background-attachment: fixed;
}
.before {
  content: "";
  z-index: 0;
  top: 0;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(65deg, black, rgba(0, 0, 0, 0.21));
}
</style>