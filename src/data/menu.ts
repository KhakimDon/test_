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
    heading: "menus.news",
    route: "/",
    svgIcon: "icon-docs",
  },
  {
    heading: "menus.posts",
    route: "",
    svgIcon: "icon-docs",
    sub: [
      {
        heading: "menus.article_authors",
        route: "/article/authors",
      },
      {
        heading: "menus.spec_reports",
        route: "/article/reports",
      },
      {
        heading: "menus.speakers",
        route: "/article/speakers",
      },
      {
        heading: "menus.discussion",
        route: "/article/discussion",
      },
    ],
    meta: {
      role: ["super_admin"],
    },
  },
  {
    heading: "menus.photo_report",
    route: "/gallery",
    svgIcon: "icon-photo",
    meta: {
      role: ["super_admin"],
    },
  },

  {
    heading: "menus.interview",
    route: "/interview",
    svgIcon: "icon-play",
    meta: {
      role: ["super_admin"],
    },
  },
  {
    heading: "menus.podcasts",
    route: "/podcasts",
    svgIcon: "icon-microphone",
    meta: {
      role: ["super_admin"],
    },
  },
];
