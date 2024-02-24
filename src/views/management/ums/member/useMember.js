import { memberList } from "@/api/ums";

export function getDefaultData() {
  return {
    isShowAddNew: false,
    memberQueryParam: {
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
      { key: "actions", label: "操作" },
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

export const memberMethods = {
  getMemberList() {
    this.isBusy = true;
    memberList(this.memberQueryParam)
      .then((response) => {
        this.memberList = response.data.data.rows;
        this.totalRows = response.data.data.total;
        this.isBusy = false;
      })
      .catch((error) => {
        this.$bvToast.toast("查询用户列表失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleReset() {
    this.memberQueryParam.id = null;
    this.memberQueryParam.uid = null;
    this.memberQueryParam.nickname = null;
    this.getMemberList();
  },
  handlePageSizeChange(pageSize) {
    this.memberQueryParam.pageSize = pageSize;
    this.getMemberList();
  },
  handlePageNumChange(pageNum) {
    this.memberQueryParam.pageNum = pageNum;
    this.getMemberList();
  },
  handleAddNew() {
    this.$refs.addNewMemberModalRef.showModalMethod();
    this.getMemberList();
  },
  handleView(item) {
    this.$router.push("/admin/ums/memberDetail?mid=" + item.id);
  },
  handleEdit(item) {
    this.$refs.editMemberModalRef.showModalMethod(item.id);
  },
  handleSet(item) {
    this.$refs.setMemberModalRef.showModalMethod(item.id);
  },
  handleDelete(item) {
    this.$refs.deleteMemberConfirmModalRef.showModalMethod(item.id);
  },
};
