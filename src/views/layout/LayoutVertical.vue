<template>
  <div>
    <HeaderBar></HeaderBar>
    <div class="parent">
      <b-card class="shadow left-child side-card">
        <SideBar></SideBar>
      </b-card>
      <div class="right-child">
        <b-breadcrumb class="no-background right-body p-0 mb-2">
          <transition-group name="breadcrumb" class="d-flex">
            <b-breadcrumb-item
              v-for="(item, index) in breadCrumbItems"
              :key="item.to + index"
              :to="item.to"
              :active="item.active"
              >{{ item.text }}</b-breadcrumb-item
            >
          </transition-group>
        </b-breadcrumb>
        <div class="right-body">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/views/layout/components/HeaderBar";
import SideBar from "@/views/layout/components/SideNav";

export default {
  name: "LayoutVertical",
  data() {
    return {
      breadCrumbItems: [],
    };
  },
  components: {
    HeaderBar,
    SideBar,
  },
  methods: {
    getBreadCrumb() {
      this.breadCrumbItems = this.$route.meta.breadcrumb;
      console.log(this.breadCrumbItems);
    },
  },
  watch: {
    $route() {
      this.getBreadCrumb();
    },
  },
  created() {
    this.getBreadCrumb();
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
  transform: translate(10%, calc(-50% + 1.5rem));
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
  margin-top: 4.5rem;
  margin-left: 16%; /* 留出左侧导航栏的宽度 */
}

.right-body {
  width: 96%;
  margin: 0 auto;
}
</style>
