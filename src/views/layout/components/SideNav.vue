<template>
  <div class="sidebar-main">
    <ul class="nav nav-pills flex-column">
      <li v-for="(item, index) in currentMenuList" :key="'menu' + index">
        <a href="#" v-b-toggle="'collapse-' + index" class="nav-link link-dark">
          <b-icon :icon="item.icon" aria-hidden="true"></b-icon>
          {{ item.menuName }}
        </a>
        <b-collapse
          v-for="(childItem, childIndex) in item.children"
          :key="'childMenu' + childIndex"
          :id="'collapse-' + index"
          class="mt-2"
        >
          <ul>
            <li class="nav-item">
              <b-nav-item
                :to="childItem.path"
                :active="selectedNavItem.startsWith(childItem.path)"
              >
                {{ childItem.menuName }}
              </b-nav-item>
            </li>
          </ul>
        </b-collapse>
      </li>
    </ul>
  </div>
</template>

<script>
import { routerList } from "@/api/member";

export default {
  name: "SideNav",
  data() {
    return {
      currentMenuList: [],
      selectedNavItem: "",
    };
  },
  methods: {
    getMenuList() {
      routerList()
        .then((response) => {
          this.currentMenuList = response.data.data.menus;
        })
        .catch((error) => {
          this.$bvToast.toast(error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    setActive() {
      this.selectedNavItem = window.location.pathname;
    },
  },
  watch: {
    // 监听$route对象
    $route() {
      this.setActive();
    },
  },
  created() {
    this.getMenuList();
    this.setActive();
  },
};
</script>

<style scoped></style>
