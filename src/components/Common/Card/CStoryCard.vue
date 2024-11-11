<template>
  <Transition mode="out-in" name="fade">
    <div :key="isLoading">
      <div
        v-if="isLoading"
        class="w-[162px] h-[220px] rounded-2xl shimmer dark:shimmer-dark"
      />
      <div
        v-else
        class="pt-3.5 w-[162px] h-[220px] rounded-2xl relative bg-[#4E5683] overflow-hidden"
      >
        <div
          class="size-full z-10 absolute left-0 top-0"
          style="background: linear-gradient(180deg, #14141466, #14141400)"
        />
        <div class="flex flex-col gap-4 justify-between h-full">
          <h2
            class="text-base font-helvetica text-white font-medium leading-[124%] px-4 relative z-10"
          >
            {{ title }}
          </h2>
          <img
            :src="image"
            alt="Invest"
            class="object-cover absolute size-full left-0 top-0"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  image: string;
  isLoading?: boolean;
}

defineProps<Props>();
</script>
