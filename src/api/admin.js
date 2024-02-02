import request from "@/utils/request";

// 查询菜单
export function routerList() {
  return request({
    method: "get",
    url: "/getRouter",
    headers: {
      isToken: true,
    },
  });
}

// 查询用户列表
export function memberList(query) {
  return request({
    method: "get",
    url: "/member/memberList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

// 查询角色列表
export function roleList(query) {
  return request({
    method: "get",
    url: "/role/roleList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

// 查询权限列表
export function permissionList(query) {
  return request({
    method: "get",
    url: "/permission/permissionList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

// 查询菜单列表
export function menuList(query) {
  return request({
    method: "get",
    url: "/menu/menuList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}
