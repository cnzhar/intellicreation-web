<template>
  <div class="main-content-wrapper">
    <div class="left-div">
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
        <span class="mr-auto align-middle ml-1"
          ><a class="pointer" @click="toMemberSpace(item.createBy)">{{
            item.nickname
          }}</a></span
        >
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
            {{ item.gmtCreate | timeAgo }}
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
      <a v-show="hasMore" class="tcolors-bg"
        ><b-spinner type="grow" label="Loading..."></b-spinner>正在加载更多</a
      >
      <a v-show="!hasMore" class="tcolors-bg">暂无更多数据</a>
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
        <ReadMineCard class="mb-2"></ReadMineCard>
        <AdDisplayCard class="mb-2"></AdDisplayCard>
        <HotArticleCard></HotArticleCard>
      </b-skeleton-wrapper>
    </div>
  </div>
</template>

<script>
import ReadMineCard from "@/views/read/components/ReadMineCard";
import AdDisplayCard from "@/components/AdDisplayCard";
import HotArticleCard from "@/views/read/components/HotArticleCard";
import { getDefaultData, readMethods } from "@/views/read/useRead";
import { timeAgo } from "@/utils/timeUtils";

export default {
  name: "read-index",
  data() {
    return getDefaultData();
  },
  components: {
    ReadMineCard,
    AdDisplayCard,
    HotArticleCard,
  },
  filters: {
    timeAgo,
  },
  methods: {
    ...readMethods,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  created() {
    this.loadMoreArticles();
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
