<template>
  <section>
    <div class="">
      <Title class="py-3 container">
        {{ $t("introduce.title") }}
      </Title>
      <Swiper
        slides-per-view="auto"
        :space-between="12"
        :pagination="{
          clickable: true,
        }"
        class="!px-4"
      >
        <SwiperSlide
          class="!w-auto"
          v-for="({ title, cover_image }, idx) in stories"
          :key="idx"
        >
          <CStoryCard
            :title="title"
            :image="cover_image"
            :is-loading="isLoading"
            @click="openStory(idx)"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <CStory
      :stories="stories"
      :show="showStory"
      @close="closeStory"
      :active-index="activeIndex"
    />
  </section>
</template>

<script setup lang="ts">
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import Title from "@/components/Common/Title.vue";
import CStoryCard from "@/components/Common/Card/CStoryCard.vue";
import CStory from "@/components/CStory.vue";
import { ref } from "vue";
import { Story } from "@/modules/Main/types";

interface Props {
  stories?: Story[];
  isLoading: boolean;
}

defineProps<Props>();

const showStory = ref(false);
const activeStoryData = ref<Story | null>(null);
const activeIndex = ref(0);

const closeStory = () => {
  showStory.value = false;
  activeStoryData.value = null;
};

const openStory = (idx: number) => {
  showStory.value = true;
  activeIndex.value = idx;
};
</script>
