import { getRole, updateRole } from "@/api/ums";

export function getDefaultData() {
  return {
    showModal: false,
    inputElements: [
      { caption: "ID", type: "text", key: "id", isDisabled: true },
      {
        caption: "角色名",
        type: "text",
        key: "roleName",
        isDisabled: false,
      },
      {
        caption: "角色Key",
        type: "text",
        key: "roleKey",
        isDisabled: false,
      },
    ],
    role: {},
  };
}

export const roleMethods = {
  hideModal() {
    this.showModal = false;
  },
  showModalMethod(id) {
    this.showModal = true;
    this.getRoleDetail(id);
  },
  getRoleDetail(roleId) {
    getRole(roleId)
      .then((response) => {
        this.role = response.data.data;
      })
      .catch((error) => {
        this.$bvToast.toast(error.message, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleUpdateRole() {
    updateRole(this.role)
      .then(() => {
        this.$bvToast.toast("更新成功", {
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
