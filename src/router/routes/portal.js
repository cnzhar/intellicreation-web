import LayoutVertical from "@/views/layout/LayoutVertical";

export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/mine/Login"),
  },
  {
    path: "/",
    component: LayoutVertical,
    redirect: "/home",
    name: "home",
    children: [
      {
        path: "/home",
        name: "home-index",
        component: () => import("@/views/Home/index"),
      },
    ],
  },
  {
    path: "/home",
    component: LayoutVertical,
    redirect: "/home",
    name: "home",
    children: [
      {
        path: "",
        name: "home-index",
        component: () => import("@/views/Home/index"),
      },
    ],
  },
  {
    path: "/creation",
    component: LayoutVertical,
    redirect: "/creation/index",
    name: "/creation",
    children: [
      {
        path: "index",
        name: "/creation-index",
        component: () => import("@/views/creation"),
      },
    ],
  },
  {
    path: "/read",
    component: LayoutVertical,
    redirect: "/read/index",
    name: "read",
    children: [
      {
        path: "index",
        name: "read-index",
        component: () => import("@/views/read"),
      },
      // 文章详情
      {
        path: "DetailArticle",
        name: "DetailArticle",
        component: () => import("@/views/read/DetailArticle"),
      },
    ],
  },
  {
    path: "/community",
    component: LayoutVertical,
    redirect: "/community/index",
    name: "community",
    children: [
      {
        path: "index",
        name: "community-index",
        component: () => import("@/views/community"),
      },
    ],
  },
  {
    path: "/mine",
    component: LayoutVertical,
    redirect: "/mine/index",
    name: "mine",
    children: [
      {
        path: "index",
        name: "mine-index",
        component: () => import("@/views/mine"),
      },
    ],
  },
];
