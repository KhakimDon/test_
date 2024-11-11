import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainRoutes from "@/modules/Main/routes";
import AuthRoutes from "@/modules/Auth/routes";
import ProfileRoutes from "@/modules/Profile/routes";
import PortfolioRoutes from "@/modules/Portfolio/routes";
import MarketRoutes from "@/modules/Market/routes";
import WithdrawRoutes from "@/modules/Withdraw/routes";

const routes: Array<RouteRecordRaw> = [
  ...MainRoutes,
  ...AuthRoutes,
  ...ProfileRoutes,
  ...PortfolioRoutes,
  ...MarketRoutes,
  ...WithdrawRoutes,
  {
    path: "/demo",
    name: "PDemo",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/Demo.vue"),
  },
  {
    path: "/transactions",
    name: "PIndex",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/Transaction/pages/PIndex.vue"),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '',
        name:"sold-spo",
        component: () => import("@/modules/Transaction/pages/PSold.vue"),
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        name:"purchased-spo",
        path: 'purchased-spo',
        component: () => import("@/modules/Transaction/pages/Purchased.vue")
      },
    ],
  },
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
