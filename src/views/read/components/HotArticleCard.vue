<template>
  <div>
    <b-card class="shadow">
      <div class="card-header">热门文章</div>
      <b-list-group
        v-for="(item, index) in hotArticles"
        :key="'hotArticle' + index"
      >
        <b-list-group-item
          ><a @click="handleArticleDetail(item.id)" class="pointer float-left">
            {{ item.title }} </a
          ><span class="float-right"
            ><b-icon icon="eye"></b-icon> {{ item.viewCount }}</span
          ></b-list-group-item
        >
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
import { hotArticleList } from "@/api/article";

export default {
  name: "HotArticleCard",
  data() {
    return {
      hotArticles: "",
    };
  },
  methods: {
    // 获取热门文章列表
    getHotArticleList() {
      hotArticleList()
        .then((response) => {
          this.hotArticles = response.data.data;
        })
        .catch((error) => {
          this.$bvToast.toast(error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    handleArticleDetail(id) {
      this.$router.push("/read/DetailArticle?aid=" + id);
    },
  },
  created() {
    this.getHotArticleList();
  },
};
</script>

<style scoped>
.card-body {
  padding: 0;
}
</style>
