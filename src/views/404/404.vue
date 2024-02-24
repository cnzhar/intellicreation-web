<template>
  <div>
    <b-jumbotron header="404" lead="页面走丢了">
      <p>先看看其他内容吧</p>
      <b-button @click="goBack" variant="primary" href="#">返回</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "error-404",
  methods: {
    goBack() {
      router.go(-1);
    },
  },
};
</script>

<style scoped></style>
