import { RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/products",
    name: "PProducts",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/Products/pages/PProducts.vue"),
  },
];

export default routes;
