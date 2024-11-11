<template>
  <Teleport to="body">
    <div class="max-w-phone">
      <Transition mode="out-in" name="fade">
        <div
          v-if="isOpen"
          class="w-full fixed left-0 bottom-0 h-screen bg-[#111217D4] z-[110]"
          @click="close"
        />
      </Transition>
      <Transition mode="out-in" name="dropdown">
        <div
          v-if="isOpen"
          :class="$attrs.class"
          class="fixed bottom-0 left-0 z-[110] bg-white dark:bg-dark w-full min-h-40 rounded-t-3xl px-5 pb-4"
        >
          <!-- MODAL --- HEADER -->
          <div v-if="hasHeader" class="flex-center-between p-4">
            <div />
            <span class="text-base text-dark dark:text-white font-medium">{{
              title
            }}</span>
            <button
              class="icon-close text-dark dark:text-white text-2xl"
              @click="close"
            />
          </div>
          <!-- MODAL --- BODY -->
          <slot>
            <p>content here</p>
          </slot>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { defineModel, watch } from "vue";

interface Props {
  title: string;
  hasHeader?: boolean;
}

interface Emits {
  (e: "close", value: boolean): void;

  (e: "update:modelValue", value: boolean): void;
}

defineProps<Props>();
const emits = defineEmits<Emits>();
const isOpen = defineModel<boolean>();

function close() {
  emits("update:modelValue", false);
}

watch(
  () => isOpen.value,
  (open) => (document.body.style.overflowY = open ? "hidden" : "auto")
);
</script>
