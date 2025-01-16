<template>
  <header style="z-index: 100" class="sticky top-0 z-10 h-[76px] bg-white-100">
    <div class="wrapper h-full flex items-center justify-between">
      <router-link to="/">
        <img src="/logo.svg" alt="logo" class="h-[30px] md:h-[45px]" />
      </router-link>
      <nav class="flex items-center gap-3">
        <router-link
          class="p-2 px-4"
          v-for="link of nav"
          :key="link"
          :to="link.path"
        >
          <span class="hover:!text-[#D80913] font-[400] duration-300">{{
            link.title
          }}</span>
        </router-link>
      </nav>
      <div class="flex items-center gap-4">
        <CLanguageSwitcher />
        <router-link class="md:block hidden" to="/contacts">
          <BaseButton :text="$t('contact_us')" variant="outline"></BaseButton>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { navigation } from "@/data/Header/navigation";
import CLanguageSwitcher from "@/components/CLanguageSwitcher.vue";
import BaseButton from "@/components/Base/CButton.vue";

const route = useRoute();
const nav = navigation();
</script>

<style scoped>
.router-link-active {
  color: #d61621;
}

@media screen and (max-width: 965px) {
  nav {
    display: none !important;
  }
}
</style>

