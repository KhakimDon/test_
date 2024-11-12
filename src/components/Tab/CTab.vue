<template>
  <div
    :class="[variants[variant].wrapper, $attrs.class]"
    class="space-x-0.5 flex p-0.5 rounded-lg w-full relative"
  >
    <div
      v-if="variant === 'secondary'"
      class="w-full h-0.5 bg-slate-100 dark:bg-gray absolute bottom-0"
    />
    <button
      v-for="(tab, idx) in list"
      :id="`item_${tab[valueKey]}`"
      :key="idx"
      :class="[
        optionClass,
        {
          'w-fit px-2': variant === 'secondary',
          'text-white bg-blue': localeValue === tab[valueKey],
        },
      ]"
      class="py-1.5 rounded-md w-full text-lg text-dark dark:text-white font-medium z-10 relative transition-300"
      @click="pick(tab[valueKey], $event, tab?.routeName)"
    >
      <span class="relative z-[2] text-sm">
        {{ tab[labelKey] }}
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineModel, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

interface Props {
  modelValue: string | number;
  list: Record<string, string>[];
  optionClass?: string;
  labelClass?: string;
  activeClass?: string;
  variant?: "primary" | "secondary";
  asLink?: boolean;
  valueKey?: string;
  labelKey?: string;
}

interface Emits {
  (e: "update:modelValue", value: string | number): void;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  asLink: false,
  valueKey: "value",
  labelKey: "label",
});
const emit = defineEmits<Emits>();
const modelValue = defineModel();

const router = useRouter();

const localeValue = ref(modelValue);
const active = ref({ left: 0, width: "0px" });
const pick = (
  tab: string | number,
  e?: { target: HTMLButtonElement },
  route?: string
) => {
  const target = e.target as HTMLButtonElement;
  active.value = {
    left: target?.offsetLeft,
    width: target?.offsetWidth + "px",
  };
  if (route) {
    router.push({ name: route });
  }
  localeValue.value = tab;
  emit("update:modelValue", tab);
};

onMounted(() => {
  const item = document.getElementById(
    `item_${props.modelValue}`
  ) as HTMLButtonElement;
  setTimeout(() => {
    pick(props.modelValue, { target: item });
  }, 10);
});

const variants = {
  primary: {
    wrapper: "bg-slate-100 dark:bg-gray",
    tab: "h-full top-0 bottom-0",
  },
  secondary: {
    wrapper: "bg-transparent rounded-none",
    tab: "h-0.5 bottom-0",
  },
};
</script>
<style scoped>

</style>