import { getMenu, updateMenu } from "@/api/ums";

export function getDefaultData() {
  return {
    showModal: false,
    inputElements: [
      { caption: "ID", type: "text", key: "id" },
      {
        caption: "菜单名",
        type: "text",
        key: "menuName",
      },
      {
        caption: "父菜单",
        type: "text",
        key: "parent",
      },
      {
        caption: "排序",
        type: "text",
        key: "sort",
      },
    ],
    menu: {},
  };
}

export const menuMethods = {
  hideModal() {
    this.showModal = false;
  },
  showModalMethod(id) {
    this.showModal = true;
    this.menu.id = id;
    this.getMenuDetail();
  },
  getMenuDetail() {
    getMenu(this.menu.id)
      .then((response) => {
        this.menu = response.data.data;
      })
      .catch((error) => {
        this.$bvToast.toast(error.message, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleUpdate() {
    updateMenu(this.menu)
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
