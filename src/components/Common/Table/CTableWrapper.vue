<template>
  <div>
    <CTableHeader :title="title" :subtitle="subtitle" @search="handleSearch" />
    <CTable
      :type="type"
      :total="data?.length"
      :data="data"
      :head="head"
      :current-page="currentPage"
      :loading="loading"
      :limit="limit"
    />
    <Transition name="dropdown" mode="out-in">
      <CTableFooter
        v-if="!loading"
        :total="total"
        :items-per-page="itemsPerPage"
        :limit="limit"
        :current-page="currentPage"
        @items-per-page="handlePerPage"
        @page-change="handlePage"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import CTable from "@/components/Common/Table/CTable.vue";
import CTableHeader from "@/components/Common/Table/CTableHeader.vue";
import CTableFooter from "@/components/Common/Table/CTableFooter.vue";
import { ITableHead } from "@/types/components/table";

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

function handleSearch(value: string) {
  emit("search", value);
}
function handlePerPage(value: number) {
  emit("itemsPerPage", value);
}
function handlePage(value: number) {
  emit("pageChange", value);
}
</script>

<style scoped></style>
