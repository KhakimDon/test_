<template>
  <main
    class="dark:bg-dark bg-light h-svh p-4 max-w-phone flex flex-col justify-between mx-auto"
  >
    <slot />
    <i18n-t class="text-gray-100 text-center text-sm" keypath="consent" tag="p">
      <template #terms>
        <RouterLink
          class="underline text-white lowercase"
          to="/pages/terms-of-user"
        >
          {{ $t("terms_of_use") }}
        </RouterLink>
      </template>
      <template #policy>
        <RouterLink
          class="text-white underline lowercase"
          to="/pages/privacy-policy"
        >
          {{ $t("privacy_policy") }}
        </RouterLink>
      </template>
    </i18n-t>
  </main>
</template>
