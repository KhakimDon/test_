<template>
  <section>
    <div class="h-[405px] w-full flex-col pb-[100px] flex items-center justify-center" style="background: linear-gradient(65deg, black, rgba(0, 0, 0, 0.21));">
        <p class="text-white text-[20px] font-normal">{{$t('services.sub')}}</p>
        <h2 class="text-[52px] text-white font-bold">{{$t('services.title')}}</h2>
    </div>
  </section>
</template>

<style scoped>
section{
    background-image: url('/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom center;
}
</style>