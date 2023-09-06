<template>
  <div>
    <teleport v-if="mounted" to="#header-breadcrumbs">
      <SBreadcrumb v-bind="{ routes }" />
    </teleport>
    <teleport v-if="mounted" to="head">
      <title>Home</title>
    </teleport>
    <div class="bg-white p-6">
      <TimePicker
        :disabled="disabled"
        @start-time="handleStart"
        @end-time="handleEnd"
      />
      <Input />
    </div>
    <div class="mt-7">
        <RichText/>
      <CommonTable
        v-bind="{
          head,
          data: tableData,
          title: 'Title',
          subtitle: 'Subtitle',
          loading,
          currentPage: 2,
          total: 100,
        }"
        status-key="status"
        :status-colors="{
          active: 'green',
          inactive: 'red',
        }"
        @itemsPerPage="changePerPage"
      >
        <template #afterSearch>
          <div>After Search</div>
        </template>
        <template #beforeSearch>
          <div>beforeSearch</div>
        </template>
        <template #footer>
          <div>Footer</div>
        </template>
      </CommonTable>
    </div>
    <div class="h-screen bg-white mt-7" />
  </div>
</template>

<script setup lang="ts">
import { useMounted } from "@/composables/useMounted";
import SBreadcrumb from "@/components/Common/Breadcrumb/SBreadcrumb.vue";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import TimePicker from "@/components/Form/TimePicker/TimePicker.vue";
import CommonTable from "@/components/Common/Table/CommonTable.vue";
import { head, tableData } from "@/data";
import Input from "@/components/Form/Input/Input.vue";
import RichText from "@/components/RichText/RichText.vue";

const { mounted } = useMounted();
const { t } = useI18n();
const loading = ref(false);

const routes = [
  {
    name: t("main"),
    route: "/",
  },
  {
    name: t("dashboard"),
    route: "/dashboard",
  },
];

const disabled = ref(false);

setTimeout(() => {
  loading.value = false;
}, 2000);

const handleStart = (value: number | string) => {
  console.log(value, "handleStart");
};
const handleEnd = (value: number | string) => {
  console.log(value, "handleEnd");
};

const changePerPage = (value: number) => {
  console.log(value, "changePerPage");
};
</script>

<style scoped></style>
