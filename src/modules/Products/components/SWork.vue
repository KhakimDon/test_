<template>
  <section>
    <div class="wrapper">
      <div class="mt-[20px] md:mt-[64px]">
        <h2 class="text-[#2B2B2B] text-center text-[32px] font-[1000]">
          {{ $t("work.title") }}
        </h2>
        <p class="text-sm text-center text-[#697583]">
          {{ $t("work.sub") }}
        </p>
      </div>
      <div class="flex items-center mt-[20px] justify-center">
        <img
          class="rounded-[32px] mt-[20px]"
          src="https://static.wixstatic.com/media/618ec0_35cb7e06c600499ea0f577eaf40957c8~mv2.png/v1/fill/w_855,h_331,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/upDog-stages.png"
          alt="image"
        />
      </div>
      <div class="flex items-center justify-center">
        <p class="text-center text-[#2B2B2B] text-[18px] mt-[40px] mb-[20px]">
          {{ $t("work.text") }}
        </p>
      </div>
      <div class="flex items-center justify-center mt-[20px] md:mt-[40px]">
        <img
          class="rounded-[32px] mt-[20px]"
          src="https://static.wixstatic.com/media/618ec0_fdb7b9e7852d44fabba6de1d94cf791c~mv2.png/v1/crop/x_0,y_316,w_3798,h_1852/fill/w_765,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/upDog-architecture.png"
          alt="image"
        />
      </div>
      <div class="flex items-center mt-[20px] md:mt-[40px] justify-center">
        <img
          class="rounded-[32px] mt-[20px]"
          src="https://static.wixstatic.com/media/618ec0_ed9dd6fea7c5489481aeefc4fffbb75b~mv2.png/v1/fill/w_855,h_446,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/618ec0_ed9dd6fea7c5489481aeefc4fffbb75b~mv2.png"
          alt="image"
        />
      </div>
      <div class="mt-[20px] md:mt-[64px]">
        <h2 class="text-[#2B2B2B] text-[32px] font-[1000]">
          {{ $t("work.title") }}
        </h2>
        <p class="text-sm text-[#697583]">
          {{ $t("work.sub") }}
        </p>
      </div>
      <div
        class="grid mb-[100px] mt-[35px] xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[26px] w-full"
      >
        <div
          v-for="(item,index) of whyUsData"
          :key="item"
          class="bg-[#F2F3F7] shadow flex flex-col items-start gap-[12px] p-[24px] rounded-[24px] hover:cursor-pointer duration-300 cursor-pointer"
        >
          <h1 class=" text-[#2B2B2B] font-medium text-[20px]">
           {{index + 1}}. <br>{{ item.title }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { whyUs } from "~/data/Cards";

const whyUsData = whyUs();
</script>
