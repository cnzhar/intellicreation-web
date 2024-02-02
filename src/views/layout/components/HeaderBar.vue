<template>
  <div class="headerBar-main-div shadow">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand class="start-element" href="#"
        >智能创作系统</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :active="true" href="/home">首页</b-nav-item>
          <b-nav-item href="/creation">创作中心</b-nav-item>
          <b-nav-item href="/read">阅读</b-nav-item>
          <b-nav-item href="/community">圈子</b-nav-item>
          <b-nav-item href="/dashboard">后台</b-nav-item>
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

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

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
            <b-button @click="handleLogout" variant="danger">个人中心</b-button>
            <b-button @click="handleLogout" variant="danger">登出</b-button>
          </b-popover>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal v-model="isShowLogin" hide-footer hide-header>
      <loginModal></loginModal>
    </b-modal>
  </div>
</template>

<script>
import { getToken, removeToken } from "@/utils/auth";
import { logout } from "@/api/login";
import loginModal from "@/components/loginModal";

export default {
  name: "HeaderBar",
  data() {
    return {
      isLogged: false,
      isShowLogin: false,
    };
  },
  components: {
    loginModal,
  },
  methods: {
    goToProfilePage() {
      if (this.$route.path !== "/mine/index") {
        this.$router.push("/mine/index");
      }
    },
    getIsLogged() {
      this.isLogged = !!getToken();
    },
    handleLogin() {
      this.isShowLogin = true;
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
  },
  created() {
    this.getIsLogged();
  },
};
</script>

<style scoped>
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
