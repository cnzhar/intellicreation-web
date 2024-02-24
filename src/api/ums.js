import request from "@/utils/request";

// 新增用户
export function addMember(member) {
  return request({
    method: "post",
    url: "/memberManagement/addMember",
    headers: {
      isToken: true,
    },
    data: member,
  });
}

// 删除用户
export function deleteMember(memberId) {
  return request({
    method: "delete",
    url: "/memberManagement/deleteMember/" + memberId,
    headers: {
      isToken: true,
    },
  });
}

// 更新用户信息
export function updateMember(member) {
  return request({
    method: "put",
    url: "/memberManagement/updateMemberInfo",
    headers: {
      isToken: true,
    },
    data: member,
  });
}

// 查询用户列表
export function memberList(query) {
  return request({
    method: "get",
    url: "/memberManagement/memberList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

// 查看用户详情
export function getMember(memberId) {
  return request({
    method: "get",
    url: "/memberManagement/getMemberInfo/" + memberId,
    headers: {
      isToken: true,
    },
  });
}

// 获取某个用户拥有的全部角色
export function getRolesByMember(query) {
  return request({
    method: "get",
    url: "/memberManagement/getRolesByMember",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

// 查询用户登录日志列表
export function getMemberLoginLogList(query) {
  return request({
    method: "get",
    url: "/memberManagement/getMemberLoginLog",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

// 新增菜单
export function addMenu(menu) {
  return request({
    method: "post",
    url: "/memberManagement/addMenu",
    headers: {
      isToken: true,
    },
    data: menu,
  });
}

// 删除菜单
export function deleteMenu(menuId) {
  return request({
    method: "delete",
    url: "/memberManagement/deleteMenu/" + menuId,
    headers: {
      isToken: true,
    },
  });
}

// 编辑菜单
export function updateMenu(menu) {
  return request({
    method: "put",
    url: "/memberManagement/updateMenuInfo",
    headers: {
      isToken: true,
    },
    data: menu,
  });
}

// 查询菜单列表
export function menuList(query) {
  return request({
    method: "get",
    url: "/memberManagement/menuList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

// 查看菜单详情
export function getMenu(memberId) {
  return request({
    method: "get",
    url: "/memberManagement/getMenuDetail/" + memberId,
    headers: {
      isToken: true,
    },
  });
}

// 新增权限
export function addPermission(permission) {
  return request({
    method: "post",
    url: "/memberManagement/addPermission",
    headers: {
      isToken: true,
    },
    data: permission,
  });
}

// 删除权限
export function deletePermission(permissionId) {
  return request({
    method: "delete",
    url: "/memberManagement/deletePermission/" + permissionId,
    headers: {
      isToken: true,
    },
  });
}

// 编辑权限
export function updatePermission(permission) {
  return request({
    method: "put",
    url: "/memberManagement/updatePermissionInfo",
    headers: {
      isToken: true,
    },
    data: permission,
  });
}

// 查询权限列表
export function permissionList(query) {
  return request({
    method: "get",
    url: "/memberManagement/permissionList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

// 查看权限详情
export function getPermission(permissionId) {
  return request({
    method: "get",
    url: "/memberManagement/getPermissionDetail/" + permissionId,
    headers: {
      isToken: true,
    },
  });
}

// 获取拥有某个权限的全部角色
export function getRolesByPermission(query) {
  return request({
    method: "get",
    url: "/memberManagement/getRolesByPermission",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

// 新增角色
export function addRole(role) {
  return request({
    method: "post",
    url: "/memberManagement/addRole",
    headers: {
      isToken: true,
    },
    data: role,
  });
}

// 删除角色
export function deleteRole(roleId) {
  return request({
    method: "delete",
    url: "/memberManagement/deleteRole/" + roleId,
    headers: {
      isToken: true,
    },
  });
}

// 编辑角色
export function updateRole(role) {
  return request({
    method: "put",
    url: "/memberManagement/updateRoleInfo",
    headers: {
      isToken: true,
    },
    data: role,
  });
}

// 查询角色列表
export function roleList(query) {
  return request({
    method: "get",
    url: "/memberManagement/roleList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

// 查看角色详情
export function getRole(roleId) {
  return request({
    method: "get",
    url: "/memberManagement/getRoleDetail/" + roleId,
    headers: {
      isToken: true,
    },
  });
}

// 获取某个角色所拥有的全部权限
export function getPermissionListByRole(query) {
  return request({
    method: "get",
    url: "/memberManagement/getPermissionsByRole",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

// 获取拥有某个角色的全部用户
export function getMemberListByRole(query) {
  return request({
    method: "get",
    url: "/memberManagement/getMembersByRole",
    headers: {
      isToken: true,
    },
    params: query,
  });
}
