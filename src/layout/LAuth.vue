<template>
  <div class="grid grid-cols-2">
    <div class="relative flex items-center flex-col justify-between py-12">
      <div>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <slot />

      <div class="text-center">
        <RouterLink to="/pages/privacy-policy" target="_blank">
          {{ $t("privacy_policy") }}
        </RouterLink>
      </div>
    </div>
    <div
      class="w-full h-screen bg-black relative flex flex-col items-center justify-between py-16"
    >
      <div class="text-white">Your logo</div>
      <div class="text-white">Your Text/Image</div>
      <SUicLogo main-color="#fff" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SUicLogo from "@/components/Common/UicLogo/SUicLogo.vue";
</script>

<style scoped></style>
