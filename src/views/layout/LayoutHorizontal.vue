<template>
  <div>
    <HeaderBar></HeaderBar>
    <router-view />
  </div>
</template>

<script>
import HeaderBar from "@/views/layout/components/HeaderBar";
export default {
  name: "layoutHorizontal",
  components: {
    HeaderBar,
  },
};
</script>

<style scoped></style>
