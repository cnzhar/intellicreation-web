import request from "@/utils/request";

// *==================================================*
// *--------------------- Article --------------------*
// *==================================================*
/**
 * 删除文章
 * @param articleId
 * @returns {*}
 */
export function deleteArticle(articleId) {
  return request({
    method: "delete",
    url: "/articleManagement/deleteArticle/" + articleId,
    headers: {
      isToken: true,
    },
  });
}

/**
 * 获取文章列表
 * @param query
 * @returns {*}
 */
export function articleList(query) {
  return request({
    method: "get",
    url: "/articleManagement/articleList",
    headers: {
      isToken: true,
    },
    params: query,
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
    url: "/articleManagement/getArticleDetail/" + articleId,
    headers: {
      isToken: true,
    },
  });
}

// *==================================================*
// *-------------------- Category --------------------*
// *==================================================*
/**
 * 新增分类
 * @param category
 * @returns {*}
 */
export function addCategory(category) {
  return request({
    method: "post",
    url: "/articleManagement/addCategory",
    headers: {
      isToken: true,
    },
    data: category,
  });
}

/**
 * 删除分类
 * @param categoryId
 * @returns {*}
 */
export function deleteCategory(categoryId) {
  return request({
    method: "delete",
    url: "/articleManagement/deleteCategory/" + categoryId,
    headers: {
      isToken: true,
    },
  });
}

/**
 * 更新分类信息
 * @param category
 * @returns {*}
 */
export function updateCategory(category) {
  return request({
    method: "put",
    url: "/articleManagement/updateCategoryInfo",
    headers: {
      isToken: true,
    },
    data: category,
  });
}

/**
 * 查询分类列表
 * @param query
 * @returns {*}
 */
export function categoryList(query) {
  return request({
    method: "get",
    url: "/articleManagement/categoryList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

/**
 * 查看分类详情
 * @param categoryId
 * @returns {*}
 */
export function getCategory(categoryId) {
  return request({
    method: "get",
    url: "/articleManagement/getCategoryDetail/" + categoryId,
    headers: {
      isToken: true,
    },
  });
}

// *==================================================*
// *---------------------- Tag -----------------------*
// *==================================================*
/**
 * 新增标签
 * @param tag
 * @returns {*}
 */
export function addTag(tag) {
  return request({
    method: "post",
    url: "/articleManagement/addTag",
    headers: {
      isToken: true,
    },
    data: tag,
  });
}

/**
 * 删除标签
 * @param tagId
 * @returns {*}
 */
export function deleteTag(tagId) {
  return request({
    method: "delete",
    url: "/articleManagement/deleteTag/" + tagId,
    headers: {
      isToken: true,
    },
  });
}

/**
 * 更新标签信息
 * @param tag
 * @returns {*}
 */
export function updateTag(tag) {
  return request({
    method: "put",
    url: "/articleManagement/updateTagInfo",
    headers: {
      isToken: true,
    },
    data: tag,
  });
}

/**
 * 查询标签列表
 * @param query
 * @returns {*}
 */
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

/**
 * 查看标签详情
 * @param tagId
 * @returns {*}
 */
export function getTag(tagId) {
  return request({
    method: "get",
    url: "/articleManagement/getTagDetail/" + tagId,
    headers: {
      isToken: true,
    },
  });
}
