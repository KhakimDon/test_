import { RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/news",
    name: "PNews",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/News/pages/PNews.vue"),
  },
  {
    path: "/news/add",
    name: "PNewsAdd",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/News/pages/PNewsAdd.vue"),
  },
  {
    path: "/news/:id/edit",
    name: "PNewsEdit",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/News/pages/PNewsEdit.vue"),
  },
];

export default routes;
