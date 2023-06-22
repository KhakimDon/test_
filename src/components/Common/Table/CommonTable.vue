<template>
  <div class="p-6 bg-white rounded-xl">
    <slot name="header">
      <header class="flex justify-between mb-6">
        <div>
          <h2 class="text-xl leading-[23px] font-medium text-dark">
            {{ title }}
          </h2>
          <p class="text-xs leading-[14px] font-normal text-gray mt-1.5">
            {{ subtitle }}
          </p>
        </div>
        <div class="flex-y-center gap-5">
          <div class="shrink-0">
            <slot name="beforeSearch" />
          </div>
          <Input
            v-if="!noSearch"
            :placeholder="$t('search')"
            @update:modelValue="$emit('search', $event)"
          />
          <!--          <Input-->
          <!--            v-if="!noSearch"-->
          <!--            :placeholder="$t(searchPlaceholder)"-->
          <!--            v-model="search"-->
          <!--          />-->
          <div class="shrink-0">
            <slot name="afterSearch" />
          </div>
        </div>
      </header>
    </slot>
    <div class="w-full max-w-full overflow-x-auto" :class="wrapperClass">
      <table class="w-full min-w-max c-table">
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
            class="border-b last:border-none border-gray-300 relative"
            :class="[bodyTrClass, { 'bg-white-500': index % 2 !== 0 }]"
          >
            <td
              v-for="(h, idx) in head"
              :key="idx"
              class="py-5 px-4 text-xs"
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
    <div class="flex-center-between mt-6">
      <div>
        <slot name="footer" />
      </div>
      <div class="flex-y-center gap-5">
        <CommonPageLimitChange v-model:itemsPerPage="itemsCountInTable" />
        <CommonPagination
          v-bind="{ total, currentPage, limit }"
          pagination-buttons
          @input="changePagination"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TClassName } from "@/types/common";
import { ITableHead } from "@/types/components/table";
import CommonPreloader from "@/components/Common/Preloader/CommonPreloader.vue";
import Input from "@/components/Form/Input/Input.vue";
import CommonPagination from "@/components/Common/Pagination/CommonPagination.vue";
import CommonPageLimitChange from "@/components/Common/PageLimitChange/CommonPageLimitChange.vue";
import { computed, ref, WritableComputedRef } from "vue";

interface Props {
  head: ITableHead[];
  title?: string;
  subtitle?: string;

  searchPlaceholder?: string;

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
}
const props = withDefaults(defineProps<Props>(), {
  currentPage: 1,
  limit: 10,
  statusKey: "active",
  itemsPerPage: 10,
});

const emit = defineEmits(["search", "itemsPerPage"]);

function getIndex(index: number) {
  return (props?.currentPage - 1) * props?.limit + index + 1;
}

const itemStatus = (row: any) => {
  const nestedKeys = props.statusKey.split(".");
  const lastKey = nestedKeys.pop();
  const nestedObj = nestedKeys.reduce((a, prop) => a[prop], row);
  return props.statusColors[nestedObj[lastKey as keyof typeof nestedObj]];
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
