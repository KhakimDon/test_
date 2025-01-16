<template>
  <section class="bg-white relative z-[10] w-[100%] bradius">
    <div class="wrapper pt-[60px]">
      <div class="mb-[28px]">
        <h2 class="text-[#2B2B2B] text-[32px] font-[1000]">
          {{ $t("second_section.title") }}
        </h2>
        <span class="text-sm text-[#697583]">
          {{ $t("second_section.sub") }}
        </span>
      </div>
      <div class="grid-section min-h-[575px] w-full gap-1">
        <div
          @click="service"
          class="span-3 font-bold flex flex-col justify-between"
        >
          <p>{{ $t("second_section.soft") }}</p>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/software-development-illustration-download-in-svg-png-gif-file-formats--programming-web-developer-design-app-layout-and-pack-people-illustrations-3726908.png"
            alt="image"
          />
        </div>
        <div @click="service" class="black-background font-bold bg-cloud">
          <div class="absolute h-full w-full z-1 left-0 top-0">
            <p class="text-white">{{ $t("second_section.cloud") }}</p>
          </div>
        </div>
        <div @click="service" class="black-background font-bold bg-sulution">
          <div class="absolute h-full w-full z-1 left-0 top-0">
            <p class="text-white">{{ $t("second_section.solution") }}</p>
          </div>
        </div>
        <div @click="service" class="black-background font-bold bg-agile">
          <div class="absolute h-full w-full z-1 left-0 top-0">
            <p class="text-white">{{ $t("second_section.agile") }}</p>
          </div>
        </div>
        <div @click="service" class="black-background font-bold bg-data">
          <div class="absolute h-full w-full z-1 left-0 top-0">
            <p class="text-white">{{ $t("second_section.data") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function service() {
  router.push("/services");
}
</script>


<style scoped>
@media screen and (max-width: 650px) {
  .grid-section {
    height: 1300px !important;
    grid-template-columns: 1fr 1fr !important;
  }
  .grid-section div {
    min-height: 300px !important;
  }
  .bradius {
    margin-top: -80px;
    border-radius: 40px 40px 0px 0px !important;
  }
}
.bg-cloud {
  background-image: url("https://static.wixstatic.com/media/11062b_05d954b3b1eb4b1689b02231a5e5ae5b~mv2.jpg/v1/crop/x_1077,y_0,w_2845,h_3333/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cloud%20in%20the%20Sky.jpg") !important;
}
.bg-sulution {
  background-image: url("https://static.wixstatic.com/media/79e6ff0b4fa14818b14a29f9eca3dccc.jpg/v1/crop/x_754,y_0,w_1992,h_2333/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Architect.jpg") !important;
}
.bg-agile {
  background-image: url("https://static.wixstatic.com/media/11062b_da78e7297d324d7ca36fd38de4bcf64d~mv2.jpg/v1/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Architecture.jpg") !important;
}
.bg-data {
  background-image: url("https://static.wixstatic.com/media/15dd39b806574ede9e6cda31c130ec03.jpg/v1/crop/x_754,y_0,w_1992,h_2333/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Squares.jpg") !important;
}

.bradius {
  margin-top: -80px;
  border-radius: 64px 64px 0px 0px;
}
.black-background {
  position: relative;
  overflow: hidden;
}
.black-background div {
  background: rgba(0, 0, 0, 0.362) !important;
}
.grid-section {
  display: grid;
  z-index: 2;
  position: relative;
  height: 475px;
  gap: 32px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.span-3 {
  grid-column: 1/3;
  grid-row: 1/3;
}
.grid-section div {
  padding: 35px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.177);
  background: #f9f9f9;
  cursor: pointer;
  border-radius: 32px;
}

.grid-section div p {
  font-size: 24px;
  line-height: 30px !important;
}
</style>