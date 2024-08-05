import { RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    name: "PMain",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/Main/pages/PMain.vue"),
  },
];

export default routes;
