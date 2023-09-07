<template>
  <div>
    <teleport v-if="mounted" to="#header-breadcrumbs">
      <SBreadcrumb v-bind="{ routes }" />
    </teleport>
    <div class="mt-7 bg-white p-10">
      <CTable
        :total="newsTableData?.length"
        :data="newsTableData"
        :head="newsTableHead"
        :current-page="1"
        :loading="loading"
        :limit="5"
        title="Новости"
        subtitle="78 новостей"
      >
        <template #header>
          <CTableHeader title="Новости" subtitle="78 новостей" />
        </template>
        <template #footer>
          <CTableFooter
            :total="newsTableData?.length"
            :items-per-page="10"
            :limit="5"
            :current-page="1"
          />
        </template>
      </CTable>
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
import CTable from "@/components/Common/Table/CTable.vue";
import { newsTableHead, newsTableData } from "@/data/index";
import CTableHeader from "@/components/Common/Table/CTableHeader.vue";
import CTableFooter from "@/components/Common/Table/CTableFooter.vue";

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
</script>
