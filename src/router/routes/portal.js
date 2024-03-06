import LayoutHorizontal from "@/views/layout/LayoutHorizontal";
import LayoutCategory from "@/views/layout/LayoutCategory";

export default [
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
    path: "/CategoryRead",
    component: LayoutCategory,
    redirect: "/CategoryRead/index",
    name: "CategoryRead",
    children: [
      {
        path: "index",
        name: "CategoryRead-index",
        component: () => import("@/views/CategoryRead"),
      },
    ],
  },
];
