import { getMenu } from "@/api/ums";

export function getDefaultData() {
  return {
    mid: "",
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
  getMenuDetail() {
    this.mid =
      this.$route.query.mid === undefined ? 1 : parseInt(this.$route.query.mid);
    getMenu(this.mid)
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
};
