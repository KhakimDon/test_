<template>
  <div class="bg-[#F5F6F7] min-h-screen flex">

    <div class="w-full h-full">
      <CHeader v-bind="{ activeRoute }" />

      <div class="h-full w-full p-8">
        <div class="w-full h-full">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CHeader from "@/layout/Dashboard/components/CHeader.vue";

const activeRoute = "/";
</script>
