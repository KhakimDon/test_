<template>
  <div
    class="w-full dark:bg-gray bg-white rounded-2xl relative overflow-hidden"
  >
    <div
      class="size-full absolute left-0 top-0"
      style="
        background: linear-gradient(
          180deg,
          rgba(52, 53, 64, 0) 17.32%,
          #343540 73.87%
        );
      "
    />
    <div class="flex justify-between -mb-[10px]">
      <div class="max-w-[170px] pl-4 py-4 relative z-10">
        <h2 class="dark:text-white text-dark text-base font-bold leading-130">
          {{ $t("add_account.title") }}
        </h2>
        <p class="mt-1.5 dark:text-white/60 text-dark text-xs leading-130">
          {{ $t("add_account.description") }}
        </p>
      </div>
      <img alt="Add account" class="h-[124px]" src="/images/add-account.png" />
    </div>
    <div class="flex items-center gap-3 px-4 pb-4 relative z-10">
      <RouterLink :to="{ name: 'Register' }">
        <Button :text="$t('add_account.open')" />
      </RouterLink>
      <RouterLink :to="{ name: 'Login' }">
        <Button :text="$t('add_account.add')" />
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/Base/CButton.vue";
</script>
