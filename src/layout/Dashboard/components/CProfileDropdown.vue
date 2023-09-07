<template>
  <CDropdown head-class="cursor-pointer">
    <template #head="{ show }">
      <div class="flex-y-center gap-3">
        <div>
          <p class="font-semibold text-base text-dark mb-0.5">
            {{ user?.fullName }}
          </p>
          <p class="text-sm text-gray text-right">
            {{ user?.subtitle }}
          </p>
        </div>

        <CAvatar :image="user?.avatar" size="sm" />

        <span
          :class="{ 'rotate-180': show }"
          class="icon-arrow-md text-2xl text-gray transition-300"
        ></span>
      </div>
    </template>

    <div class="bg-white rounded-md profile-dropdown">
      <div class="flex items-center gap-3 p-5 pt-6">
        <div class="w-[50px] h-[50px] rounded-full overflow-hidden">
          <img
            :src="user?.avatar"
            alt="Profil image"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="h-max flex flex-col justify-center">
          <p class="text-base font-semibold text-dark leading-20">
            {{ user?.fullName }}
          </p>
          <p class="text-sm text-gray">{{ user?.subtitle }}</p>
        </div>
      </div>
      <div class="border-y border-gray-550 py-2 px-4 flex flex-col gap-1">
        <div
          v-for="(item, index) in profileItems"
          :key="index"
          :class="[
            item?.class,
            item?.icon
              ? '!inline-grid grid-cols-[28px_1fr] items-center'
              : 'inline-block',
          ]"
          class="w-full text-sm text-gray-650 hover:text-blue-200 leading-5 transition-all duration-300 hover:bg-gray-600 px-4 py-2 rounded-md cursor-pointer"
          @click="$emit(item?.event)"
        >
          <i v-if="item?.icon" :class="item?.icon" class="text-xl"></i>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="py-2 px-4 flex flex-col gap-1">
        <CommonLangSwitcher />
        <div
          class="text-sm w-full transition-all duration-300 px-4 py-2 rounded-md cursor-pointer text-red-500 hover:bg-red-50"
          @click="$emit('logout')"
        >
          <span>{{ $t("log_out") }}</span>
        </div>
      </div>
    </div>
  </CDropdown>
</template>

<script lang="ts" setup>
import CDropdown from "@/components/Common/CDropdown.vue";
import { defineComponent, ref } from "vue";
import CommonLangSwitcher from "@/components/CLanguageSwitcher.vue";
import CAvatar from "@/components/CAvatar.vue";

defineComponent({
  name: "HeaderProfile",
});

interface Props {
  user?: {
    fullName: string;
    avatar: string;
    subtitle: string;
  };
  profileItems?: {
    title: string;
    class?: string;
    icon?: string;
    event?: string;
  }[];
}

defineProps<Props>();
</script>

<style scoped>
.profile-dropdown {
  box-shadow: 0 0 50px rgba(82, 63, 105, 0.15);
}
</style>
