import { postDetail, commentList } from "@/api/community";

export function getDefaultData() {
  return {
    post: {},
    myComment: {},
    commentQueryParam: {
      articleId: null,
    },
    comments: [],
  };
}

export const postDetailMethods = {
  goBack() {
    this.$router.go(-1);
  },
  getPostDetail() {
    this.post.id =
      this.$route.query.pid === undefined ? 1 : parseInt(this.$route.query.pid); //获取传参的aid
    postDetail(this.post.id)
      .then((response) => {
        this.post = response.data.data;
      })
      .catch((error) => {
        this.$bvToast.toast(error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  getCommentList() {
    this.commentQueryParam.articleId =
      this.$route.query.pid === undefined ? 1 : parseInt(this.$route.query.pid);
    commentList(this.commentQueryParam)
      .then((response) => {
        this.comments = response.data.data.rows;
      })
      .catch((error) => {
        this.$bvToast.toast(error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  toMemberSpace(memberId) {
    let url = window.location.origin + "/mine/index?mid=" + memberId;
    window.open(url, "_blank");
  },
};
