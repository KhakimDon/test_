import { RouteRecordRaw } from "vue-router";
import { RouteName } from "./enums";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/market",
    name: "PMarketIndex",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/Market/pages/Offerings/index.vue"),
    children: [
      // {
      //   path: "",
      //   name: "Market",
      //   meta: {
      //     layout: "default",
      //   },
      //   component: () => import("@/modules/Market/pages/PStocks.vue"),
      // },
      // {
      //   path: "bonds",
      //   name: "MarketBonds",
      //   meta: {
      //     layout: "default",
      //   },
      //   component: () => import("@/modules/Market/pages/PBonds.vue"),
      // },
      // {
      //   path: "offerings",
      //   name: "MarketOfferings",
      //   meta: {
      //     layout: "default",
      //   },
      //   component: () => import("@/modules/Market/pages/Offerings/index.vue"),
      // },
    ],
  },
  {
    path: "/market/offerings/:id",
    name: "OfferingsSingle",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/Market/pages/Offerings/PSingle.vue"),
  },
  {
    path: "/market/offerings/:id/buy-request",
    name: "OfferingsBuy",
    meta: {
      layout: "default",
    },
    component: () => import("@/modules/Market/pages/Offerings/PBuy.vue"),
  },
  {
    path: "/market/:id",
    name: "MarketSingle",
    meta: {
      layout: "empty",
    },
    component: () => import("@/modules/Market/pages/PSingle.vue"),
    children: [
      {
        path: "",
        name: RouteName.MarketSingleGrafic,
        component: () => import("@/modules/Market/pages/PGrafic.vue"),
      },
      {
        path: "cup",
        name: RouteName.MarketSingleCup,
        component: () => import("@/modules/Market/pages/PCup.vue"),
      },
      {
        path: "news",
        name: RouteName.MarketSingleNews,
        component: () => import("@/modules/Market/pages/PNews.vue"),
      },
      {
        path: "analytics",
        name: RouteName.MarketSingleAnalytics,
        component: () => import("@/modules/Market/pages/PAnalytics.vue"),
      },
      {
        path: "dividents",
        name: RouteName.MarketDividents,
        component: () => import("@/modules/Market/pages/PDividents.vue"),
      },
    ],
  },
  {
    path: "/market/:id/news/:id",
    name: "MarketSingleNewsSingle",
    meta: {
      layout: "empty",
    },
    component: () => import("@/modules/Market/pages/PNewsSingle.vue"),
  },
];

export default routes;
