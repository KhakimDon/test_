<template>
  <div>
    <CTableHeader
      :search="filter.search"
      :subtitle="subtitle"
      :title="title"
      @search="handleTableSearch"
    >
      <template #afterSearch>
        <div class="flex-center space-x-5">
          <FDatePicker v-model="filter.date" class="min-w-[244px]" range />
          <CButton :text="$t('add')" class="!px-4" />
        </div>
      </template>
      <template #beforeSearch>
        <slot name="beforeSearch" />
      </template>
    </CTableHeader>
    <CTable
      :current-page="currentPage"
      :data="data"
      :head="head"
      :limit="limit"
      :loading="loading"
      :total="data?.length"
      :type="type"
    >
    </CTable>
    <Transition mode="out-in" name="dropdown">
      <CTableFooter
        v-if="!loading"
        :current-page="currentPage"
        :items-per-page="itemsPerPage"
        :limit="limit"
        :total="total"
        @items-per-page="handleLimitChange"
        @page-change="handlePageChange"
      />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

import CTable from "@/components/Common/Table/CTable.vue";
import CTableHeader from "@/components/Common/Table/CTableHeader.vue";
import CTableFooter from "@/components/Common/Table/CTableFooter.vue";
import { ITableHead } from "@/types/components/table";
import CButton from "@/components/Basse/CButton.vue";
import FDatePicker from "@/components/Form/Date/FDatePicker.vue";

interface Props {
  title?: string;
  subtitle?: string;

  type?: "filled" | "transparent";

  loading?: boolean;

  head: ITableHead[];
  data: Record<string, any>[];

  total?: number;
  limit: number;
  currentPage: number;
  itemsPerPage: number;
}

withDefaults(defineProps<Props>(), {
  type: "transparent",
});
const emit = defineEmits<{
  (e: "search", value: string): void;
  (e: "itemsPerPage", value: number): void;
  (e: "pageChange", value: number): void;
}>();

const filter = reactive({
  status: "all" as "true" | "false",
  search: "",
  date: undefined as string | undefined,
  limit: 10,
  page: 1,
});

function handleClearFilter() {
  filter.date = undefined as string | undefined;
}

function handleTableSearch(q: string) {
  filter.search = q;
}

function handlePageChange(page: number) {
  filter.page = page;
}

function handleLimitChange(limit: number) {
  filter.limit = limit;
  filter.page = 1;
}
</script>

<style scoped></style>
