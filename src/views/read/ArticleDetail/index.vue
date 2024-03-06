<template>
  <div class="main-content-wrapper">
    <div class="left-div">
      <b-card class="shadow">
        <b-button class="plain-button" @click="goBack"
          ><b-icon icon="chevron-left" variant="primary"></b-icon>返回</b-button
        >
      </b-card>
      <b-card class="shadow article-card mt-2">
        <h4 class="text-center">
          <strong class="text-primary">{{ articleDetail.title }}</strong>
        </h4>
        <div class="text-center mt-3">
          <b-avatar
            variant="danger"
            text="FF"
            class="align-middle"
            :src="articleDetail.avatar"
            size="2rem"
          ></b-avatar>
          <span class="align-middle ml-2 author-info-font">{{
            articleDetail.nickname
          }}</span>
          <span class="align-middle ml-3 author-info-font">
            发布于：{{ articleDetail.gmtCreate | timeAgo }}</span
          >
        </div>
        <div class="markdown-body mt-4" v-html="articleDetail.content"></div>
        <b-badge
          v-for="(tagItem, tagIndex) in articleDetail.tagName"
          :key="tagIndex"
          class="mr-2 mb-2"
          variant="primary"
          >{{ tagItem }}</b-badge
        >
        <div class="bottom-line">
          <span class="time-container author-info-font">
            最后编辑于：{{ articleDetail.gmtModified | timeAgo }}
          </span>
          <div class="button-container">
            <b-button class="plain-button mr-3" @click="handleDelete(data.item)"
              ><b-icon icon="hand-thumbs-up" variant="primary"></b-icon
              >{{ articleDetail.likeCount }}</b-button
            >
            <b-button class="plain-button mr-3" @click="handleDelete(data.item)"
              ><b-icon icon="eye" variant="primary"></b-icon
              >{{ articleDetail.viewCount }}</b-button
            >
          </div>
        </div>
      </b-card>
      <b-card class="shadow mt-2">
        <h5>发表评价</h5>
        <b-form-rating
          v-model="myRating.score"
          variant="success"
          class="p-0"
          inline
          show-value
          no-border
        ></b-form-rating>
        <b-form-textarea
          id="textarea-no-resize"
          class="mt-2"
          v-model="myRating.text"
          placeholder="客观评价一下吧"
          rows="3"
          no-resize
        ></b-form-textarea>
        <b-button class="mt-2" @click="handlePostRating" variant="success"
          >发布</b-button
        >
      </b-card>
      <b-card
        v-for="(item, index) in ratingPage"
        :key="'post' + index"
        class="shadow mt-2"
      >
        <div class="w-100 clearfix">
          <div class="float-left">
            <b-avatar
              variant="danger"
              text="FF"
              :src="item.avatar"
              class="align-middle"
            ></b-avatar>
            <span class="ml-2 align-middle">{{ item.nickname }}</span>
          </div>
          <div class="float-right">
            <b-form-rating
              v-model="item.score"
              variant="success"
              class="p-0"
              inline
              show-value
              no-border
              readonly
            ></b-form-rating>
          </div>
        </div>
        <div class="mt-2">
          {{ item.text }}
        </div>
      </b-card>
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
        <HotArticleCard></HotArticleCard>
      </b-skeleton-wrapper>
    </div>
  </div>
</template>

<script>
import ReadMineCard from "@/views/read/components/ReadMineCard";
import HotArticleCard from "@/views/read/components/HotArticleCard";
import {
  getDefaultData,
  articleDetailMethods,
} from "@/views/read/ArticleDetail/useArticleDetail";
import { timeAgo } from "@/utils/timeUtils";

export default {
  name: "ArticleDetail",
  data() {
    return getDefaultData();
  },
  components: {
    ReadMineCard,
    HotArticleCard,
  },
  filters: {
    timeAgo,
  },
  methods: {
    ...articleDetailMethods,
  },
  watch: {
    $route() {
      this.getArticleDetail();
      this.getRatingList();
    },
  },
  created() {
    this.getArticleDetail();
    this.getRatingList();
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

.time-container {
  float: left;
}

.button-container {
  float: right;
}

.author-info-font {
  font-size: 14px;
  color: gray;
}
</style>
