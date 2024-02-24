<template>
  <div class="main-content-wrapper">
    <label @click="goBack">返回</label>
    <div class="card mx-auto">
      <div class="card-body">
        <b class="text-primary" variant="primary">{{ detailObj.title }}</b>
        <div class="markdown-body" v-html="detailObj.content"></div>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle } from "@/api/article.js";
import { mavonEditor } from "mavon-editor";
import router from "@/router";

export default {
  name: "ArticleDetail",
  data() {
    return {
      aid: "", //文章ID
      detailObj: {}, // 返回详情数据
    };
  },
  methods: {
    goBack() {
      router.go(-1);
    },
    getArticleDetail() {
      this.aid =
        this.$route.query.aid === undefined
          ? 1
          : parseInt(this.$route.query.aid); //获取传参的aid
      getArticle(this.aid).then((response) => {
        this.detailObj = response.data.data;
        this.detailObj.content = mavonEditor
          .getMarkdownIt()
          .render(this.detailObj.content);
      });
    },
  },
  created() {
    this.getArticleDetail();
  },
};
</script>

<style scoped></style>
