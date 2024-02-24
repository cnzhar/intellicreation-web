import { genderMap } from "@/utils/commonMap";
import { getMember } from "@/api/ums";

export function getDefaultData() {
  return {
    mid: "",
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
        caption: "电子邮件",
        type: "text",
        key: "email",
      },
      {
        caption: "电子邮件激活状态",
        type: "text",
        key: "emailStatus",
      },
      {
        caption: "手机号码",
        type: "text",
        key: "phoneNumber",
      },
      {
        caption: "真实姓名",
        type: "text",
        key: "fullName",
      },
      {
        caption: "性别",
        type: "checkbox",
        key: "gender",
        needMap: true,
        captionMap: Object.assign({}, genderMap),
      },
      {
        caption: "生日",
        type: "text",
        key: "birthday",
      },
      {
        caption: "个性签名",
        type: "text",
        key: "personalizedSignature",
      },
      {
        caption: "状态",
        type: "text",
        key: "status",
      },
      {
        caption: "经验",
        type: "text",
        key: "exp",
      },
      {
        caption: "所在城市",
        type: "text",
        key: "locationId",
      },
      {
        caption: "职业",
        type: "text",
        key: "job",
      },
      {
        caption: "公司",
        type: "text",
        key: "company",
      },
      {
        caption: "QQ号",
        type: "text",
        key: "qqNumber",
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
    member: [],
  };
}

export const memberMethods = {
  getMemberDetail() {
    this.mid =
      this.$route.query.mid === undefined ? 1 : parseInt(this.$route.query.mid);
    getMember(this.mid)
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
