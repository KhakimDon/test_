<template>
  <div>
    <teleport v-if="mounted" to="#header-breadcrumbs">
      <SBreadcrumb v-bind="{ routes }" />
    </teleport>
    <div class="mt-7 bg-white p-10">
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
      <FInput placeholder="Hello" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMounted } from "@/composables/useMounted";
import SBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import FInput from "@/components/Form/Input/FInput.vue";
import { useI18n } from "vue-i18n";
import { computed, onMounted, ref } from "vue";
import CTableWrapper from "@/components/Common/Table/CTableWrapper.vue";
import { newsTableHead, newsTableData } from "@/data/index";

const { mounted } = useMounted();
const { t } = useI18n();

const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 800);
});

const routes = computed(() => [
  {
    name: t("menus.news"),
    route: "/",
  },
]);

function handleSearch(value: string) {
  console.log(value);
}
function handlePerPage(value: string) {
  console.log(value);
}
function handlePage(value: string) {
  console.log(value);
}

const value = ref(true);
</script>
