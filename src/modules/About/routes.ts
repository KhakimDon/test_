import { RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/about",
    name: "PAbout",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/About/pages/PAbout.vue"),
  },
];

export default routes;
