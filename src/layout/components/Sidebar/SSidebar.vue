<template>
  <div
    :class="[isOpen ? 'w-[265px]' : 'w-[75px]']"
    class="h-screen transition-300 shrink-0"
  />
  <div
    :class="[isOpen ? 'w-[265px]' : 'w-[75px]']"
    class="h-screen bg-dark-800 transition-300 hover:w-[265px] fixed flex flex-col justify-between z-[11] overflow-hidden"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div
      class="absolute w-full h-[132px] bg-blue -top-[56px] blur-[99px] opacity-60"
    ></div>
    <div>
      <div
        class="w-full px-4 py-5 flex items-center justify-center border-b border-solid border-white/30"
      >
        <div
          :class="{ 'opacity-0 invisible !w-0': !isOpen && !hovered }"
          class="relative overflow-hidden transition-300 w-[211px]"
        >
          <RouterLink to="/">
            <LogoMain />
          </RouterLink>
        </div>
        <div
          class="cursor-pointer w-6 h-6 flex items-center justify-center transition-300"
          @click="isOpen = !isOpen"
        >
          <span
            :class="{ '!rotate-180': isOpen }"
            class="flex items-center transition-300"
          >
            <span class="icon-double-arrow text-2xl leading-6"
              ><span class="path1"></span><span class="path2"></span
            ></span>
          </span>
        </div>
      </div>
      <div id="sidebar-menu" class="flex flex-col py-5 gap-1">
        <div v-for="(menuItem, index) in menu" :key="index">
          <RouterLink
            v-if="!menuItem?.sub?.length"
            :class="{ '!bg-blue/8': location === menuItem?.route }"
            :to="menuItem?.route"
            class="py-3 px-5 hover:bg-white/8 transition-300 block flex items-center gap-3 h-12"
            @click="openMenu(index)"
          >
            <i
              :class="[
                menuItem?.svgIcon,
                {
                  '!text-blue': location === menuItem?.route,
                },
              ]"
              class="text-xl text-gray-700"
            />
            <CollapseTransition :duration="300" dimension="width">
              <p v-if="isOpen || hovered" class="text-sm text-white">
                {{ menuItem?.heading }}
              </p>
            </CollapseTransition>
          </RouterLink>
          <div
            v-else
            :class="[
              index === openIndex || isActiveSub(menuItem?.sub)
                ? 'bg-blue/8'
                : '',
            ]"
            class="transition-300 cursor-pointer"
          >
            <div
              class="py-3 px-5 flex hover:bg-white/8 transition-300 items-center justify-between gap-3 h-12"
              @click="openMenu(index)"
            >
              <div class="flex items-center gap-3">
                <i
                  :class="[
                    menuItem?.svgIcon,
                    {
                      '!text-blue': location === menuItem?.route,
                    },
                  ]"
                  class="text-xl text-gray-700"
                />
                <CollapseTransition :duration="300" dimension="width">
                  <p v-if="isOpen || hovered" class="text-sm text-white">
                    {{ menuItem?.heading }}
                  </p>
                </CollapseTransition>
              </div>
              <i
                v-if="isOpen || hovered"
                :class="[
                  {
                    '!-rotate-180 !text-blue': index === openIndex,
                  },
                ]"
                class="icon-arrow-md text-xl leading-5 transition-300 text-gray-700"
              />
            </div>

            <CollapseTransition>
              <div
                v-if="
                  (menuItem?.sub?.length && index === openIndex && isOpen) ||
                  (index === openIndex && !isOpen && hovered)
                "
              >
                <RouterLink
                  v-for="(subMenuItem, idx) in menuItem?.sub"
                  :key="idx"
                  :to="subMenuItem?.route"
                  class="p-3 pl-6 transition-300 block flex items-center gap-3 h-12 text-gray-700 group"
                >
                  <span
                    :class="{ '!text-white': location === subMenuItem?.route }"
                    class="text-gray-700 group-hover:text-white transition-300"
                    >-</span
                  >
                  <CollapseTransition :duration="300" dimension="width">
                    <p
                      v-if="isOpen || hovered"
                      :class="{
                        '!text-white': location === subMenuItem?.route,
                      }"
                      class="text-xs text-gray-700 group-hover:text-white transition-300"
                    >
                      {{ subMenuItem?.heading }}
                    </p>
                  </CollapseTransition>
                </RouterLink>
              </div>
            </CollapseTransition>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isOpen || hovered" class="p-5">
      <a
        class="text-xs underline hover:opacity-60 transition-300"
        href="/privacy"
      >
        privacy_policy
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";
import { computed, onMounted, ref } from "vue";

import { menu } from "@/data/menu";
import { useRoute } from "vue-router";
import LogoMain from "@/components/Common/Logo/Main.vue";

const openIndex = ref(null);
const isOpen = ref(true);
const hovered = ref(false);
const route = useRoute();

// const hasActiveChildren = (match: string) => {
//   return route.path.indexOf(match) !== -1;
// };

const location = computed(() => route.path);

function openMenu(index: number | null) {
  if (openIndex.value === index) {
    openIndex.value = null;
  } else {
    openIndex.value = index;
  }
}

function checkIndexActive() {
  menu.forEach((el, index) => {
    if (el?.sub?.length) {
      el?.sub?.forEach((elSub: any) => {
        if (elSub?.route === location.value) {
          openIndex.value = index;
        }
      });
    }
  });
}

onMounted(() => {
  setTimeout(() => {
    checkIndexActive();
  }, 100);
});

function isActiveSub(arr: any[]) {
  return arr.find((el: any) => el?.route === location.value);
}
</script>

<style scoped></style>
