<template>
  <div class="main-content-wrapper">
    <div class="left-div">
      <b-card
        v-for="(item, index) in postList"
        :key="index"
        :title="item.title"
        tag="article"
        class="shadow mb-2 post-list-card"
        :style="{ 'margin-right': index % 2 === 0 ? '1%' : '0' }"
        @click="handlePostDetail(item.id)"
      >
        <b-card-text> {{ item.content }} </b-card-text>
        <b-img
          src="https://picsum.photos/300/150/?image=41"
          fluid
          alt="Fluid image"
          style="width: 100%"
        ></b-img>
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
import { postList } from "@/api/community";

export default {
  name: "community-index",
  data() {
    return {
      postList: {},
      post: {},
    };
  },
  components: {
    CommunityMineCard,
    CheckInCard,
  },
  methods: {
    getPostList() {
      postList()
        .then((response) => {
          this.postList = response.data.data.rows;
        })
        .catch((error) => {
          this.$bvToast.toast(error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    handlePostDetail(postId) {
      this.$router.push("/community/PostDetail?pid=" + postId);
    },
  },
  created() {
    this.getPostList();
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

.post-list-card {
  width: 49.5%;
  box-sizing: border-box;
}

.right-div {
  flex: 0 0 29%;
}
</style>
