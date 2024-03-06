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
      <b-navbar-brand href="#">智能创作系统</b-navbar-brand>

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
            <b-button class="plain-button" @click="handleDelete(data.item)"
              ><b-icon icon="bell" variant="danger"></b-icon
            ></b-button>
            <b-button class="plain-button" @click="handleDelete(data.item)"
              ><b-icon icon="envelope" variant="danger"></b-icon
            ></b-button>
          </b-nav-form>

          <b-avatar
            v-if="!isLogged"
            button
            @click="handleLogin"
            variant="danger"
            text="登录"
            class="align-baseline"
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
            :src="currentMineNavInfo.avatar"
            class="align-baseline"
          >
          </b-avatar>
          <b-popover
            ref="popover"
            target="popover-target-1"
            triggers="hover"
            placement="top"
          >
            <b-avatar
              @click="goToProfilePage"
              variant="danger"
              text="FF"
              :src="currentMineNavInfo.avatar"
              class="align-baseline pop-card-item"
            >
            </b-avatar>
            <span>{{ currentMineNavInfo.nickname }}</span>
            <b-button
              @click="goToProfilePage"
              variant="danger"
              class="pop-card-item"
              >个人中心</b-button
            >
            <b-button
              @click="handleLogout"
              variant="danger"
              class="pop-card-item"
              >登出</b-button
            >
          </b-popover>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <loginModal ref="loginModalRef"></loginModal>
  </div>
</template>

<script>
import loginModal from "@/components/loginModal";
import {
  getDefaultData,
  headerBarMethods,
} from "@/views/layout/components/useHeaderBar";

export default {
  name: "HeaderBar",
  data() {
    return getDefaultData();
  },
  components: {
    loginModal,
  },
  methods: {
    ...headerBarMethods,
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
    this.getMineNavInfo();
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

.pop-card-item {
  display: block;
  margin: 0 auto;
}
</style>
