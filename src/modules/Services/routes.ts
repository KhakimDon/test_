import { RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/services",
    name: "PService",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/Services/pages/PServices.vue"),
  },
];

export default routes;
