import request from "@/utils/request";

// 登录方法
export function login(member) {
  return request({
    url: "/login",
    headers: {
      isToken: false,
    },
    method: "post",
    data: member,
  });
}
