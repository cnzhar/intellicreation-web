import { articleList } from "@/api/article";

export function getDefaultData() {
  return {
    articleList: [],
    // 查询参数
    queryParams: {
      pageNum: 1,
      pageSize: 5,
    },
    hasMore: true,
    allowLoad: true,
  };
}

export const readMethods = {
  // 拉到底时，加载更多文章
  handleScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      this.allowLoad
    ) {
      this.loadMoreArticles();
    }
  },
  // 获取文章列表
  loadMoreArticles() {
    this.allowLoad = false;
    // 如果没有更多数据了，则不加载
    if (!this.hasMore) {
      return;
    }
    articleList(this.queryParams)
      .then((response) => {
        this.articleList = this.articleList.concat(response.data.data.rows);
        if (response.data.data.total > this.articleList.length) {
          this.queryParams.pageNum++;
          console.log(response.data.data.total);
          console.log(this.articleList.length);
        } else {
          // 没有更多数据了
          this.hasMore = false;
        }
        this.allowLoad = true;
      })
      .catch((error) => {
        this.$bvToast.toast(error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
        this.allowLoad = true;
      });
  },
  handleArticleDetail(id) {
    this.$router.push("/read/DetailArticle?aid=" + id);
  },
  toMemberSpace(memberId) {
    let url = window.location.origin + "/mine/index?mid=" + memberId;
    window.open(url, "_blank");
  },
};
