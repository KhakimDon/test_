<template>
  <div class="grid grid-cols-9">
    <div class="relative flex col-span-5 items-center flex-col justify-between py-12">
      <div>
        <img src="/images/svg/logo.svg" alt="logo" />
      </div>
      <slot />

      <div class="text-center flex flex-col gap-3">
        <RouterLink to="/pages/privacy-policy" target="_blank" class="text-xs font-normal text-blue-100 leading-normal">
          {{ $t("privacy_policy") }}
        </RouterLink>
        <p class="text-xs leading-normal text-blue-100">{{$t('version')}} 7.1.2</p>
      </div>
    </div>
    <div
      class="col-span-4 w-full bg-dark h-screen relative flex flex-col items-center justify-between py-16"
    >
      <div class="text-white"></div>
      <div>
        <img src="/images/svg/logo-col.svg" alt="logo" />
      </div>
      <SUicLogo main-color="#fff" />
      <img src="/images/logo-outline.png" alt="logo-outline" class="absolute-center" />
      <div class="w-[432px] h-[432px] bg-blue-200 blur-[300px] absolute-x top-[-200px] opacity-60" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SUicLogo from "@/components/Common/UicLogo/SUicLogo.vue";
</script>

<style scoped></style>
