<template>
  <section class="bg-white pt-[20px] mb-[200px] max-[784px]:rounded-[32px] w-full rounded-[64px] mt-[-100px]">
    <Card :idx="index" :left="index % 2 === 0" v-for="(item, index) of data" :key="item" :data="item" class="!mt-[100px] max-[784px]:!mt-[40px]" />
  </section>
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import { socials } from "@/data/Services/logos";
import { computed } from "vue";

const data = computed(() => socials());
</script>
