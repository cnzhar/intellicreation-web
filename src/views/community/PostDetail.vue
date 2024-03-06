<template>
  <div class="main-content-wrapper">
    <div class="left-div">
      <b-card class="shadow">
        <b-button class="plain-button" @click="goBack"
          ><b-icon icon="chevron-left" variant="primary"></b-icon>返回</b-button
        >
      </b-card>
      <b-card class="shadow mt-2">
        <h4 class="text-center">
          <strong class="text-primary">{{ post.title }}</strong>
        </h4>
        <b-avatar
          variant="danger"
          text="FF"
          class="align-middle"
          :src="post.avatar"
        ></b-avatar>
        <span class="align-middle ml-2">{{ post.nickname }}</span>
        <p class="mt-2">{{ post.content }}</p>
      </b-card>
      <b-card class="shadow mt-2">
        <h5>发表评论</h5>
        <b-form-textarea
          id="textarea-no-resize"
          class="mt-2"
          v-model="myComment.text"
          placeholder="来一条友善的评论吧"
          rows="3"
          no-resize
        ></b-form-textarea>
        <b-button class="mt-2" @click="handlePostRating" variant="success"
          >发布</b-button
        >
      </b-card>
      <b-card
        v-for="(item, index) in comments"
        :key="'comment' + index"
        class="shadow mt-2"
      >
        <b-avatar
          variant="danger"
          text="FF"
          class="align-middle"
          :src="item.avatar"
        ></b-avatar>
        <span class="align-middle ml-2"
          ><a class="pointer" @click="toMemberSpace(item.createBy)">{{
            item.nickname
          }}</a></span
        >
        <p class="mt-2">{{ item.content }}</p>
        <p>{{ item.gmtCreate | timeAgo }}<a class="pointer ml-3">回复</a></p>
        <ul v-show="item.children">
          <li
            v-for="(childItem, childIndex) in item.children"
            :key="'childComment' + childIndex"
          >
            <b-avatar
              variant="danger"
              text="FF"
              class="align-middle"
              :src="childItem.avatar"
            ></b-avatar>
            <span class="align-middle ml-2"
              ><a class="pointer" @click="toMemberSpace(childItem.createBy)">{{
                childItem.nickname
              }}</a></span
            >
            <p class="mt-2">
              回复 <a class="pointer">@{{ childItem.toCommentMemberName }}</a
              >：{{ childItem.content }}
            </p>
            <p>
              {{ childItem.gmtCreate | timeAgo
              }}<a class="pointer ml-2">回复</a>
            </p>
          </li>
        </ul>
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
import {
  getDefaultData,
  postDetailMethods,
} from "@/views/community/usePostDetail";
import { timeAgo } from "@/utils/timeUtils";

export default {
  name: "PostDetail",
  data() {
    return getDefaultData();
  },
  components: {
    CommunityMineCard,
    CheckInCard,
  },
  filters: {
    timeAgo,
  },
  methods: {
    ...postDetailMethods,
  },
  created() {
    this.getPostDetail();
    this.getCommentList();
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
</style>
