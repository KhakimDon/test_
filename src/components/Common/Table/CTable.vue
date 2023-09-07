<template>
  <div class="p-6 bg-white rounded-xl">
    <slot name="header">
      <header class="flex justify-between mb-6">
        <div>
          <h2 class="text-xl leading-23 font-medium text-dark-100">
            {{ title }}
          </h2>
          <p class="text-xs leading-14 font-normal text-gray-200 mt-1.5">
            {{ subtitle }}
          </p>
        </div>
        <div class="flex-y-center gap-5">
          <div class="shrink-0">
            <slot name="beforeSearch" />
          </div>
          <Input
            v-model="search"
            v-if="!noSearch"
            :placeholder="$t('search')"
            @update:modelValue="$emit('search', $event)"
          >
            <template #prefix>
              <span class="icon-search"></span>
            </template>
            <template #suffix>
              <button
                :class="{ '!opacity-100 !visible': search?.length }"
                class="icon-xmark text-dark transition-200 hover:text-red opacity-0 invisible"
                @click="clearSearch"
              />
            </template>
          </Input>
          <div class="flex-shrink-0">
            <slot name="afterSearch" />
          </div>
        </div>
      </header>
    </slot>
    <div class="w-full max-w-full overflow-x-auto" :class="wrapperClass">
      <table class="w-full c-table">
        <thead>
          <tr>
            <th
              v-for="(h, index) in head"
              :key="index"
              class="p-3 bg-white-400 first:rounded-l-md last:rounded-r-md text-xs text-left last:text-right first:pl-4 last:pr-4 text-gray font-semibold"
              :class="[{ 'w-[5%]': h.key === '_index' }, thClass]"
            >
              {{ h.title }}
            </th>
          </tr>
        </thead>
        <tbody v-if="!loading">
          <tr
            v-for="(d, index) in data"
            :key="index"
            class="border-b last:border-none border-gray-400 relative even:bg-white-50"
            :class="[bodyTrClass, { 'bg-white-500': index % 2 !== 0 }]"
          >
            <td
              v-for="(h, idx) in head"
              :key="idx"
              class="py-5 px-4 text-xs text-dark"
              :class="[tdClass]"
            >
              <div
                v-if="idx === 0"
                class="w-1 h-10 absolute left-0 top-2"
                :class="itemStatus(d)"
              />
              <slot :name="h.key" :data="{ ...d, _index: getIndex(index) }">
                {{ h.key === "_index" ? getIndex(index) : d[h.key] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="loading">
        <CommonPreloader loading height="44px" width="100%" class="mt-4" />
        <CommonPreloader
          loading
          height="44px"
          width="100%"
          v-for="i in 9"
          :key="i"
          preloader-class="mt-1"
        />
      </div>
    </div>
    <div v-if="!noFooter" class="flex-center-between py-6">
      <div v-if="!noPagination" class="w-full flex-center-between gap-5">
        <CommonPageLimitChange
          v-model:itemsPerPage="itemsCountInTable"
          v-if="!noLimit && total > 5"
        />
        <CommonPagination
          v-if="totalPages > 1"
          pagination-buttons
          v-bind="{ total, currentPage, limit }"
          @input="$emit('page-change', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TClassName } from "@/types/common";
import { ITableHead } from "@/types/components/table";
import CommonPreloader from "@/components/CPreloader.vue";
import Input from "@/components/Form/Input/FInput.vue";
import CommonPagination from "@/components/Common/Table/CPagination.vue";
import CommonPageLimitChange from "@/components/Common/Table/CPageLimitChange.vue";
import { computed, ref, WritableComputedRef, watch } from "vue";

interface Props {
  head: ITableHead[];
  title?: string;
  subtitle?: string;

  searchPlaceholder?: string;
  search?: string;

  thClass?: TClassName;
  bodyTrClass?: TClassName;
  tdClass?: TClassName;
  wrapperClass?: TClassName;

  data: Record<string, any>[];

  noSearch?: boolean;
  loading?: boolean;
  statusKey?: string;
  statusColors?: any;
  total?: number;
  limit: number;
  currentPage: number;
  itemsPerPage: number;
  noPagination?: boolean;
  noLimit?: boolean;
  noFooter?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  currentPage: 1,
  limit: 5,
  statusKey: "active",
  itemsPerPage: 10,
  noFooter: false,
  noPagination: false,
});

const emit = defineEmits(["search", "itemsPerPage"]);

const search = ref();

const totalPages = computed(() => {
  if (props.total < props.limit) {
    return 1;
  } else {
    return props.total / props.limit;
  }
});

function getIndex(index: number) {
  return (props?.currentPage - 1) * props?.limit + index + 1;
}
function clearSearch() {
  search.value = "";
}
const itemStatus = (row: any) => {
  if (props?.statusKey) return;
  const nestedKeys = props.statusKey.split(".");
  const lastKey = nestedKeys.pop();
  const nestedObj = nestedKeys?.reduce((a, prop) => a[prop], row);
  return props?.statusColors[nestedObj[lastKey as keyof typeof nestedObj]];
};

const inputItemsPerPage = ref(10);

const itemsCountInTable: WritableComputedRef<number> = computed({
  get(): number {
    return props.itemsPerPage;
  },
  set(value: number): void {
    inputItemsPerPage.value = value;
    emit("itemsPerPage", value);
  },
});

watch(
  () => search.value,
  () => {
    emit("search", search.value);
  }
);

watch(
  () => props?.search,
  () => {
    search.value = props?.search;
  },
  { immediate: true }
);
</script>

<style>
.green::before,
.red::before,
.yellow::before,
.gray::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 32px;
  width: 4px;
  border-radius: 0 4px 4px 0;
}

.green::before {
  background-color: #5dc08d;
}

.red::before {
  background-color: #ee5253;
}

.gray::before {
  background-color: #c6cfd7;
}
.yellow::before {
  background-color: #ff8c01;
}
</style>
