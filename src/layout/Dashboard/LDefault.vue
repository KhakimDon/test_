<template>
  <div class="bg-[#EBF0F5] dark:bg-[#141414] min-h-[100%-50px]  flex">

    <div class="w-full h-full">
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
