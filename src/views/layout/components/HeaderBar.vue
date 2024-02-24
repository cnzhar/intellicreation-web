<template>
  <div class="headerBar-main-div shadow">
    <b-progress
      v-show="showProgress"
      :value="progress"
      height="4px"
      variant="success"
      class="progress-fixed-top"
    ></b-progress>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand class="start-element" href="#"
        >智能创作系统</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="item in currentNavItems"
            :key="item.path"
            :active="selectedNavItem.startsWith(item.path)"
            :to="item.path"
            >{{ item.navName }}</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search
            </b-button>
          </b-nav-form>

          <b-avatar
            v-if="!isLogged"
            button
            @click="handleLogin"
            variant="danger"
            text="登录"
            class="align-baseline end-element"
          ></b-avatar>
          <b-avatar
            v-if="isLogged"
            badge
            badge-variant="success"
            id="popover-target-1"
            button
            @click="goToProfilePage"
            variant="danger"
            text="FF"
            class="align-baseline end-element"
          >
          </b-avatar>
          <b-popover target="popover-target-1" triggers="hover" placement="top">
            <b-button @click="goToProfilePage" variant="danger"
              >个人中心</b-button
            >
            <b-button @click="handleLogout" variant="danger">登出</b-button>
          </b-popover>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <loginModal ref="loginModalRef"></loginModal>
  </div>
</template>

<script>
import { getToken, removeToken } from "@/utils/auth";
import { logout } from "@/api/member";
import loginModal from "@/components/loginModal";

export default {
  name: "HeaderBar",
  data() {
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
        { navName: "圈子", path: "/community" },
        { navName: "后台", path: "/admin" },
      ],
      isLogged: false,
      isShowLogin: false,
    };
  },
  components: {
    loginModal,
  },
  methods: {
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
      if (this.$route.path !== "/mine/index") {
        this.$router.push("/mine/index");
      }
    },
    getIsLogged() {
      this.isLogged = !!getToken();
    },
    handleLogin() {
      this.$refs.loginModalRef.showModalMethod();
    },
    handleLogout() {
      logout()
        .then(() => {
          removeToken();
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
  },
  watch: {
    // 监听$route对象
    $route() {
      this.setActive();
      this.startLoading();
    },
  },
  created() {
    this.getIsLogged();
    this.setActive();
  },
  mounted() {
    this.startLoading();
  },
};
</script>

<style scoped>
.progress-fixed-top {
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.headerBar-main-div {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.start-element {
  margin-left: 5vw;
}

.end-element {
  margin-right: 5vw;
}
</style>
