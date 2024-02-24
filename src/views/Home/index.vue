<template>
  <div class="main-content-wrapper">
    <h1>首页</h1>
    <b-button variant="my" @click="handleLogin">登录</b-button>
    <b-button variant="my" @click="handleChangeColor">配色</b-button>
    <loginModal ref="loginModalRef"></loginModal>
  </div>
</template>

<script>
import loginModal from "@/components/loginModal";

export default {
  name: "home-index",
  data() {
    return {};
  },
  components: {
    loginModal,
  },
  methods: {
    handleLogin() {
      this.$refs.loginModalRef.showModalMethod();
    },
    handleChangeColor() {},
  },
};
</script>

<style scoped></style>
