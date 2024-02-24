import { getMember, deleteMember } from "@/api/ums";

export function getDefaultData() {
  return {
    showModal: false,
    inputElements: [
      { caption: "ID", type: "text", key: "id" },
      {
        caption: "UID",
        type: "text",
        key: "uid",
      },
      {
        caption: "昵称",
        type: "text",
        key: "nickname",
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
    member: {
      id: null,
    },
  };
}

export const memberMethods = {
  handleDelete() {
    deleteMember(this.member.id)
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
    this.member.id = id;
    this.getMemberDetail();
  },
  getMemberDetail() {
    getMember(this.member.id)
      .then((response) => {
        this.member = response.data.data;
      })
      .catch((error) => {
        this.$bvToast.toast(error.message, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
};
