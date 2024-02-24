import { addMember } from "@/api/ums";

export function getDefaultData() {
  return {
    showModal: false,
    inputElements: [
      { caption: "UID", type: "text", key: "uid" },
      { caption: "昵称", type: "text", key: "nickname" },
      { caption: "电子邮件", type: "text", key: "email" },
    ],
    member: {},
  };
}

export const memberMethods = {
  hideModal() {
    this.showModal = false;
  },
  showModalMethod() {
    this.showModal = true;
  },
  handleAddMember() {
    addMember(this.member)
      .then(() => {
        this.$bvToast.toast("新增成功", {
          title: "系统消息",
          autoHideDelay: 5000,
        });
        this.hideModal();
      })
      .catch((error) => {
        this.$bvToast.toast("新增失败，错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
};
