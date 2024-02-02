<template>
  <div class="main-content-wrapper">
    <div class="card mx-auto">
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">{{ detailObj.content }}</h6>
        <p class="card-text">{{ detailObj.content }}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle } from "@/api/article.js";
import { mavonEditor } from "mavon-editor";
export default {
  name: "DetailArticle",
  data() {
    return {
      aid: "", //文章ID
      detailObj: {}, // 返回详情数据
    };
  },
  methods: {
    getArticleDetail() {
      this.aid =
        this.$route.query.aid === undefined
          ? 1
          : parseInt(this.$route.query.aid); //获取传参的aid
      getArticle(this.aid).then((response) => {
        this.detailObj = response;
        const markdownIt = mavonEditor.getMarkdownIt();
        this.detailObj.content = markdownIt.render(response.data.data.content);
      });
    },
  },
  created() {
    this.getArticleDetail();
  },
};
</script>

<style scoped></style>
