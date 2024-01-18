import request from "@/utils/request";

// 查询文章列表
export function articleList(query) {
  return request({
    method: "get",
    url: "/article/articleList",
    headers: {
      isToken: false,
    },
    params: query,
  });
}

// 查询最热文章
export function hotArticleList() {
  return request({
    method: "get",
    url: "/article/hotArticleList",
    headers: {
      isToken: false,
    },
  });
}

// 获取文章详情
export function getArticle(articleId) {
  return request({
    url: "/article/" + articleId,
    headers: {
      isToken: false,
    },
    method: "get",
  });
}

// export function updateViewCount(articleId) {
//   return request({
//     url: "/article/updateViewCount/" + articleId,
//     headers: {
//       isToken: false,
//     },
//     method: "put",
//   });
// }
