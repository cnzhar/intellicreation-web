import request from "@/utils/request";

/**
 * 查询文章列表
 * @param query
 * @returns {*}
 */
export function articleList(query) {
  return request({
    method: "get",
    url: "/article/articleList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

/**
 * 查询最热文章
 * @returns {*}
 */
export function hotArticleList() {
  return request({
    method: "get",
    url: "/article/hotArticleList",
    headers: {
      isToken: true,
    },
  });
}

/**
 * 获取文章详情
 * @param articleId
 * @returns {*}
 */
export function getArticle(articleId) {
  return request({
    method: "get",
    url: "/article/" + articleId,
    headers: {
      isToken: true,
    },
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

/**
 * 新增一篇文章
 * @param article
 * @returns {*}
 */
export function addArticle(article) {
  return request({
    method: "post",
    url: "/article/addArticle",
    headers: {
      isToken: true,
    },
    data: article,
  });
}
