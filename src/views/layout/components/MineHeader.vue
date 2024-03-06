<template>
  <div>
    <b-card
      overlay
      img-src="https://intellicreation-1317922175.cos.ap-shanghai.myqcloud.com/intellicreation/2024/1/29/2197ff44-a2a6-46cc-b430-8a9581bdb31e.png"
      img-alt="个人信息背景"
      text-variant="white"
      class="shadow"
    >
      <b-avatar
        @click="goToProfilePage"
        variant="danger"
        text="FF"
        :src="headerInfo.avatar"
        class="align-middle"
      >
      </b-avatar>
      <span class="align-middle ml-2">{{ headerInfo.nickname }}</span>
      <b-card-text>
        {{ headerInfo.personalizedSignature }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { headerInfo } from "@/api/mine";

export default {
  name: "MineHeader",
  data() {
    return {
      headerInfo: {},
      mineInfoQueryParam: {
        memberId: null,
      },
    };
  },
  methods: {
    getHeaderInfo() {
      this.mineInfoQueryParam.memberId =
        this.$route.query.mid === undefined
          ? 1
          : parseInt(this.$route.query.mid);
      headerInfo(this.mineInfoQueryParam)
        .then((response) => {
          this.headerInfo = response.data.data;
        })
        .catch((error) => {
          this.$bvToast.toast(error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
  },
  created() {
    this.getHeaderInfo();
  },
};
</script>

<style scoped></style>
