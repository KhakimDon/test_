import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthRoutes from "@/modules/Auth/routes";
import DashboardRoutes from "@/modules/Dashboard/routes";

const routes: Array<RouteRecordRaw> = [
  ...AuthRoutes,
  ...DashboardRoutes,

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
