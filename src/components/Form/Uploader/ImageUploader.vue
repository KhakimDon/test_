<template>
  <div class="h-full w-auto inline-flex items-center">
    <input
      id="file"
      type="file"
      name="file"
      class="w-0 h-0 absolute"
      accept="image/png, image/jpeg"
      multiple
      @change="handleFile"
    />
    <div class="flex gap-3" v-if="images.length">
      <div
        class="w-[150px] h-[150px] flex-y-center relative rounded transition-300 hover:border-blue cursor-pointer"
        v-for="(item, index) in images"
        :key="index"
      >
        <img
          :src="item.url"
          alt="avatar"
          :key="images"
          class="w-full h-full object-cover relative z-0 rounded"
          @error="item.url = null"
        />
        <div class="absolute top-2 right-2 space-y-2">
          <div
            class="duration-200 transition-all group w-9 h-9 bg-white/[16%] flex items-center justify-center z-20 rounded cursor-pointer border border-transparent hover:scale-110 hover:bg-yellow/20"
            @click="editImage(index)"
          >
            <span
              class="transition-300 icon-edit-square text-white text-2xl group-hover:text-yellow"
            />
          </div>
          <div
            class="duration-200 transition-all group w-9 h-9 bg-white/[16%] flex items-center justify-center z-20 rounded cursor-pointer border border-transparent hover:scale-110 hover:bg-red/20"
            @click="removeImage(index)"
          >
            <span
              class="transition-300 icon-trash text-white text-2xl group-hover:text-red"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-full flex items-center justify-center flex-col rounded transition-300 hover:border-blue cursor-pointer px-6 py-11 border border-solid border-white-100"
      :class="[
        {
          'ml-2': images.length,
          '!border-red': error,
        },
      ]"
      @click="getFile('create')"
    >
      <slot>
        <div class="text-base flex items-center flex-col space-y-4">
          <i class="icon-gallery-add text-blue text-[32px]"></i>
          <span class="leading-16 text-sm text-gray font-normal">
            {{ $t("add_image") }}
          </span>
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps, reactive, watch, ref } from "vue";

const emit = defineEmits(["change"]);
interface Props {
  error: boolean;
  defaultImages?: string[];
}
type image = {
  url: string;
  name: string;
  file: File;
  type: string;
};
const props = defineProps<Props>();
const images = reactive<image[]>([]);
const uploadType = ref("");
const editID = ref(0);

watch(
  () => props.defaultImages,
  (value) => {
    if (value) {
      value.forEach((item) => {
        images.push({
          url: item,
          name: "",
          file: new File([], item),
          type: "image",
        });
      });
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
const handleFile = async (event: Event) => {
  const target = event?.target as HTMLInputElement | null;
  if (target?.files === null) {
    return;
  }
  if (target?.files?.length) {
    for (let key in target?.files) {
      handleUploader(key, target);
    }
  }
  send();
};
const handleUploader = (el: string | number, target) => {
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(target?.files[el]);
    reader.onerror = (error) => reject(error);
  })
    .then((res) => {
      //Do not touch this, or else You will find yourself DEAD!!!
      if (uploadType.value === "create") {
        images.push({
          url: res as string,
          name: target?.files[el].name,
          file: target?.files[el],
          type: "image",
        });
      }
      if (uploadType.value === "edit") {
        images.splice(target[editID.value], 1, {
          url: res as string,
          name: target?.files[el].name,
          file: target?.files[el],
          type: "image",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
const getFile = (type: string) => {
  uploadType.value = type;
  const input = document.getElementById("file");
  input?.click();
};
const removeImage = (index: number) => {
  images.splice(index, 1);
  send();
};
const editImage = (index: number) => {
  editID.value = index;
  getFile("edit");
  // send();
};
function send() {
  emit("change", images);
}
</script>
<style>
.color {
  color: #e74c3c;
}
</style>
