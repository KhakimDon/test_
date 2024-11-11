import { RouteLocationRaw } from "vue-router";

export interface IMenu {
  label: string;
  route: RouteLocationRaw;
  icon: `icon-${string}`;
}

export const menu: IMenu[] = [
  {
    label: "menu.main",
    route: { path: "/" },
    icon: "icon-home",
  },
  // {
  //   label: "menu.portfolio",
  //   route: { path: "/portfolio" },
  //   icon: "icon-briefcase",
  // },
  {
    label: "menu.market",
    route: { path: "/market" },
    icon: "icon-charts-historgram",
  },
  {
    label: "menu.transactions",
    route: { path: "/transactions" },
    icon: "icon-arrows-right-left",
  },
];
