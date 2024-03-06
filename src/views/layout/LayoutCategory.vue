<template>
  <div>
    <HeaderBar></HeaderBar>
    <div class="main-content-wrapper">
      <div class="parent">
        <b-card class="shadow left-child side-card">
          <SideCategoryNav></SideCategoryNav>
        </b-card>
        <div class="right-child">
          <div class="right-body">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/views/layout/components/HeaderBar";
import SideCategoryNav from "@/views/CategoryRead/components/SideCategoryNav";

export default {
  name: "LayoutCategory",
  components: {
    HeaderBar,
    SideCategoryNav,
  },
};
</script>

<style scoped>
.parent {
  display: flex;
}

.left-child {
  flex: 0 0 20%;
  position: fixed;
  top: 50%;
  transform: translate(10%, calc(-50% + 1.75rem));
  width: 15%;
  height: 90vh;
  overflow-y: auto; /* 垂直滚动条 */
}

/* 隐藏左侧滚动条 */
.left-child::-webkit-scrollbar {
  display: none;
}

.right-child {
  flex: 1; /* 右侧内容占据剩余宽度 */
  margin-left: 20%; /* 留出左侧导航栏的宽度 */
}

.right-body {
  width: 96%;
  margin: 0 auto;
}
</style>
