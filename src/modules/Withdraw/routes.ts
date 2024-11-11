import { RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/withdraw",
    name: "PWithdraw",
    meta: {
      layout: "empty",
    },
    component: () => import("@/modules/Withdraw/pages/PWithdraw.vue"),
  },
];

export default routes;
