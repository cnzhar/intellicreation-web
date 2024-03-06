import request from "@/utils/request";

export function categoryList() {
  return request({
    method: "get",
    url: "/category/getCategoryList",
    headers: {
      isToken: true,
    },
  });
}

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

/**
 * 获取可选的一级分类
 * @param query
 * @returns {*}
 */
export function availableCategory1(query) {
  return request({
    method: "get",
    url: "/article/availableCategory1",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

/**
 * 获取可选的二级分类
 * @param query
 * @returns {*}
 */
export function availableCategory2(query) {
  return request({
    method: "get",
    url: "/article/availableCategory2",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

/**
 * 获取可选的标签
 * @returns {*}
 */
export function availableTag(query) {
  return request({
    method: "get",
    url: "/article/availableTag",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

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

/**
 * 更新文章之前，先获取文章信息
 * @param articleId
 * @returns {*}
 */
export function updateArticleInfo(articleId) {
  return request({
    method: "get",
    url: "/article/updateArticleInfo/" + articleId,
    headers: {
      isToken: true,
    },
  });
}

export function updateArticle(article) {
  return request({
    method: "post",
    url: "/article/updateArticle",
    headers: {
      isToken: true,
    },
    data: article,
  });
}

/**
 * 发布评价
 * @param rating
 * @returns {*}
 */
export function postRating(rating) {
  return request({
    method: "post",
    url: "/article/postRating",
    headers: {
      isToken: true,
    },
    data: rating,
  });
}

/**
 * 用户获取评价列表
 * @param query
 * @returns {*}
 */
export function ratingList(query) {
  return request({
    method: "get",
    url: "/article/ratingList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}
