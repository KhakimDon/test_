<template>
  <div class="bg-[#F5F6F7] min-h-screen flex">

    <div class="w-full h-full">
      <div class="h-full w-full">
        <div class="w-full h-full">
          <slot />
          <Menu/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Menu from "@/components/Shared/Menu.vue";
</script>
