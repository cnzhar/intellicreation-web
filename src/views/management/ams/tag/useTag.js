import { tagList } from "@/api/ams";

export function getDefaultData() {
  return {
    tagQueryParam: {
      id: null,
      name: null,
      remark: null,
      pageNum: 1,
      pageSize: 5,
    },
    tagList: [],
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

export const tagMethods = {
  getTagList() {
    this.isBusy = true;
    tagList(this.tagQueryParam)
      .then((response) => {
        this.tagList = response.data.data.rows;
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
    this.tagQueryParam.pageSize = pageSize;
    this.getTagList();
  },
  handlePageNumChange(pageNum) {
    this.tagQueryParam.pageNum = pageNum;
    this.getTagList();
  },
  handleAddNew() {
    this.$refs.addNewTagModalRef.showModalMethod();
    this.getMemberList();
  },
  handleView(item) {
    this.$router.push("/admin/ams/tagDetail?tid=" + item.id);
  },
  handleEdit(item) {
    this.$refs.editTagModalRef.showModalMethod(item.id);
  },
  handleDelete(item) {
    this.$refs.deleteTagConfirmModalRef.showModalMethod(item.id);
  },
};
