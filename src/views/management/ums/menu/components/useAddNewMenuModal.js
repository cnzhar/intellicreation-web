import { addMenu } from "@/api/ums";

export function getDefaultData() {
  return {
    showModal: false,
    inputElements: [
      { caption: "菜单名", type: "text", key: "menuName" },
      { caption: "父菜单", type: "text", key: "parent" },
    ],
    menu: {},
  };
}

export const menuMethods = {
  hideModal() {
    this.showModal = false;
  },
  showModalMethod() {
    this.showModal = true;
  },
  handleAddMenu() {
    addMenu(this.menu)
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
