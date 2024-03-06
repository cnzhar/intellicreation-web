import { getToken, removeToken } from "@/utils/auth";
import { logout } from "@/api/member";
import { mineId, mineNavInfo } from "@/api/mine";

export function getDefaultData() {
  return {
    // 进度值
    progress: 0,
    // 是否显示进度条
    showProgress: false,
    selectedNavItem: "",
    currentNavItems: [
      { navName: "首页", path: "/home" },
      { navName: "创作中心", path: "/creation" },
      { navName: "阅读", path: "/read" },
      { navName: "分类", path: "/CategoryRead" },
      { navName: "社区", path: "/community" },
      { navName: "后台", path: "/admin" },
    ],
    isLogged: false,
    isShowLogin: false,
    currentMineNavInfo: {
      avatar: "",
    },
  };
}

export const headerBarMethods = {
  startLoading() {
    this.showProgress = true;
    this.progress = 0;
    const interval = setInterval(() => {
      // 模拟加载进度
      if (this.progress >= 100) {
        clearInterval(interval);
        this.finishLoading();
      } else {
        this.progress += 50;
      }
    }, 1);
  },
  finishLoading() {
    // 加载完成
    this.progress = 100;
    setTimeout(() => {
      this.showProgress = false;
    }, 200);
  },
  goToProfilePage() {
    mineId()
      .then((response) => {
        let currentMineId = response.data.data.id;
        if (this.$route.query.mid !== currentMineId) {
          this.$router.push("/mine/index?mid=" + currentMineId);
        }
      })
      .catch((error) => {
        this.$bvToast.toast(error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  getIsLogged() {
    this.isLogged = !!getToken();
  },
  handleLogin() {
    this.$refs.loginModalRef.showModalMethod(() => {
      // 模态框关闭时的回调
      this.getIsLogged();
    });
  },
  handleLogout() {
    logout()
      .then(() => {
        removeToken();
        this.$refs.popover.$emit("close");
        this.$bvToast.toast("登出成功", {
          title: "系统消息",
          autoHideDelay: 5000,
        });
        this.getIsLogged();
      })
      .catch((error) => {
        this.$bvToast.toast("登出失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  setActive() {
    this.selectedNavItem = window.location.pathname;
  },
  getMineNavInfo() {
    mineNavInfo()
      .then((response) => {
        this.currentMineNavInfo = response.data.data;
      })
      .catch((error) => {
        this.getIsLogged();
        this.$bvToast.toast(error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
};
