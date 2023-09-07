<template>
  <div>
    <teleport v-if="mounted" to="#header-breadcrumbs">
      <SBreadcrumb v-bind="{ routes }" />
    </teleport>
    <div class="mt-7 bg-white p-10">
      <!--      <RichText />-->
      <!--      <CommonTable-->
      <!--        v-bind="{-->
      <!--          head,-->
      <!--          data: tableData,-->
      <!--          title: 'Title',-->
      <!--          subtitle: 'Subtitle',-->
      <!--          loading,-->
      <!--          currentPage: 2,-->
      <!--          total: 100,-->
      <!--        }"-->
      <!--        status-key=""-->
      <!--        :status-colors="{}"-->
      <!--        @itemsPerPage="changePerPage"-->
      <!--      >-->
      <!--        <template #afterSearch>-->
      <!--          <div>After Search</div>-->
      <!--        </template>-->
      <!--        <template #beforeSearch>-->
      <!--          <div>beforeSearch</div>-->
      <!--        </template>-->
      <!--        <template #footer>-->
      <!--          <div>Footer</div>-->
      <!--        </template>-->
      <!--      </CommonTable>-->

      <FInput placeholder="Hello" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMounted } from "@/composables/useMounted";
import SBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import FInput from "@/components/Form/Input/FInput.vue";
import { useI18n } from "vue-i18n";

const { mounted } = useMounted();
const { t } = useI18n();
// const loading = ref(false);
//
const routes = [
  {
    name: t("menus.news"),
    route: "/",
  },
];
//
// setTimeout(() => {
//   loading.value = false;
// }, 2000);
//
// const changePerPage = (value: number) => {
//   // Todo: Event
// };
</script>
