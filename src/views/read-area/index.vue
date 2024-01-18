<template>
  <div>
    <div
      class="card"
      style="width: 18rem"
      v-for="(item, index) in articleList"
      :key="'article' + index"
    >
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>

    <div class="card" style="width: 18rem">
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
          —— {{ item.viewCount }} 次围观
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { articleList, hotArticleList } from "@/api/article";

export default {
  name: "read-index",
  data() {
    return {
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
      articleList(this.queryParams).then((response) => {
        this.articleList = this.articleList.concat(response.rows);
        console.log(this.articleList);
        if (response.total <= this.articleList.length) {
          this.hasMore = false;
        } else {
          this.hasMore = true;
          this.queryParams.pageNum++;
        }
      });
    },
    // 展示数据
    showSearchShowList: function (initData) {
      if (initData) {
        this.articleList = [];
      }
      this.getArticleList();
    },
    // 查看更多
    addMoreFun: function () {
      this.showSearchShowList(false);
    },
    routeChange: function () {
      const that = this;
      // 获取传参的classId
      this.queryParams.categoryId =
        that.$route.query.classId === undefined
          ? 0
          : parseInt(that.$route.query.classId);
      this.showSearchShowList(true);
    },
    // 获取热门文章列表
    getHotArticleList() {
      hotArticleList().then((response) => {
        this.browseList = response.data;
        console.log(response);
        console.log(this.browseList);
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

<style scoped></style>
