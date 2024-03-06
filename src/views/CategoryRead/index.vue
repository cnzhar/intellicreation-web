<template>
  <div>
    <b-card class="shadow mb-2">
      <h5>分类信息</h5>
    </b-card>
    <b-skeleton-wrapper :loading="skeletonLoading">
      <template #loading>
        <ArticleListCardSkeleton></ArticleListCardSkeleton>
      </template>

      <b-card
        class="article-list-card shadow"
        v-for="(item, index) in articleList"
        :key="'article' + index"
        :img-src="item.thumbnail"
        img-left
        img-width="240"
      >
        <a @click="handleArticleDetail(item.id)" class="card-link pointer">
          <h5 class="card-title">{{ item.title }}</h5>
        </a>
        <b-avatar
          variant="primary"
          text="BV"
          size="1.5rem"
          class="align-middle"
          :src="item.avatar"
        ></b-avatar>
        <span class="mr-auto align-middle ml-1">{{ item.nickname }}</span>
        <b-card-text>
          {{ item.summary }}
        </b-card-text>
        <b-badge
          v-for="(tagItem, tagIndex) in item.tagName"
          :key="tagIndex"
          class="mr-2"
          variant="primary"
          >{{ tagItem }}</b-badge
        >
        <div class="bottom-line">
          <span class="time-container">
            {{ item.gmtCreate }}
          </span>
          <div class="button-container">
            <b-button
              class="plain-button"
              @click="handleArticleDetail(item.id)"
            >
              <b-icon icon="eye" variant="primary"></b-icon>
              {{ item.viewCount }}
            </b-button>
            <b-button
              class="plain-button ml-4"
              @click="handleDelete(data.item)"
            >
              <b-icon icon="hand-thumbs-up" variant="primary"></b-icon>
              {{ item.likeCount }}
            </b-button>
            <b-button
              class="plain-button ml-4"
              @click="handleDelete(data.item)"
            >
              <b-icon icon="star" variant="primary"></b-icon>
              {{ item.likeCount }}
            </b-button>
          </div>
        </div>
      </b-card>
    </b-skeleton-wrapper>
  </div>
</template>

<script>
// import SideCategoryNav from "@/views/CategoryRead/components/SideCategoryNav";
import {
  getDefaultData,
  categoryReadMethods,
} from "@/views/CategoryRead/useCategoryRead";

export default {
  name: "CategoryRead-index",
  data() {
    return getDefaultData();
  },
  components: {
    // SideCategoryNav,
  },
  methods: {
    ...categoryReadMethods,
  },
  watch: {
    // 监听$route对象
    $route() {
      this.getArticleList();
    },
  },
  created() {
    this.getArticleList();
  },
};
</script>

<style scoped>
.article-list-card {
  margin-bottom: 0.5rem;
  position: relative;
}

.bottom-line {
  position: absolute;
  bottom: 1rem;
  width: calc(100% - 18.5rem);
}

.time-container {
  float: left;
}

.button-container {
  float: right;
}
</style>
