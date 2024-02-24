import { getRolesByMember } from "@/api/ums";

export function getDefaultData() {
  return {
    roleQueryParam: {
      memberId: null,
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

export const memberRoleMethods = {
  getRoleList() {
    this.isBusy = true;
    this.roleQueryParam.memberId =
      this.$route.query.mid === undefined ? 1 : parseInt(this.$route.query.mid);
    getRolesByMember(this.roleQueryParam)
      .then((response) => {
        this.roleList = response.data.data.rows;
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
