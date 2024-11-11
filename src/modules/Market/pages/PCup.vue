<template>
  <div class="container">
    <div class="flex items-center justify-between gap-3 mb-2">
      <h2 class="text-xs text-success">Buy</h2>
      <h2 class="text-xs font-medium">Price</h2>
      <h2 class="text-xs text-red">Sell</h2>
    </div>
    <ChartDifference
      :buy="generateCupFakeData(20)"
      :sell="generateCupFakeData(20)"
    />
  </div>
</template>

<script setup lang="ts">
import ChartDifference from "@/components/Common/Chart/Difference/index.vue";
import { generateCupFakeData } from "@/data/fake";
</script>
