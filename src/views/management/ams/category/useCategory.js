import { categoryList } from "@/api/ams";

export function getDefaultData() {
  return {
    categoryQueryParam: {
      id: null,
      menuName: null,
      path: null,
      pageNum: 1,
      pageSize: 5,
    },
    categoryList: [],
    fields: [
      { key: "id", label: "ID" },
      { key: "name", label: "标签名" },
      { key: "description", label: "描述" },
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

export const categoryMethods = {
  getCategoryList() {
    this.isBusy = true;
    categoryList(this.categoryQueryParam)
      .then((response) => {
        this.categoryList = response.data.data.rows;
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
  handlePageSizeChange(pageSize) {
    this.categoryQueryParam.pageSize = pageSize;
    this.getCategoryList();
  },
  handlePageNumChange(pageNum) {
    this.categoryQueryParam.pageNum = pageNum;
    this.getCategoryList();
  },
  handleView(item) {
    this.$router.push("/admin/ams/categoryDetail?cid=" + item.id);
  },
};
