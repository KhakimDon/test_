<template>
  <div class="flex items-center max-[784px]:flex-col justify-between wrapper">
    <div :class="{'order-1 max-[784px]:!order-[initial]': left}" class="max-w-[523px] w-[100%]">
      <h1 class="text-center text-[32px] font-bold text-[#2B2B2B]">
        {{ data.title }} 
      </h1>
      <p class="text-[#697583] max-[784px]:!mb-[20px] leading-[150%] text-center mt-[12px] text-sm">
        {{ data.sub }}
      </p>
    </div>
    <div
      :style="`background: url('/images/services/${idx + 1}.png')`"
      class="bg-options max-w-[610px] rounded-[32px] overflow-hidden w-[100%] h-[310px]"
    >
      <div
        class="w-[100%] flex items-center justify-center h-[100%] bg-black/30"
      >
        <div
          class="grid w-[265px] h-[165px] grid-cols-3 grid-rows-2 gap-[17px]"
        >
          <div
            class="rounded-[18px] cursor-pointer duration-300 hover:scale-[1.08] shadow-lg p-[10px] flex items-center justify-center bg-white"
            v-for="item of data.logos"
            :key="item"
            @click="targetLink(item.links)"
          >
            <img
              class="w-[100%] object-contain max-w-[80%] max-h-[90%]"
              :src="item.logo"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  left?: boolean;
  idx?: number;
  data: {
    background?: string;
    title: string;
    sub: string;
    logos: [
      {
        logo: string;
        links: string;
      }
    ];
  };
}

defineProps<Props>();

const targetLink = (links: string) => {
  window.location.href = links;
};
</script>

<style scoped>
.bg-options {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>


