import { getMemberLoginLogList } from "@/api/ums";

export function getDefaultData() {
  return {
    loginLogQueryParam: {
      memberId: null,
      pageNum: 1,
      pageSize: 5,
    },
    loginLogList: [],
    fields: [
      { key: "ip", label: "IP" },
      { key: "region", label: "IP属地" },
      { key: "userAgent", label: "用户代理" },
      { key: "gmtCreate", label: "登录时间" },
    ],
    isBusy: false,
    pageSizeOptions: [
      { value: 5, text: "每页5条" },
      { value: 10, text: "每页10条" },
      { value: 15, text: "每页15条" },
      { value: 30, text: "每页30条" },
    ],
    totalRows: 0,
  };
}

export const loginLogMethods = {
  getLoginLogList() {
    this.isBusy = true;
    this.loginLogQueryParam.memberId =
      this.$route.query.mid === undefined ? 1 : parseInt(this.$route.query.mid);
    console.log(this.loginLogQueryParam.memberId);
    getMemberLoginLogList(this.loginLogQueryParam)
      .then((response) => {
        this.loginLogList = response.data.data.rows;
        console.log(this.loginLogList);
        this.totalRows = response.data.data.total;
        this.isBusy = false;
      })
      .catch((error) => {
        this.$bvToast.toast("查询登录日志失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
};
