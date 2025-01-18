<template>
  <section>
    <div class="h-[405px] w-full flex-col pb-[100px] flex items-center justify-center" style="background: linear-gradient(65deg, black, rgba(0, 0, 0, 0.21));">
        <p class="text-white  hidden md:block text-[20px] font-normal">{{$t('updog_page.sub')}}</p>
        <h2 class="md:text-[52px] text-[42px] md:pl-[0px] md:!leading-[initial] leading-[43px] md:mb-[0px] mb-[24px] pl-[20px] text-white font-bold">up<span class="text-primary">D</span>og {{$t('updog_page.title')}}</h2>
        <p class="text-white block md:hidden pl-[20px] text-[20px] font-normal">{{$t('updog_page.sub')}}</p>
    </div>
  </section>
</template>

<style scoped>
section{
    background-image: url('/images/services/5.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
}
</style>