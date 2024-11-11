import { defineStore } from "pinia";
import { useApi } from "~/composables/useApi.ts";

export const useAuthStore = defineStore("authStore", {
  state: () => ({}),

  actions: {
    getToken() {
      useApi()
        .$post("GetToken/", {
          pinfl: "52404017050031",
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
