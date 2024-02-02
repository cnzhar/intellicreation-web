<template>
  <div>
    <HeaderBar></HeaderBar>
    <div class="parent">
      <div class="left-child">
        <SideBar></SideBar>
      </div>
      <div class="right-child">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/views/layout/components/HeaderBar";
import SideBar from "@/views/layout/components/SideBar";
export default {
  name: "LayoutHorizontal",
  components: {
    HeaderBar,
    SideBar,
  },
};
</script>

<style scoped>
.parent {
  display: flex;
}

.left-child {
  flex: 0 0 16%;
}

.right-child {
  flex: 0 0 84%;
  margin-top: 3.5rem;
}
</style>
