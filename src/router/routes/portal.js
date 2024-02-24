import LayoutHorizontal from "@/views/layout/LayoutHorizontal";

export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/mine/Login"),
  },
  {
    path: "/",
    component: LayoutHorizontal,
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
    component: LayoutHorizontal,
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
    component: LayoutHorizontal,
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
    component: LayoutHorizontal,
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
        component: () => import("@/views/read/ArticleDetail"),
      },
    ],
  },
  {
    path: "/community",
    component: LayoutHorizontal,
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
    component: LayoutHorizontal,
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
