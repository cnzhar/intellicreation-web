import { getMemberListByRole } from "@/api/ums";

export function getDefaultData() {
  return {
    isShowAddNew: false,
    memberQueryParam: {
      roleId: null,
      id: null,
      uid: null,
      nickname: null,
      pageNum: 1,
      pageSize: 5,
    },
    memberList: [],
    fields: [
      { key: "id", label: "ID" },
      { key: "uid", label: "uid" },
      { key: "nickname", label: "昵称" },
    ],
    pageSizeOptions: [
      { value: 5, text: "每页5条" },
      { value: 10, text: "每页10条" },
      { value: 15, text: "每页15条" },
      { value: 30, text: "每页30条" },
    ],
    isBusy: false,
    totalRows: 0,
  };
}

export const roleMethods = {
  getMemberList() {
    this.isBusy = true;
    this.memberQueryParam.roleId =
      this.$route.query.rid === undefined ? 1 : parseInt(this.$route.query.rid);
    getMemberListByRole(this.memberQueryParam)
      .then((response) => {
        this.memberList = response.data.data.rows;
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
