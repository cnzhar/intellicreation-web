import request from "@/utils/request";

/**
 * 发布帖子
 * @param post
 * @returns {*}
 */
export function createPost(post) {
  return request({
    method: "post",
    url: "/community/createPost",
    headers: {
      isToken: true,
    },
    data: post,
  });
}

/**
 * 获取帖子
 * @param query
 * @returns {*}
 */
export function postList(query) {
  return request({
    method: "get",
    url: "/community/postList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

/**
 * 帖子详情
 * @param postId
 * @returns {*}
 */
export function postDetail(postId) {
  return request({
    method: "get",
    url: "/community/postDetail/" + postId,
    headers: {
      isToken: true,
    },
  });
}

/**
 * 查询帖子评论列表
 * @param query
 * @returns {*}
 */
export function commentList(query) {
  return request({
    method: "get",
    url: "/comment/commentList",
    headers: {
      isToken: true,
    },
    params: query,
  });
}
