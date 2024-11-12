<template>
  <div class="bg-[#F5F6F7] min-h-screen flex">

    <div class="w-full h-[calc(100vh-36px)] ">
      <div class="h-full w-full">
        <div class="w-full h-full">
<!--          hello -->
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
