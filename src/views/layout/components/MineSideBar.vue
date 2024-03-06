<template>
  <div>
    <b-card text-variant="red" class="shadow">
      <div class="sidebar-main">
        <ul class="nav nav-pills flex-column">
          <li
            v-for="(item, index) in currentMenuList"
            :key="'currentMenuList' + index"
          >
            <b-nav-item
              :to="item.path + $data.mid"
              :active="item.path.startsWith(selectedNavItem)"
            >
              {{ item.menuName }}
            </b-nav-item>
          </li>
        </ul>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  getDefaultData,
  mimeSideBarMethods,
} from "@/views/layout/components/useMineSideBar";

export default {
  name: "MineSideBar",
  data() {
    return getDefaultData();
  },
  watch: {
    // 监听$route对象
    $route() {
      this.setActive();
      this.setIsMineSpace();
    },
  },
  methods: {
    ...mimeSideBarMethods,
  },
  created() {
    this.setActive();
    this.setIsMineSpace();
  },
};
</script>

<style scoped></style>
