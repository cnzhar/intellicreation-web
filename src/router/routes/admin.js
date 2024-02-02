import LayoutHorizontal from "@/views/layout/LayoutHorizontal";

export default [
  {
    path: "/dashboard",
    component: LayoutHorizontal,
    redirect: "/dashboard",
    name: "dashboard",
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("@/views/dashboard"),
      },
    ],
  },
  {
    path: "/user",
    component: LayoutHorizontal,
    redirect: "/user/member",
    name: "user",
    children: [
      {
        path: "member",
        name: "member",
        component: () => import("@/views/management/ums/member/index"),
      },
      {
        path: "menu",
        name: "menu",
        component: () => import("@/views/management/ums/menu/index"),
      },
      {
        path: "permission",
        name: "permission",
        component: () => import("@/views/management/ums/permission/index"),
      },
      {
        path: "role",
        name: "role",
        component: () => import("@/views/management/ums/role/index"),
      },
    ],
  },
];
