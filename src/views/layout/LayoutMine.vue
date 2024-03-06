<template>
  <div>
    <HeaderBar></HeaderBar>
    <div class="main-content-wrapper flex-column">
      <MineHeader></MineHeader>
      <div class="parent mt-2">
        <div class="left-div">
          <MineSideBar></MineSideBar>
        </div>
        <div class="right-div">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/views/layout/components/HeaderBar";
import MineHeader from "@/views/layout/components/MineHeader";
import MineSideBar from "@/views/layout/components/MineSideBar";

export default {
  name: "LayoutMine",
  components: {
    HeaderBar,
    MineHeader,
    MineSideBar,
  },
};
</script>

<style scoped>
.parent {
  display: flex;
  width: 100%;
}

.left-div {
  flex: 0 0 16%;
  margin-right: 1%;
}

.right-div {
  flex: 0 0 83%;
}
</style>
