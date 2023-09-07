<template>
  <div class="p-6 bg-white rounded-xl">
    <Transition name="dropdown" mode="out-in">
      <slot name="header" v-if="!loading" />
    </Transition>
    <div
      class="relative w-full max-w-full overflow-x-auto"
      :class="wrapperClass"
    >
      <table class="w-full c-table">
        <thead>
          <Transition name="dropdown" mode="out-in">
            <tr v-if="!loading">
              <th
                v-for="(h, index) in head"
                :key="index"
                class="p-3 bg-white-400 first:rounded-l-md last:rounded-r-md text-xs text-left last:text-right first:pl-4 last:pr-4 text-gray font-semibold"
                :class="[{ 'w-[5%]': h.key === '_index' }, thClass]"
              >
                {{ h.title }}
              </th>
            </tr>
          </Transition>
        </thead>
        <Transition name="dropdown" mode="out-in">
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
                <div v-if="idx === 0" class="w-1 h-10 absolute left-0 top-2" />
                <slot :name="h.key" :data="{ ...d, _index: getIndex(index) }">
                  {{ h.key === "_index" ? getIndex(index) : d[h.key] }}
                </slot>
              </td>
            </tr>
          </tbody>
        </Transition>
      </table>
      <div
        v-if="loading"
        class="w-full h-[500px] flex items-center justify-center"
      >
        <div class="spinner"></div>
      </div>
    </div>
    <Transition name="dropdown" mode="out-in">
      <slot name="footer" v-if="!loading" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { TClassName } from "@/types/common";
import { ITableHead } from "@/types/components/table";

interface Props {
  head: ITableHead[];

  thClass?: TClassName;
  bodyTrClass?: TClassName;
  tdClass?: TClassName;
  wrapperClass?: TClassName;

  data: Record<string, any>[];

  limit: number;
  currentPage: number;

  loading?: boolean;
  statusKey?: string;
  statusColors?: any;
}
const props = withDefaults(defineProps<Props>(), {
  loading: true,
});

function getIndex(index: number) {
  return (props?.currentPage - 1) * props?.limit + index + 1;
}
</script>
<style>
.spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #52618f 94%, #0000) top/9px 9px
      no-repeat,
    conic-gradient(#0000 30%, #52618f);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: spinner-c7wet2 1s infinite linear;
}

@keyframes spinner-c7wet2 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
