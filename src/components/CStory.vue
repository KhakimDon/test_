<template>
  <div
    class="h-screen w-full fixed top-0 left-0 z-[1000] bg-dark-600"
    v-if="show"
  >
    <Swiper
      v-if="stories?.length"
      :init="false"
      :initial-slide="activeIndex"
      v-bind="settings"
      @swiper="onInit"
      @active-index-change="sliderChange"
    >
      <SwiperSlide v-for="story in stories" :key="story.id" class="!h-screen">
        <div class="size-full rounded-t-3xl overflow-hidden">
          <div
            class="size-full z-10 rounded-t-3xl absolute left-0 top-0"
            style="
              background: linear-gradient(
                180deg,
                #121214 0%,
                rgba(31, 31, 36, 0) 100%
              );
            "
          />
          <img
            :src="story.content"
            :alt="story.title"
            class="size-full object-cover absolute left-0 top-0 rounded-t-3xl"
          />
          <div class="text-white relative z-10 container mt-20">
            <h1 class="text-3.5xl font-bold leading-[39.68px]">
              {{ story.title }}
            </h1>
            <p class="text-sm leading-[17.36px] mt-4">
              {{ story.description }}
            </p>
            <button
              class="mt-8 w-full text-center py-3 rounded-lg border border-[#FAE74D] font-medium leading-[20px] text-sm"
            >
              {{ $t("start_investing") }}
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="absolute bottom-6 right-6 z-10">
      <div class="flex-y-center gap-2">
        <button
          aria-label="Prev slide"
          class="main-button-prev text-white bg-primary-gradient disabled:!text-primary size-10 rounded-full flex-center transition-200 active:scale-90"
          style="box-shadow: 0 0 36px 0 rgba(1, 180, 255, 0.4)"
        >
          <i class="icon-chevron-left text-inherit" />
        </button>
        <button
          aria-label="Next slide"
          class="main-button-next text-white size-10 bg-primary-gradient disabled:!text-primary rounded-full flex-center transition-200 active:scale-90"
          style="box-shadow: 0 0 36px 0 rgba(1, 180, 255, 0.4)"
        >
          <span class="rotate-180 leading-none h-4">
            <i class="icon-chevron-left text-inherit" />
          </span>
        </button>
      </div>
    </div>
    <div class="absolute z-[2] top-7 left-5 right-5">
      <div class="flex items-center justify-between gap-3">
        <div class="flex-y-center gap-1 flex-1">
          <div
            v-for="(_, index) in stories"
            :key="index"
            class="h-0.5 bg-white/20 w-full max-w-[70px] rounded-lg relative overflow-hidden"
          >
            <div
              class="bg-white h-0.5 w-0"
              :class="{ 'animation-fill': index === activeIndex }"
            />
          </div>
        </div>
        <button @click="close">
          <i class="icon-close text-white text-xl" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { ref, watch } from "vue";
import { Story } from "@/modules/Main/types";

interface Props {
  stories?: Story[];
  show: boolean;
  activeIndex?: number;
}

const props = defineProps<Props>();
const emit = defineEmits(["close"]);

const settings = {
  grabCursor: true,
  spaceBetween: 16,
  effect: "fade",
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },
  navigation: {
    prevEl: ".main-button-prev",
    nextEl: ".main-button-next",
  },
  modules: [Navigation, Autoplay, EffectFade],
};

const slider = ref();
const activeIndex = ref<number>(props.activeIndex ?? 0);

const close = () => {
  emit("close");
};

const sliderChange = (e: any) => {
  activeIndex.value = e?.realIndex;
};

const onInit = (swiper: any) => {
  slider.value = swiper;
};

watch(
  () => props.activeIndex,
  (newIndex) => {
    activeIndex.value = newIndex as number;
  }
);

watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
);
</script>

<style scoped>
button[disabled] {
  background: #ffffff !important;
}

.animation-fill {
  animation: fill 6s linear forwards;
}

@keyframes fill {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
