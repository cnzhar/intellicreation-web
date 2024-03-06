import { getArticle, postRating, ratingList } from "@/api/article.js";
import { mavonEditor } from "mavon-editor";

export function getDefaultData() {
  return {
    aid: "", //文章ID
    articleDetail: {}, // 返回详情数据
    myRating: {
      articleId: null,
      score: null,
      text: "",
    },
    ratingQueryParam: {
      articleId: null,
    },
    ratingPage: {},
  };
}

export const articleDetailMethods = {
  goBack() {
    this.$router.go(-1);
  },
  getArticleDetail() {
    this.aid =
      this.$route.query.aid === undefined ? 1 : parseInt(this.$route.query.aid); //获取传参的aid
    getArticle(this.aid)
      .then((response) => {
        this.articleDetail = response.data.data;
        this.articleDetail.content = mavonEditor
          .getMarkdownIt()
          .render(this.articleDetail.content);
      })
      .catch((error) => {
        this.$bvToast.toast("查询文章详情失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handlePostRating() {
    this.myRating.articleId = this.aid;
    postRating(this.myRating)
      .then(() => {
        this.$bvToast.toast("发布成功", {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      })
      .catch((error) => {
        this.$bvToast.toast("发布失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  getRatingList() {
    this.ratingQueryParam.articleId =
      this.$route.query.aid === undefined ? 1 : parseInt(this.$route.query.aid);
    ratingList(this.ratingQueryParam)
      .then((response) => {
        this.ratingPage = response.data.data.rows;
      })
      .catch((error) => {
        this.$bvToast.toast("获取评价失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
};
