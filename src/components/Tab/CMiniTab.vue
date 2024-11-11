<template>
  <div :class="$attrs.class" class="">
    <Swiper
      slides-per-view="auto"
      free-mode
      class="main-tab"
      :space-between="8"
      :modules="[FreeMode]"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="(tab, idx) in list" :key="idx" class="!w-auto">
        <button
          :class="{
            'bg-primary-gradient border-transparent': tab.value == modelValue,
          }"
          class="py-1.5 px-3 transition-all w-fit transition-300 text-sm text-white border border-gray rounded-lg"
          @click="pick(tab)"
        >
          {{ tab.label }}
        </button>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
import "swiper/css";
import { defineModel, onMounted, ref } from "vue";
import { ITabItem } from "@/types/components";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRouter } from "vue-router";

interface Props {
  list: ITabItem[];
  optionClass?: string;
  activeClass?: string;
  variant?: "primary" | "secondary";
}

const swiperInstance = ref();
const router = useRouter();
interface Emits {
  (e: "update:modelValue", value: string | number): void;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});
const emit = defineEmits<Emits>();

const pick = (tab: ITabItem) => {
  emit("update:modelValue", tab.value);

  const index = props.list.findIndex((t: ITabItem) => t.value === tab.value);
  const slidesCount = swiperInstance.value.slides.length;
  if (index > 0 && index < slidesCount - 1) {
    swiperInstance.value.slideTo(index - 1);
  } else {
    swiperInstance.value.slideTo(index);
  }

  if (tab.routeName) {
    console.log(tab.routeName);
    router.push({ name: tab.routeName });
  }
};

const modelValue = defineModel<string | number>();

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

onMounted(() => {
  console.log(modelValue.value, "modelValue");
  if (modelValue.value) {
    const currentTab = props.list.find((tab) => tab.value === modelValue.value);
    if (currentTab) {
      pick(currentTab);
    }
  }
});
</script>
