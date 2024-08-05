import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthRoutes from "@/modules/Auth/routes";
import ProfileRoutes from "@/modules/Profile/routes";

const routes: Array<RouteRecordRaw> = [
  ...AuthRoutes,
  ...ProfileRoutes,

  {
    path: "/:pathMatch(.*)*",
    meta: {
      layout: "error",
    },
    component: () => import("@/layout/Error/LError.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
