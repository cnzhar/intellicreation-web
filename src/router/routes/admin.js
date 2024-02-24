import LayoutVertical from "@/views/layout/LayoutVertical";

export default [
  {
    path: "/admin",
    component: LayoutVertical,
    redirect: "/admin/dashboard",
    name: "admin",
  },
  // *==================================================*
  // *------------------- DASHBOARD --------------------*
  // *==================================================*
  {
    path: "/admin/dashboard",
    component: LayoutVertical,
    redirect: "/admin/dashboard/businessDashboard",
    name: "dashboard",
    children: [
      {
        path: "businessDashboard",
        name: "businessDashboard",
        component: () =>
          import("@/views/management/dashboard/businessDashboard"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "业务数据", active: true },
          ],
        },
      },
      {
        path: "trafficDashboard",
        name: "trafficDashboard",
        component: () =>
          import("@/views/management/dashboard/trafficDashboard"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "流量数据", active: true },
          ],
        },
      },
    ],
  },
  // *==================================================*
  // *--------------------- USER -----------------------*
  // *==================================================*
  {
    path: "/admin/ums",
    component: LayoutVertical,
    redirect: "/admin/ums/member",
    name: "ums",
    children: [
      {
        path: "member",
        name: "member",
        component: () => import("@/views/management/ums/member/index"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "用户", to: { name: "member" }, active: false },
            { text: "用户管理", active: true },
          ],
        },
      },
      {
        path: "memberDetail",
        name: "memberDetail",
        component: () =>
          import("@/views/management/ums/member/ViewMemberDetail"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "用户", to: { name: "member" }, active: false },
            { text: "用户管理", to: { name: "member" }, active: false },
            { text: "用户详情", active: true },
          ],
        },
      },
      {
        path: "menu",
        name: "menu",
        component: () => import("@/views/management/ums/menu/index"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "用户", to: { name: "member" }, active: false },
            { text: "菜单管理", active: true },
          ],
        },
      },
      {
        path: "menuDetail",
        name: "menuDetail",
        component: () => import("@/views/management/ums/menu/ViewMenuDetail"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "用户", to: { name: "member" }, active: false },
            { text: "菜单管理", to: { name: "menu" }, active: false },
            { text: "菜单详情", active: true },
          ],
        },
      },
      {
        path: "permission",
        name: "permission",
        component: () => import("@/views/management/ums/permission/index"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "用户", to: { name: "member" }, active: false },
            { text: "权限管理", active: true },
          ],
        },
      },
      {
        path: "permissionDetail",
        name: "permissionDetail",
        component: () =>
          import("@/views/management/ums/permission/ViewPermissionDetail"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "用户", to: { name: "member" }, active: false },
            { text: "权限管理", to: { name: "permission" }, active: false },
            { text: "权限详情", active: true },
          ],
        },
      },
      {
        path: "role",
        name: "role",
        component: () => import("@/views/management/ums/role/index"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "用户", to: { name: "member" }, active: false },
            { text: "角色管理", active: true },
          ],
        },
      },
      {
        path: "roleDetail",
        name: "roleDetail",
        component: () => import("@/views/management/ums/role/ViewRoleDetail"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "用户", to: { name: "member" }, active: false },
            { text: "角色管理", to: { name: "role" }, active: false },
            { text: "角色详情", active: true },
          ],
        },
      },
    ],
  },
  // *==================================================*
  // *-------------------- ARTICLE ---------------------*
  // *==================================================*
  {
    path: "/admin/ams",
    component: LayoutVertical,
    redirect: "admin/ams/article",
    name: "ams",
    children: [
      {
        path: "article",
        name: "article",
        component: () => import("@/views/management/ams/article/index"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "文章", to: { name: "article" }, active: false },
            { text: "文章管理", active: true },
          ],
        },
      },
      {
        path: "category",
        name: "category",
        component: () => import("@/views/management/ams/category/index"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "文章", to: { name: "article" }, active: false },
            { text: "分类管理", active: true },
          ],
        },
      },
      {
        path: "tag",
        name: "tag",
        component: () => import("@/views/management/ams/tag/index"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "文章", to: { name: "article" }, active: false },
            { text: "标签管理", active: true },
          ],
        },
      },
      {
        path: "tagDetail",
        name: "tagDetail",
        component: () => import("@/views/management/ams/tag/ViewTagDetail"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "文章", to: { name: "article" }, active: false },
            { text: "标签管理", to: { name: "tag" }, active: false },
            { text: "标签详情", active: true },
          ],
        },
      },
      {
        path: "community",
        name: "community",
        component: () => import("@/views/management/ams/community/index"),
        meta: {
          breadcrumb: [
            { text: "首页", to: { name: "admin" }, active: false },
            { text: "文章", to: { name: "article" }, active: false },
            { text: "社区管理", active: true },
          ],
        },
      },
    ],
  },
];
