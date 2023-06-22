<template>
  <Dropdown
    v-bind="{ show }"
    head-class="cursor-pointer"
    body-class="!right-full !top-0 !-translate-x-5 !translate-y-0 h-min"
    @toggle="handleToggle"
  >
    <template #head>
      <div
        class="flex items-center justify-between gap-1 bg-white hover:bg-gray-600 group transition-300 pl-4 p-1 rounded-md"
      >
        <p
          class="text-sm leading-5 text-gray-650 group-hover:text-blue-200 transition-300"
        >
          {{ $t("language") }}
        </p>
        <div
          class="px-2 py-1.5 rounded-md bg-gray-600 flex-y-center gap-2 text-xs leading-4 text-blue-200"
        >
          Русский
          <img
            class="w-4 h-4 object-cover"
            src="/src/assets/svg/flags/ru.svg"
            alt="Russian"
          />
        </div>
      </div>
    </template>
    <template #body>
      <div
        class="bg-white rounded-md profile-dropdown bg-white p-3 flex flex-col gap-2"
      >
        <pre>{{ currentLanguage }}</pre>
        <button
          v-for="(item, index) in languages"
          :key="index"
          @click="changeLocale(item.value)"
          class="px-4 py-2 hover:bg-gray-600 transition-300 text-left rounded-md text-sm text-gray-650 hover:text-blue-200 leading-5 flex-center-between"
        >
          {{ item.title }}
          <img
            class="w-4 h-4 rounded-full object-cover"
            :src="item.icon"
            :alt="item.title"
          />
        </button>
      </div>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Dropdown from "@/components/Common/Dropdown/Dropdown.vue";

const show = ref(false);

function handleToggle(val: boolean) {
  show.value = val;
}

const languages = [
  {
    value: "uz",
    title: "O'zbekcha",
    icon: "/src/assets/svg/flags/ru.svg",
  },
  {
    value: "ru",
    title: "Русский",
    icon: "/src/assets/svg/flags/ru.svg",
  },
  {
    value: "en",
    title: "English",
    icon: "/src/assets/svg/flags/ru.svg",
  },
];

const currentLanguage = computed(() =>
  languages.find((lang) => lang.value === window.localStorage.getItem("locale"))
);

function changeLocale(_locale: string) {
  window.localStorage.setItem("locale", _locale);
  window.location.reload();
}
</script>
