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
          class="icon-chevron-2 font-medium transition-200 text-2xl text-gray"
        ></span>
      </div>
    </template>

    <div
      class="transition-200 flex-y-center px-5 pt-6 pb-[18px] space-x-4 hover:bg-white-100/[0.24]"
    >
      <CAvatar :image="user?.avatar" size="md" />

      <div>
        <h5 class="font-semibold text-base text-dark mb-px">
          {{ user.fullName }}
        </h5>
        <p class="text-sm text-gray-200">{{ user.subtitle }}</p>
      </div>
    </div>

    <ul>
      <li
        class="transition-200 p-3 flex flex-col gap-1 text-sm w-full text-dark hover:bg-white-100/[0.24]"
        v-for="(item, idx) in dropdownItems"
        :key="idx"
        :class="item?.styles"
        @click="item.action"
      >
        {{ item.label }}
      </li>
    </ul>
  </CDropdown>
</template>

<script lang="ts" setup>
import CDropdown from "@/components/Common/CDropdown.vue";
import { defineComponent } from "vue";
import CAvatar from "@/components/CAvatar.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

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

const router = useRouter();
const { t } = useI18n();

interface IDropdownItem {
  label: string;
  styles?: string;
  action: () => void;
}

const dropdownItems: IDropdownItem[] = [
  {
    label: t("help"),
    action: () => router.push({ name: "Help" }),
  },
  {
    label: t("log_out"),
    styles: "text-red-500 hover:bg-red-50",
    action: () => router.push({ name: "Help" }),
  },
];
</script>
