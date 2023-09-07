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

      <FSelect :options="options" value-key="value" label-key="label" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMounted } from "@/composables/useMounted";
import SBreadcrumb from "@/components/Common/CBreadcrumb.vue";
import { useI18n } from "vue-i18n";
import FSelect from "@/components/Form/FSelect.vue";

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

const options = [
  {
    value: 1,
    label: "Lebel 1",
  },
  {
    value: 2,
    label: "Lebel 2",
  },
  {
    value: 3,
    label: "Lebel 3",
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
