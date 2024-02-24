import { getPermissionListByRole } from "@/api/ums";

export function getDefaultData() {
  return {
    permissionQueryParam: {
      roleId: 2,
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
  getPermissionList() {
    this.isBusy = true;
    this.permissionQueryParam.roleId =
      this.$route.query.rid === undefined ? 1 : parseInt(this.$route.query.rid);
    getPermissionListByRole(this.permissionQueryParam)
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
};
