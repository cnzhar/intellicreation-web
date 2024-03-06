<template>
  <div class="text-center">
    <b-card class="shadow">
      <b-avatar
        class="mine-card-item"
        variant="danger"
        text="FF"
        :src="mineInfo.avatar"
      ></b-avatar>
      <span>{{ mineInfo.nickname }}</span>
      <b-container>
        <b-row>
          <b-col>帖子</b-col>
          <b-col>评论</b-col>
          <b-col>等级</b-col>
        </b-row>
        <b-row>
          <b-col>{{ mineInfo.postCount }}</b-col>
          <b-col>{{ mineInfo.postCommentCount }}</b-col>
          <b-col
            ><b-badge variant="primary"
              >LV.{{ mineInfo.exp | expLevel }}</b-badge
            ></b-col
          >
        </b-row>
      </b-container>
      <b-button
        class="mine-card-item w-100 mt-2"
        @click="handleCreatePost"
        variant="primary"
        >发布帖子</b-button
      >
      <b-button class="w-100 mt-2" @click="createPost" variant="primary"
        >我的帖子</b-button
      >
    </b-card>
  </div>
</template>

<script>
import {
  getDefaultData,
  communityMineCardMethods,
} from "@/views/community/useCommunityMineCard";
import { expLevel } from "@/utils/expUtils";

export default {
  name: "CommunityMineCard",
  data() {
    return getDefaultData();
  },
  filters: {
    expLevel,
  },
  methods: {
    ...communityMineCardMethods,
  },
  created() {
    this.getCommunityMineCardInfo();
  },
};
</script>

<style scoped>
.mine-card-item {
  display: block;
  margin: 0 auto;
}
</style>
