import { mineId } from "@/api/mine";

export function getDefaultData() {
  return {
    currentMenuList: null,
    mid: null,
    mineMenuList: [
      {
        menuName: "基础信息",
        path: "/mine/index?mid=",
      },
      {
        menuName: "编辑信息",
        path: "/mine/EditMineInfo?mid=",
      },
      {
        menuName: "我的作品",
        path: "/mine/MineArticle?mid=",
      },
      {
        menuName: "我的作品集",
        path: "/mine/MineCollection?mid=",
      },
      {
        menuName: "我的收藏夹",
        path: "/mine/MineFavorite?mid=",
      },
      {
        menuName: "关注列表",
        path: "/mine/FollowList?mid=",
      },
      {
        menuName: "浏览历史",
        path: "/mine/BrowsingHistory?mid=",
      },
      {
        menuName: "最近点赞",
        path: "/mine/RecentLike?mid=",
      },
      {
        menuName: "登录日志",
        path: "/mine/LoginLog?mid=",
      },
    ],
    otherMenuList: [
      {
        menuName: "基础信息",
        path: "/mine/index?mid=",
      },
      {
        menuName: "TA的作品",
        path: "/mine/MineArticle?mid=",
      },
      {
        menuName: "TA的作品集",
        path: "/mine/MineCollection?mid=",
      },
      {
        menuName: "TA的收藏夹",
        path: "/mine/MineFavorite?mid=",
      },
      {
        menuName: "TA的关注列表",
        path: "/mine/FollowList?mid=",
      },
    ],
    selectedNavItem: "",
  };
}

export const mimeSideBarMethods = {
  setActive() {
    this.selectedNavItem = window.location.pathname;
  },
  setIsMineSpace() {
    mineId()
      .then((response) => {
        let targetId = this.$route.query.mid;
        let currentMineId = response.data.data.id;
        this.mid = targetId;
        if (targetId === currentMineId || targetId === undefined) {
          this.currentMenuList = this.mineMenuList;
        } else {
          this.currentMenuList = this.otherMenuList;
        }
      })
      .catch((error) => {
        this.$bvToast.toast(error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
};
