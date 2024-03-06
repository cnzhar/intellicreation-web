import { communityMineCardInfo } from "@/api/mine";

export function getDefaultData() {
  return {
    mineInfo: {
      exp: null,
    },
  };
}

export const communityMineCardMethods = {
  getCommunityMineCardInfo() {
    communityMineCardInfo()
      .then((response) => {
        this.mineInfo = response.data.data;
      })
      .catch((error) => {
        this.$bvToast.toast("获取信息失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleCreatePost() {
    this.$router.push("/community/CreatePost");
  },
};
