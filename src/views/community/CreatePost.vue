<template>
  <div class="main-content-wrapper">
    <div class="left-div">
      <b-card class="shadow w-100">
        <h5>发布帖子</h5>
        <label>标题</label>
        <b-form-input
          v-model="post.title"
          placeholder="输入标题"
        ></b-form-input>
        <b-form-textarea
          id="textarea-no-resize"
          class="mt-2"
          v-model="post.content"
          placeholder="我简单喵两句"
          rows="3"
          no-resize
        ></b-form-textarea>
        <b-button @click="handleCreatePost" variant="primary">发布</b-button>
      </b-card>
    </div>
    <div class="right-div">
      <CommunityMineCard></CommunityMineCard>
      <CheckInCard class="mt-2"></CheckInCard>
    </div>
  </div>
</template>

<script>
import CommunityMineCard from "@/views/community/CommunityMineCard";
import CheckInCard from "@/views/community/CheckInCard";
import { createPost } from "@/api/community";

export default {
  name: "CreatePost",
  data() {
    return {
      post: {
        title: null,
        content: null,
      },
    };
  },
  components: {
    CommunityMineCard,
    CheckInCard,
  },
  methods: {
    handleCreatePost() {
      createPost(this.post)
        .then(() => {
          this.$bvToast.toast("发布成功", {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        })
        .catch((error) => {
          this.$bvToast.toast(error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
  },
};
</script>

<style scoped>
.left-div {
  flex: 0 0 70%;
  margin-right: 1%;
  display: flex;
  flex-wrap: wrap;
}

.right-div {
  flex: 0 0 29%;
}
</style>
