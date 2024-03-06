<template>
  <div>
    <div class="sidebar-main">
      <ul class="nav nav-pills flex-column">
        <li v-for="(item, index) in currentCategoryList" :key="'menu' + index">
          <a
            href="#"
            v-b-toggle="'collapse-' + index"
            class="nav-link link-dark"
          >
            <b-icon :icon="item.icon" aria-hidden="true"></b-icon>
            {{ item.name }}
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
                  @click="handleSelected(childItem.id)"
                  :active="selectedNavItem === childItem.id"
                >
                  <span class="text-danger">{{ childItem.name }}</span>
                </b-nav-item>
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { categoryList } from "@/api/article";

export default {
  name: "SideCategoryNav",
  data() {
    return {
      currentCategoryList: [],
      selectedNavItem: "",
    };
  },
  methods: {
    getCategoryList() {
      categoryList()
        .then((response) => {
          this.currentCategoryList = response.data.data;
        })
        .catch((error) => {
          this.$bvToast.toast(error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    handleSelected(itemName) {
      if (this.$route.query.category2Id !== itemName) {
        this.$router.push(`/CategoryRead/index?category2Id=${itemName}`);
      }
    },
    setActive() {
      this.selectedNavItem = this.$route.query.category2Id;
    },
  },
  watch: {
    // 监听$route对象
    $route() {
      this.setActive();
    },
  },
  created() {
    this.getCategoryList();
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
