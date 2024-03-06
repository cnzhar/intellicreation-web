import LayoutMine from "@/views/layout/LayoutMine";

export default [
  {
    path: "/mine",
    component: LayoutMine,
    redirect: "/mine/index",
    name: "mine",
    children: [
      {
        path: "index",
        name: "mine-index",
        component: () => import("@/views/mine"),
      },
      {
        path: "EditMineInfo",
        name: "EditMineInfo",
        component: () => import("@/views/mine/EditMineInfo"),
      },
      {
        path: "MineArticle",
        name: "MineArticle",
        component: () => import("@/views/mine/MineArticle"),
      },
      {
        path: "MineCollection",
        name: "MineCollection",
        component: () => import("@/views/mine/MineCollection"),
      },
      {
        path: "MineFavorite",
        name: "MineFavorite",
        component: () => import("@/views/mine/MineFavorite"),
      },
      {
        path: "FollowList",
        name: "FollowList",
        component: () => import("@/views/mine/FollowList"),
      },
      {
        path: "BrowsingHistory",
        name: "BrowsingHistory",
        component: () => import("@/views/mine/BrowsingHistory"),
      },
      {
        path: "RecentLike",
        name: "RecentLike",
        component: () => import("@/views/mine/RecentLike"),
      },
      {
        path: "LoginLog",
        name: "LoginLog",
        component: () => import("@/views/mine/LoginLog"),
      },
    ],
  },
];
