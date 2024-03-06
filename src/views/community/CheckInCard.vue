<template>
  <div class="text-center">
    <b-card class="shadow">
      <b-calendar
        v-model="value"
        @context="onContext"
        locale="zh-CN"
        label-help=""
        block
        hide-header
      ></b-calendar>
      <b-button @click="createPost" variant="primary" class="w-100 mt-2"
        >立即签到</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CheckInCard",
};
</script>

<style scoped>
.check-in-card-item {
  display: block;
  margin: 0 auto;
}
</style>
