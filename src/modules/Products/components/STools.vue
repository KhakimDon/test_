<template>
  <section>
    <div class="md:mt-[20px] wrapper">
      <span class="text-[20px] text-[#697583]">
        {{ $t("tools") }}
      </span>
      <div class="grid mt-[15px] xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[26px] w-full">
        <div v-for="item of cardsData" :key="item" class="bg-[#F2F3F7] shadow flex flex-col items-start gap-[12px] p-[24px] rounded-[24px] hover:cursor-pointer duration-300 cursor-pointer">
            <div class="mb-[12px] bg-primary/20 flex items-center justify-center rounded-[16px] h-[52px] w-[52px]">
                <img class="h-[30px] w-[30px]" :src="`/icons/${item.icon}.svg`" alt="icon">
            </div>
            <h1 class="line-clamp-2 text-[#2B2B2B] font-medium text-[20px]">{{item.title}}</h1>
            <p class="line-clamp-2 text-sm font-normal text-[#2B2B2B]">{{item.sub}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cards } from "~/data/Cards";

const cardsData = cards();

</script>


<style scoped>


</style>