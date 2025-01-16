import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainRoutes from "@/modules/Main/routes";
import ServicesRoutes from "@/modules/Services/routes";
import ProductsRoutes from "@/modules/Products/routes";
import AboutRoutes from "@/modules/About/routes";
import ContactsRoutes from "@/modules/Contacts/routes";

const routes: Array<RouteRecordRaw> = [
  ...MainRoutes,
  ...ServicesRoutes,
  ...ProductsRoutes,
  ...AboutRoutes,
  ...ContactsRoutes,
  // this is for 404 page
  {
    path: "/:pathMatch(.*)*",
    meta: {
      layout: "error",
    },
    component: () => import("@/layout/LError.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
