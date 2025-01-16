<template>
  <div class="min-h-[100%-50px] flex">
    <div class="w-full h-full">
      <div class="w-full h-full">
        <div class="w-full h-full">
          <Header />
          <Transition name="fade" mode="out-in">
              <slot />
          </Transition>
          <Footer />
        </div>
      </div>
      <!-- Main layout -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>
