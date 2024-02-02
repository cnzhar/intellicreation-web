<template>
  <div>
    <HeaderBar></HeaderBar>
    <router-view />
  </div>
</template>

<script>
import HeaderBar from "@/views/layout/components/HeaderBar";
export default {
  name: "layout-vertical",
  components: {
    HeaderBar,
  },
};
</script>

<style scoped></style>
