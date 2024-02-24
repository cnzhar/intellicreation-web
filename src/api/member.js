import request from "@/utils/request";

/**
 * 登录方法
 * @param member
 * @returns {*}
 */
export function login(member) {
  return request({
    method: "post",
    url: "/member/login",
    headers: {
      isToken: false,
    },
    data: member,
  });
}

/**
 * 登录方法
 * @returns {*}
 */
export function logout() {
  return request({
    method: "post",
    url: "/member/logout",
    headers: {
      isToken: true,
    },
  });
}

/**
 * 注册方法
 * @param member
 * @returns {*}
 */
export function register(member) {
  return request({
    method: "post",
    url: "/member/register",
    headers: {
      isToken: false,
    },
    data: member,
  });
}

/**
 * 查询菜单
 * @returns {*}
 */
export function routerList() {
  return request({
    method: "get",
    url: "/member/getRouter",
    headers: {
      isToken: true,
    },
  });
}
