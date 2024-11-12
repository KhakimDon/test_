<template>
  <div class="bg-[#EBF0F5] dark:bg-[#141414] min-h-screen flex">

    <div class="w-full h-[calc(100vh-100px)]">
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
