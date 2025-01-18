<template>
  <section
    class="bg-white pt-[30px] md:pt-16 mb-[60px] max-[784px]:rounded-[32px] w-full rounded-[64px] mt-[-100px]"
  >
    <div class="mt-[15px] md:mt-[28px] wrapper">
      <h2 class="text-[#2B2B2B] text-[32px] font-[1000]">
        {{ $t("updog_page.problem.title") }}
      </h2>
      <span class="text-sm text-[#697583]">
        {{ $t("updog_page.problem.sub") }}
      </span>
    </div>
    <div class="flex pt-[40px] wrapper justify-between items-start gap-5">
      <div class="h-full w-full flex justify-between flex-col-reverse lg:flex-row">
        <div class="flex-1 font-bold text-[18px] p-1 md:p-10 flex flex-col md:flex-row items-start  md:items-center leading-[40px] md:leading-[60px] mt-[16px] md:mt-[0] justify-between">
          <ul class="w-full md:w-max">
            <li><CButton class="!bg-[#8c95b574] !w-full md:!w-max" :text="$t('updog_page.problem.problems.1')" /></li>
            <li><CButton class="!bg-[#8c95b574] !w-full md:!w-max" :text="$t('updog_page.problem.problems.2')" /></li>
            <li><CButton class="!bg-[#8c95b574] !w-full md:!w-max" :text="$t('updog_page.problem.problems.3')" /></li>
          </ul>
          <ul class="w-full md:w-max">
            <li><CButton class="!bg-[#8c95b574] !w-full md:!w-max" :text="$t('updog_page.problem.problems.4')" /></li>
            <li><CButton class="!bg-[#8c95b574] !w-full md:!w-max" :text="$t('updog_page.problem.problems.5')" /></li>
            <li><CButton class="!bg-[#8c95b574] !w-full md:!w-max" :text="$t('updog_page.problem.problems.6')" /></li>
          </ul>
          <b></b>
        </div>
        <div class="h-[300px] p-8 border border-[#8c95b5] overflow-hidden flex-1 rounded-[32px]">
          <img class="h-full w-full object-cover" src="https://static.wixstatic.com/media/618ec0_43037061f2774c558c1735982cb84451~mv2.png/v1/fill/w_855,h_340,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rhel.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CButton from "@/components/Base/CButton.vue";
</script>
