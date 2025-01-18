<template>
  <main>
    <section class="hero-screen">
      <div
        class="h-[405px] w-full flex-col pb-[100px] flex items-center justify-center"
        style="background: linear-gradient(65deg, black, rgba(0, 0, 0, 0.21))"
      >
        <h2
          class="md:text-[52px] text-[42px] md:pl-[0px] md:!leading-[initial] leading-[43px] md:mb-[0px] mb-[24px] pl-[20px] text-white font-bold"
        >
          {{ $t("about.title") }}
        </h2>
        <p class="text-white hidden md:block text-[20px] mt-[10px] font-normal">
          {{ $t("about.sub") }}
        </p>
        <p class="text-white block md:hidden pl-[20px] text-[20px] font-normal">
          {{ $t("about.sub") }}
        </p>
      </div>
    </section>
    <section
      class="bg-white pt-[30px] md:pt-16 mb-[60px] max-[784px]:rounded-[32px] w-full rounded-[64px] mt-[-100px]"
    >
      <div class="wrapper">
        <div class="mt-[15px] md:mt-[28px]">
          <p class="text-[16px] md:text-[20px] text-center text-[#697583]">
            {{ $t("about.text") }}
          </p>
        </div>
        <div class="mt-[15px] md:mt-[28px]">
          <h2
            class="md:text-[36px] text-[28px] text-center md:pl-[0px] md:!leading-[initial] leading-[43px] md:mb-[0px] mb-[24px] pl-[20px] font-bold"
          >
            {{ $t("about.team") }}
          </h2>
          <div
            class="grid mb-[100px] mt-[35px] xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[26px] w-full"
          >
            <div
              v-for="item of team"
              :key="item"
              class="shadow flex flex-col items-start gap-[12px] p-[24px] rounded-[24px] hover:cursor-pointer duration-300 cursor-pointer"
            >
              <img :src="item.img" alt="photo" />
              <h2 class="text-[18px] md:text-[22px] font-bold">{{ item.title }}</h2>
              <p class="text-primary">{{ item.sub }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const team = [
  {
    img: "https://static.wixstatic.com/media/618ec0_65cda8600f42420f9df42ae6b351b240~mv2.png/v1/crop/x_224,y_17,w_680,h_682/fill/w_270,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-01-29%20at%2015_52_14.png",
    title: "Reza Ibrahimzadeh",
    sub: t("about.team_info.ceo"),
  },
  {
    img: "https://static.wixstatic.com/media/618ec0_be9b814471194787b089f82b18de273f~mv2.png/v1/crop/x_110,y_53,w_497,h_497/fill/w_270,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-01-29%20at%2015_57_58.png",
    title: "Andreas Fischer",
    sub: t("about.team_info.founder"),
  },
  {
    img: "https://static.wixstatic.com/media/618ec0_c0c07b41ab234ee481af5efc5b530743~mv2.png/v1/crop/x_93,y_15,w_555,h_556/fill/w_270,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-01-29%20at%2016_02_09.png",
    title: "Fuad Mustafazadeh",
    sub: t("about.team_info.founder"),
  },
  {
    img: "https://static.wixstatic.com/media/618ec0_b4608f725bcb4f608647072cdda9ee69~mv2.png/v1/crop/x_177,y_113,w_401,h_401/fill/w_270,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-01-29%20at%2016_09_59.png",
    title: "Michael Ruppert-Roelle",
    sub: t("about.team_info.arch"),
  },
];
</script>


<style scoped>
.hero-screen {
  background-image: url("https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}
</style>