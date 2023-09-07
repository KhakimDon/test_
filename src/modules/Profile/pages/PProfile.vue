<template>
  <!--begin::Navbar-->
  <CProfileHeader />
  <!--end::Navbar-->
  <router-view></router-view>
</template>

<script lang="ts" setup>
import CProfileHeader from "@/components/Profile/CProfileHeader.vue";
</script>
