<template>
  <Transition mode="out-in" name="fade">
    <button
      v-if="isTimeOut"
      class="text-white cursor-pointer"
      @click="startTimer"
    >
      {{ $t("resend") }}
    </button>
    <span v-else class="text-white">
      {{ timer }}
    </span>
  </Transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const timer = ref("00:59");
const isTimeOut = ref(false);
let second = 60;
let intervalId: any;

function startTimer() {
  second = 59;
  isTimeOut.value = false;
  intervalId = setInterval(() => {
    second--;
    if (second == 0) {
      isTimeOut.value = true;
      clearInterval(intervalId);
    }
    const s = second < 10 ? `0${second}` : second;
    timer.value = `00:${s}`;
  }, 1000);
}

onMounted(() => {
  startTimer();
});
</script>
