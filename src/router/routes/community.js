import LayoutHorizontal from "@/views/layout/LayoutHorizontal";

export default [
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
      {
        path: "PostDetail",
        name: "PostDetail",
        component: () => import("@/views/community/PostDetail"),
      },
      {
        path: "CreatePost",
        name: "CreatePost",
        component: () => import("@/views/community/CreatePost"),
      },
    ],
  },
];
