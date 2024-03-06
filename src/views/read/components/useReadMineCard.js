import { mineId, readMineCardInfo } from "@/api/mine";

export function getDefaultData() {
  return {
    mineInfo: {},
  };
}

export const readMineCardMethods = {
  getReadMineCardInfo() {
    readMineCardInfo()
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
  goToCreation() {
    this.$router.push("/creation/index");
  },
  goToMineArticlePage() {
    mineId()
      .then((response) => {
        let currentMineId = response.data.data.id;
        if (this.$route.query.mid !== currentMineId) {
          this.$router.push("/mine/MineArticle?mid=" + currentMineId);
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
