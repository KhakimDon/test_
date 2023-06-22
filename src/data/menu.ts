interface IMenu {
  heading: string;
  route: string;
  svgIcon: string;
  meta?: {
    role: string[];
  };
  sub?: {
    heading: string;
    route: string;
  }[];
}

export const menu: IMenu[] = [
  {
    heading: "menus.main",
    route: "/",
    svgIcon: "icon-home",
  },
  {
    heading: "menus.general_statistics",
    route: "/dashboard",
    svgIcon: "icon-repeat",
    meta: {
      role: ["super_admin"],
    },
  },
  {
    heading: "menus.partners",
    route: "/dashboard/partners",
    svgIcon: "icon-rocket",
    sub: [
      {
        heading: "menus.all_partners",
        route: "/dashboard/partners/all",
      },
      {
        heading: "menus.partners_categories",
        route: "/dashboard/partners/categories",
      },
    ],
    meta: {
      role: ["super_admin"],
    },
  },
  {
    heading: "menus.services",
    route: "/dashboard/services",
    svgIcon: "icon-credit-card",
    meta: {
      role: ["super_admin"],
    },
  },

  {
    heading: "menus.partners",
    route: "/dashboard/partners",
    svgIcon: "icon-rocket",
    sub: [
      {
        heading: "menus.all_partners",
        route: "/dashboard/partners",
      },
      {
        heading: "menus.partners_categories",
        route: "/dashboard/partners/categoriesa",
      },
    ],
    meta: {
      role: ["super_admin"],
    },
  },
];
