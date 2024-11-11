import { RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/portfolio",
    name: "Portfolio",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/Portfolio/pages/PIndex.vue"),
  },
];

export default routes;
