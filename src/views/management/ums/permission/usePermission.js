import { permissionList } from "@/api/ums";

export function getDefaultData() {
  return {
    permissionQueryParam: {
      id: null,
      permissionName: null,
      permissionKey: null,
      pageNum: 1,
      pageSize: 5,
    },
    permissionList: [],
    fields: [
      { key: "id", label: "ID" },
      { key: "permissionName", label: "权限名" },
      { key: "permissionKey", label: "权限Key" },
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

export const permissionMethods = {
  getPermissionList() {
    this.isBusy = true;
    permissionList(this.permissionQueryParam)
      .then((response) => {
        this.permissionList = response.data.data.rows;
        this.totalRows = response.data.data.total;
        this.isBusy = false;
      })
      .catch((error) => {
        this.$bvToast.toast("查询权限列表失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleReset() {
    this.permissionQueryParam.id = null;
    this.permissionQueryParam.permissionName = null;
    this.permissionQueryParam.permissionKey = null;
    this.getPermissionList();
  },
  handlePageSizeChange(pageSize) {
    this.permissionQueryParam.pageSize = pageSize;
    this.getPermissionList();
  },
  handlePageNumChange(pageNum) {
    this.permissionQueryParam.pageNum = pageNum;
    this.getPermissionList();
  },
  handleAddNew() {
    this.$refs.addNewPermissionModalRef.showModalMethod();
  },
  handleView(item) {
    this.$router.push("/admin/ums/permissionDetail?pid=" + item.id);
  },
  handleEdit(item) {
    this.$refs.editPermissionDetailModalRef.showModalMethod(item.id);
  },
  handleDelete(item) {
    this.$refs.deletePermissionConfirmModalRef.showModalMethod(item.id);
  },
};
