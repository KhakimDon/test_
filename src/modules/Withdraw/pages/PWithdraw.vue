<template>
  <section>
    <CBreadcrumb :title="'withdraw.title'" />
    <div class="container">
      <Title>
        {{ $t("withdraw.description") }}
      </Title>
      <div class="mt-3">
        <BalanceCard
          :card-number="43124332"
          :balance="22222"
          name="KAP DEPO Investment"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import Title from "@/components/Common/Title.vue";
import BalanceCard from "@/components/Common/Card/BalanceCard.vue";
</script>

<style scoped></style>
