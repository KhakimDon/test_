import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    // the 404 route, when none of the above matches
    path: "/",
    name: "Index",
    meta: {
      layout: "default",
    },
    component: () => import("@/pages/Index/PDashboard.vue"),
  },
  {
    // the 404 route, when none of the above matches
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () => import("@/pages/Auth/PLogin.vue"),
  },
  // {
  //     // the 404 route, when none of the above matches
  //     path: "/404",
  //     name: "404",
  //     component: () => import("@/views/crafted/authentication/Error404.vue"),
  // },
  // {
  //     path: "/500",
  //     name: "500",
  //     component: () => import("@/views/crafted/authentication/Error500.vue"),
  // },
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
