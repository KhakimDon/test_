<template>
  <div class="grid gap-4">
    <div class="w-full h-5 rounded shimmer dark:shimmer-dark" />
    <div
      v-for="card in 4"
      :key="card"
      :class="{ 'max-w-xs': card === 4 }"
      class="w-full h-4 shimmer dark:shimmer-dark rounded"
    />
  </div>
</template>
