<template>
  <div>
    <HeaderBar></HeaderBar>
    <div class="parent">
      <div class="left-child">
        <SideBar></SideBar>
      </div>
      <div class="right-child">
        <b-breadcrumb class="no-background">
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

        <router-view />
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
  flex: 0 0 16%;
  height: 100%;
}

.right-child {
  flex: 0 0 84%;
  margin-top: 3.5rem;
  overflow-x: hidden;
}
</style>
