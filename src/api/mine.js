import request from "@/utils/request";

/**
 * 获取用户id
 * @returns {*}
 */
export function mineId() {
  return request({
    method: "get",
    url: "/mine/mineId",
    headers: {
      isToken: true,
    },
  });
}

/**
 * 获取顶部导航栏信息
 * @returns {*}
 */
export function mineNavInfo() {
  return request({
    method: "get",
    url: "/mine/mineNavInfo",
    headers: {
      isToken: true,
    },
  });
}

/**
 * 个人信息页顶部信息
 * @returns {*}
 */
export function headerInfo(query) {
  return request({
    method: "get",
    url: "/mine/headerInfo",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

/**
 * 获取阅读页面“我的”卡片信息
 * @returns {*}
 */
export function readMineCardInfo() {
  return request({
    method: "get",
    url: "/mine/readMineCardInfo",
    headers: {
      isToken: true,
    },
  });
}

/**
 * 获取社区页面“我的”卡片信息
 * @returns {*}
 */
export function communityMineCardInfo() {
  return request({
    method: "get",
    url: "/mine/communityMineCardInfo",
    headers: {
      isToken: true,
    },
  });
}

/**
 * 个人基础信息
 * @returns {*}
 */
export function mineBasicInfo(query) {
  return request({
    method: "get",
    url: "/mine/mineBasicInfo",
    headers: {
      isToken: true,
    },
    params: query,
  });
}

/**
 * 修改个人信息页面，需要先获取信息
 * @returns {*}
 */
export function mineEditInfo() {
  return request({
    method: "get",
    url: "/mine/mineEditInfo",
    headers: {
      isToken: true,
    },
  });
}

/**
 * 更新个人信息
 * @param mine
 * @returns {*}
 */
export function updateMineInfo(mine) {
  return request({
    method: "put",
    url: "/mine/updateMineInfo",
    headers: {
      isToken: true,
    },
    data: mine,
  });
}

/**
 * 我的文章
 * @returns {*}
 */
export function mineArticle() {
  return request({
    method: "get",
    url: "/mine/mineArticle",
    headers: {
      isToken: true,
    },
  });
}
