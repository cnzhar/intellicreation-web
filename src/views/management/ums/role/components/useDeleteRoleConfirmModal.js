import { getRole, deleteRole } from "@/api/ums";

export function getDefaultData() {
  return {
    showModal: false,
    inputElements: [
      { caption: "ID", type: "text", key: "id" },
      {
        caption: "角色名",
        type: "text",
        key: "roleName",
      },
      {
        caption: "角色Key",
        type: "text",
        key: "roleKey",
      },
      {
        caption: "状态",
        type: "text",
        key: "status",
      },
      {
        caption: "描述",
        type: "text",
        key: "description",
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
    role: {},
  };
}

export const roleMethods = {
  handleDelete() {
    deleteRole(this.role.id)
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
};
