import { articleList } from "@/api/ams";

export function getDefaultData() {
  return {
    articleQueryParam: {
      id: null,
      menuName: null,
      path: null,
      pageNum: 1,
      pageSize: 5,
    },
    articleList: [],
    fields: [
      { key: "id", label: "ID" },
      { key: "title", label: "标题" },
      { key: "authorId", label: "作者" },
      { key: "actions", label: "操作" },
    ],
    isBusy: false,
    pageSizeOptions: [
      { value: 5, text: "每页5条" },
      { value: 10, text: "每页10条" },
      { value: 15, text: "每页15条" },
      { value: 30, text: "每页30条" },
    ],
    totalRows: 0,
  };
}

export const articleMethods = {
  getArticleList() {
    this.isBusy = true;
    articleList(this.articleQueryParam)
      .then((response) => {
        this.articleList = response.data.data.rows;
        this.totalRows = response.data.data.total;
        this.isBusy = false;
      })
      .catch((error) => {
        this.$bvToast.toast("查询标签列表失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleView(item) {
    this.$router.push("/admin/ams/articleDetail?aid=" + item.id);
  },
};
