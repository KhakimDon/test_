<template>
  <CDropdown head-class="cursor-pointer">
    <template #head="{ show }">
      <div
        class="transition-300 flex items-center justify-between gap-1 bg-white group pl-4 p-1 rounded-md"
      >
        <div class="flex items-center gap-1 justify-betweenn w-full space-x-1 text-black">
          <img
            :src="`/src/assets/svg/flags/${useI18n().locale.value}.svg`"
            alt="flag"
            class="w-4 h-4"
          />
          <span class="text-[13px] leading-[123%]">
            {{ currentLanguage?.label }}
          </span>
          <i
            class="icon-chevron-down1 transition-200 text-xs inline-block"
            :class="{ 'rotate-180': show }"
          ></i>
        </div>
      </div>
    </template>

    <ul>
      <li
        v-for="(item, index) in languages"
        :key="index"
        class="transition-200 p-3 text-sm text-dark hover:bg-white-100/[0.24] flex justify-start items-center"
        @click="changeLocale(item.value)"
      >
        <img
          :src="`/src/assets/svg/flags/${item.value}.svg`"
          alt="flag"
          class="w-4 h-4 mr-1"
        />
        <span>{{ item.label }}</span>
        <i
          v-if="item.value === currentLanguage?.value"
          class="icon-arrow text-blue-100"
        ></i>
      </li>
    </ul>
  </CDropdown>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CDropdown from "@/components/Common/CDropdown.vue";
import { ELanguage, ILanguage } from "@/types/components/languageSwitcher";
import { useI18n } from "vue-i18n";

const languages: ILanguage[] = [
  {
    value: ELanguage.UZ,
    label: "O'zbekcha",
    icon: "/src/assets/svg/flags/ru.svg",
  },
  {
    value: ELanguage.RU,
    label: "Русский",
    icon: "/src/assets/svg/flags/ru.svg",
  },
  {
    value: ELanguage.EN,
    label: "English",
    icon: "/src/assets/svg/flags/ru.svg",
  },
];

const currentLanguage = computed(() => {
  const currentLocale = window.localStorage.getItem(
    "locale"
  ) as unknown as ELanguage;

  return languages.find((lang) => lang.value === currentLocale);
});

function changeLocale(_locale: ELanguage) {
  window.localStorage.setItem("locale", _locale);
  window.location.reload();
}
</script>
