import { genderMap } from "@/utils/commonMap";
import { mineBasicInfo } from "@/api/mine";

export function getDefaultData() {
  return {
    memberParam: {
      memberId: null,
    },
    mineBasicInfo: {},
    inputElements: [
      {
        caption: "UID",
        type: "text",
        key: "uid",
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
    ],
  };
}

export const mineMethods = {
  getMineBasicInfo() {
    this.memberParam.memberId =
      this.$route.query.mid === undefined ? 1 : parseInt(this.$route.query.mid);
    mineBasicInfo(this.memberParam)
      .then((response) => {
        this.mineBasicInfo = response.data.data;
      })
      .catch((error) => {
        this.$bvToast.toast(error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
};
