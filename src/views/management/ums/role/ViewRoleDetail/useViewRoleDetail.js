import { getRole } from "@/api/ums";
import { commonStatusMap } from "@/utils/commonMap";

export function getDefaultData() {
  return {
    rid: "",
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
        needMap: true,
        captionMap: Object.assign({}, commonStatusMap),
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
  getRoleDetail() {
    this.rid =
      this.$route.query.rid === undefined ? 1 : parseInt(this.$route.query.rid);
    getRole(this.rid)
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
