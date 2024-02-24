import { getPermission, updatePermission } from "@/api/ums";

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
      {
        caption: "类型",
        type: "text",
        key: "permissionType",
      },
      {
        caption: "状态",
        type: "text",
        key: "status",
      },
      {
        caption: "创建人",
        type: "text",
        key: "createBy",
      },
      {
        caption: "修改人",
        type: "text",
        key: "modifiedBy",
      },
      {
        caption: "创建时间",
        type: "text",
        key: "gmtCreate",
      },
      {
        caption: "修改时间",
        type: "text",
        key: "gmtModified",
      },
    ],
    permission: {},
  };
}

export const permissionMethods = {
  hideModal() {
    this.showModal = false;
  },
  showModalMethod(id) {
    this.showModal = true;
    this.permission.id = id;
    this.getPermissionDetail();
  },
  getPermissionDetail() {
    getPermission(this.permission.id)
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
  handleUpdate() {
    updatePermission(this.permission)
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
