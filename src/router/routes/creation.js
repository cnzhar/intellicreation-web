import LayoutHorizontal from "@/views/layout/LayoutHorizontal";

export default [
  {
    path: "/creation",
    component: LayoutHorizontal,
    redirect: "/creation/index",
    name: "/creation",
    children: [
      {
        path: "index",
        name: "creation-index",
        component: () => import("@/views/creation"),
      },
    ],
  },
];
