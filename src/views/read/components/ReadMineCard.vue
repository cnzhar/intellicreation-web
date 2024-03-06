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
          <b-col>文章</b-col>
          <b-col>评价</b-col>
          <b-col>等级</b-col>
        </b-row>
        <b-row>
          <b-col>{{ mineInfo.articleCount }}</b-col>
          <b-col>{{ mineInfo.ratingCount }}</b-col>
          <b-col
            ><b-badge variant="primary"
              >LV.{{ mineInfo.exp | expLevel }}</b-badge
            ></b-col
          >
        </b-row>
      </b-container>
      <b-button
        class="mine-card-item mt-2 w-100"
        @click="goToCreation"
        variant="primary"
        >开始创作</b-button
      >
      <b-button
        class="w-100 mt-2"
        @click="goToMineArticlePage"
        variant="primary"
        >我的文章</b-button
      >
    </b-card>
  </div>
</template>

<script>
import {
  getDefaultData,
  readMineCardMethods,
} from "@/views/read/components/useReadMineCard";
import { expLevel } from "@/utils/expUtils";

export default {
  name: "ReadMineCard",
  data() {
    return getDefaultData();
  },
  filters: {
    expLevel,
  },
  methods: {
    ...readMineCardMethods,
  },
  created() {
    this.getReadMineCardInfo();
  },
};
</script>

<style scoped>
.mine-card-item {
  display: block;
  margin: 0 auto;
}
</style>
