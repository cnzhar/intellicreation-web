import { roleList } from "@/api/ums";

export function getDefaultData() {
  return {
    roleQueryParam: {
      id: null,
      roleName: null,
      roleKey: null,
      pageNum: 1,
      pageSize: 5,
    },
    roleList: [],
    fields: [
      { key: "id", label: "ID" },
      { key: "roleName", label: "角色名" },
      { key: "roleKey", label: "角色Key" },
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

export const roleMethods = {
  getRoleList() {
    this.isBusy = true;
    roleList(this.roleQueryParam)
      .then((response) => {
        this.roleList = response.data.data.rows;
        this.totalRows = response.data.data.total;
        this.isBusy = false;
      })
      .catch((error) => {
        this.$bvToast.toast("查询角色列表失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleReset() {
    this.roleQueryParam.id = null;
    this.roleQueryParam.roleName = null;
    this.roleQueryParam.roleKey = null;
    this.getRoleList();
  },
  handlePageSizeChange(pageSize) {
    this.roleQueryParam.pageSize = pageSize;
    this.getRoleList();
  },
  handlePageNumChange(pageNum) {
    this.roleQueryParam.pageNum = pageNum;
    this.getRoleList();
  },
  handleAddNew() {
    this.$refs.addNewRoleModalRef.showModalMethod();
  },
  handleView(item) {
    this.$router.push("/admin/ums/roleDetail?rid=" + item.id);
  },
  handleEdit(item) {
    this.$refs.editRoleModalRef.showModalMethod(item.id);
  },
  handleSet(item) {
    this.$refs.setRoleModalRef.showModalMethod(item.id);
  },
  handleDelete(item) {
    this.$refs.deleteRoleConfirmModalRef.showModalMethod(item.id);
  },
};
