<template>
  <div>
    <div
      class="d-flex flex-column flex-shrink-0 p-3 bg-light shadow"
      style="height: 100vh"
    >
      <div class="start-element"></div>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page">
            <b-icon icon="house-door" aria-hidden="true"></b-icon>
            数据
          </a>
        </li>
        <li v-for="(item, index) in currentMenuList" :key="'menu' + index">
          <a
            href="#"
            v-b-toggle="'collapse-' + index"
            class="nav-link link-dark"
          >
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
                <a :href="childItem.path" class="nav-link" aria-current="page">
                  {{ childItem.menuName }}
                </a>
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { routerList } from "@/api/admin";

export default {
  name: "SideBar",
  data() {
    return {
      currentMenuList: {},
    };
  },
  methods: {
    getMenuList() {
      routerList()
        .then((response) => {
          this.currentMenuList = response.data.data.menus;
          console.log(this.currentMenuList);
        })
        .catch((error) => {
          this.$bvToast.toast(error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    setActive() {
      const links = document.querySelectorAll(".nav-link"); // 获取所有导航链接
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active"); // 移除所有导航链接的 active 类
      }
      // element.classList.add("active"); // 添加 active 类到当前点击的导航链接
    },
  },
  created() {
    this.getMenuList();
    this.setActive();
  },
};
</script>

<style scoped>
.start-element {
  margin-top: 3.5rem;
}

.active {
  background: #42b983;
}
</style>
