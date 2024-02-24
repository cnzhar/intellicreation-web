import { getPermission, deletePermission } from "@/api/ums";

export function getDefaultData() {
  return {
    showModal: false,
    inputElements: [
      { caption: "ID", type: "text", key: "id" },
      {
        caption: "权限名",
        type: "text",
        key: "permissionName",
      },
      {
        caption: "权限Key",
        type: "text",
        key: "permissionKey",
      },
    ],
    permission: {},
  };
}

export const permissionMethods = {
  handleDelete() {
    deletePermission(this.permission.id)
      .then(() => {
        this.$bvToast.toast("删除成功", {
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
  hideModal() {
    this.showModal = false;
  },
  showModalMethod(id) {
    this.showModal = true;
    this.getPermissionDetail(id);
  },
  getPermissionDetail(permissionId) {
    getPermission(permissionId)
      .then((response) => {
        this.permission = response.data.data;
      })
      .catch((error) => {
        this.$bvToast.toast(error.message, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
};
