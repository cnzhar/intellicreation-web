import { addPermission } from "@/api/ums";

export function getDefaultData() {
  return {
    showModal: false,
    inputElements: [
      { caption: "权限名", type: "text", key: "permissionName" },
      { caption: "权限Key", type: "text", key: "permissionKey" },
    ],
    permission: {},
  };
}

export const permissionMethods = {
  hideModal() {
    this.showModal = false;
  },
  showModalMethod() {
    this.showModal = true;
  },
  handleAddPermission() {
    addPermission(this.permission)
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
