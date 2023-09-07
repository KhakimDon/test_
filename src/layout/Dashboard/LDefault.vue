<template>
  <div class="bg-[#F5F6F7] min-h-screen flex">
    <SSidebar />
    <div class="w-full h-full">
      <LHeader v-bind="{ profileItems, activeRoute, user }" />
      <div class="h-full w-full p-8">
        <div class="w-full h-full">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SSidebar from "@/layout/Dashboard/components/CSidebar.vue";
import LHeader from "@/layout/Dashboard/components/CHeader.vue";

const activeRoute = "/";
</script>
