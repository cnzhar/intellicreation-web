import request from "@/utils/request";

// 查询标签列表
export function tagList(query) {
  return request({
    method: "get",
    url: "/articleManagement/tagList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}
