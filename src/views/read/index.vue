<template>
  <div class="main-content-wrapper">
    <div class="left-div">
      <b-skeleton-wrapper :loading="skeletonLoading">
        <template #loading>
          <b-card class="article-list-card">
            <b-skeleton width="85%"></b-skeleton>
            <b-skeleton width="55%"></b-skeleton>
            <b-skeleton width="70%"></b-skeleton>
            <b-skeleton width="70%"></b-skeleton>
          </b-card>
          <b-card class="article-list-card">
            <b-skeleton width="85%"></b-skeleton>
            <b-skeleton width="55%"></b-skeleton>
            <b-skeleton width="70%"></b-skeleton>
            <b-skeleton width="70%"></b-skeleton>
          </b-card>
          <b-card class="article-list-card">
            <b-skeleton width="85%"></b-skeleton>
            <b-skeleton width="55%"></b-skeleton>
            <b-skeleton width="70%"></b-skeleton>
            <b-skeleton width="70%"></b-skeleton>
          </b-card>
        </template>

        <b-card
          class="article-list-card shadow"
          v-for="(item, index) in articleList"
          :key="'article' + index"
        >
          <a :href="'/read/DetailArticle?aid=' + item.id" class="card-link">
            <h5 class="card-title">{{ item.title }}</h5>
          </a>
          <h6 class="card-subtitle mb-2 text-muted">{{ item.summary }}</h6>
          <a :href="'/read/DetailArticle?aid=' + item.id" class="card-link"
            >查看详情</a
          >
        </b-card>
      </b-skeleton-wrapper>
    </div>

    <div class="right-div">
      <b-skeleton-wrapper :loading="skeletonLoading">
        <template #loading>
          <b-card>
            <b-skeleton width="85%"></b-skeleton>
            <b-skeleton width="55%"></b-skeleton>
            <b-skeleton width="70%"></b-skeleton>
          </b-card>
        </template>
        <b-card class="shadow">
          <div class="card-header">热门文章</div>
          <ul class="list-group list-group-flush">
            <li
              v-for="(item, index) in browseList"
              :key="'browseList' + index"
              class="list-group-item"
            >
              <a target="_blank">
                {{ item.title }}
              </a>
              <b-icon icon="eye"></b-icon>
              {{ item.viewCount }}
            </li>
          </ul>
        </b-card>
      </b-skeleton-wrapper>
    </div>
  </div>
</template>

<script>
import { articleList, hotArticleList } from "@/api/article";

export default {
  name: "read-index",
  data() {
    return {
      skeletonLoading: false,
      articleList: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        categoryId: 0,
      },
      hasMore: true,
      browseList: "", //热门文章 浏览量最多
    };
  },
  methods: {
    // 获取文章列表
    getArticleList() {
      this.skeletonLoading = true;
      articleList(this.queryParams)
        .then((response) => {
          this.articleList = this.articleList.concat(response.data.data.rows);
          this.skeletonLoading = false;
        })
        .catch((error) => {
          this.$bvToast.toast(error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    // 获取热门文章列表
    getHotArticleList() {
      hotArticleList()
        .then((response) => {
          this.browseList = response.data.data;
          console.log(response);
          console.log(this.browseList);
        })
        .catch((error) => {
          this.$bvToast.toast(error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
  },
  created() {
    this.getArticleList();
    // 查询浏览量最多的10篇文章数据
    this.getHotArticleList();
  },
};
</script>

<style scoped>
.left-div {
  flex: 0 0 70%;
  margin-right: 1%;
}

.right-div {
  flex: 0 0 29%;
}

.article-list-card {
  margin-bottom: 0.5rem;
}
</style>
