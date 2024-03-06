import { mineArticle } from "@/api/mine";

export function getDefaultData() {
  return {
    mineArticleList: [],
  };
}

export const mineArticleMethods = {
  getMineArticle() {
    mineArticle()
      .then((response) => {
        this.mineArticleList = response.data.data.rows;
      })
      .catch((error) => {
        this.$bvToast.toast(error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleEdit(articleId) {
    let url = window.location.origin + "/creation/index?aid=" + articleId;
    window.open(url, "_blank");
  },
};
