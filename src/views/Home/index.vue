<template>
  <div class="main-content-wrapper">
    <h1>首页</h1>
    <b-button @click="handleLogin">登录</b-button>
    <b-modal v-model="isShowLogin" hide-footer hide-header>
      <loginModal></loginModal>
    </b-modal>
  </div>
</template>

<script>
import loginModal from "@/components/loginModal";

export default {
  name: "home-index",
  data() {
    return {
      isShowLogin: false,
    };
  },
  components: {
    loginModal,
  },
  methods: {
    handleLogin() {
      this.isShowLogin = true;
    },
  },
};
</script>

<style scoped></style>
