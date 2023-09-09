<template>
  <div>
    <teleport v-if="mounted" to="#header-breadcrumbs">
      <SBreadcrumb v-bind="{ routes }" />
    </teleport>

    <div class="flex-y-center gap-5 mb-5">
      <CCompanyCard :card="companyCard" v-for="i in 4" :key="i" />
    </div>
    <div class="flex-y-center gap-5 mb-5">
      <CUserCard :card="userCard" v-for="i in 4" :key="i" />
    </div>
    <CCard>
      <CTableWrapper
        type="filled"
        :loading="loading"
        :head="newsTableHead"
        :data="newsTableData"
        :total="newsTableData?.length"
        :limit="5"
        :current-page="1"
        :items-per-page="10"
        title="Новости"
        subtitle="78 новостей"
        @search="handleSearch"
        @items-per-page="handlePerPage"
        @page-change="handlePage"
      />
    </CCard>
  </div>
</template>

<script lang="ts" setup>
import {newsTableHead, newsTableData, companyCard, userCard} from "@/data/index";
import { computed, onMounted, ref } from "vue";

import SBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import CTableWrapper from "@/components/Common/Table/CTableWrapper.vue";
import CCard from "@/components/Card/CCard.vue";
import { useI18n } from "vue-i18n";
import { useMounted } from "@/composables/useMounted";
import CCompanyCard from "@/components/Card/CCompanyCard.vue";
import CUserCard from "@/components/Card/CUserCard.vue";

const { t } = useI18n();
const { mounted } = useMounted();

// STATE
const loading = ref(true);
// STATE

// COMPUTED
const routes = computed(() => [
  {
    name: t("menus.news"),
    route: "/",
  },
]);
// COMPUTED

// FUNCTIONS
function handleSearch(value: string) {
  console.log(value);
}
function handlePerPage(value: string) {
  console.log(value);
}
function handlePage(value: string) {
  console.log(value);
}
// FUNCTIONS

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 800);
});
</script>
