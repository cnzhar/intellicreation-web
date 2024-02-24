import { addRole } from "@/api/ums";

export function getDefaultData() {
  return {
    showModal: false,
    inputElements: [
      { caption: "角色名", type: "text", key: "roleName" },
      { caption: "角色Key", type: "text", key: "roleKey" },
    ],
    role: {
      roleName: null,
      roleKey: null,
    },
  };
}

export const roleMethods = {
  hideModal() {
    this.showModal = false;
  },
  showModalMethod() {
    this.showModal = true;
  },
  handleAddRole() {
    addRole(this.role)
      .then(() => {
        this.$bvToast.toast("新增成功", {
          title: "系统消息",
          autoHideDelay: 5000,
        });
        this.hideModal();
      })
      .catch((error) => {
        this.$bvToast.toast(error.message, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
};
