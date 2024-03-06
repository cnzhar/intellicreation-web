import { articleList } from "@/api/article";

export function getDefaultData() {
  return {
    skeletonLoading: false,
    articleList: [],
    // 查询参数
    queryParams: {
      pageNum: 1,
      pageSize: 10,
      category1Id: null,
      category2Id: null,
    },
    hasMore: true,
  };
}

export const categoryReadMethods = {
  // 获取文章列表
  getArticleList() {
    this.skeletonLoading = true;
    this.queryParams.category1Id = this.$route.query.category1Id;
    this.queryParams.category2Id = this.$route.query.category2Id;
    articleList(this.queryParams)
      .then((response) => {
        this.articleList = response.data.data.rows;
        this.skeletonLoading = false;
      })
      .catch((error) => {
        this.$bvToast.toast(error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleArticleDetail(id) {
    this.$router.push("/read/DetailArticle?aid=" + id);
  },
};
