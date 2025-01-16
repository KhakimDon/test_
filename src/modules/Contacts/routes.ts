import { RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/contacts",
    name: "PContacts",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/Contacts/pages/PContacts.vue"),
  },
];

export default routes;
