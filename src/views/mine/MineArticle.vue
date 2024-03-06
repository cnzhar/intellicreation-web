<template>
  <div>
    <b-card
      class="article-list-card shadow"
      v-for="(item, index) in mineArticleList"
      :key="'article' + index"
      :img-src="item.thumbnail"
      img-left
      img-width="240"
    >
      <a @click="handleArticleDetail(item.id)" class="card-link pointer">
        <h5 class="card-title">{{ item.title }}</h5>
      </a>
      <b-card-text>
        {{ item.summary }}
      </b-card-text>
      <b-badge class="mr-2" variant="primary">Primary</b-badge>
      <b-badge class="mr-2" variant="secondary">Secondary</b-badge>
      <b-badge class="mr-2" variant="success">Success</b-badge>
      <b-button @click="handleEdit(item.id)" variant="primary">编辑</b-button>
      <div class="bottom-line">
        <span class="time-container">
          {{ item.gmtCreate }}
        </span>
        <div class="button-container">
          <b-button class="plain-button" @click="handleArticleDetail(item.id)">
            <b-icon icon="eye" variant="primary"></b-icon>
            {{ item.viewCount }}
          </b-button>
          <b-button class="plain-button ml-4" @click="handleDelete(data.item)">
            <b-icon icon="hand-thumbs-up" variant="primary"></b-icon>
            {{ item.likeCount }}
          </b-button>
          <b-button class="plain-button ml-4" @click="handleDelete(data.item)">
            <b-icon icon="star" variant="primary"></b-icon>
            {{ item.likeCount }}
          </b-button>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  getDefaultData,
  mineArticleMethods,
} from "@/views/mine/useMineArtilce";

export default {
  name: "MineArticle",
  data() {
    return getDefaultData();
  },
  methods: {
    ...mineArticleMethods,
  },
  created() {
    this.getMineArticle();
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
