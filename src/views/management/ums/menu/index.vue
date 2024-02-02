<template>
  <div>
    <b-form-group label="筛选">
      <label>id</label>
      <b-form-input
        v-model="menuQueryParam.id"
        id="feedback-user"
      ></b-form-input>
      <label>菜单名</label>
      <b-form-input
        v-model="menuQueryParam.menuName"
        id="feedback-user"
      ></b-form-input>
      <label>菜单路径</label>
      <b-form-input
        v-model="menuQueryParam.path"
        id="feedback-user"
      ></b-form-input>
      <b-button @click="getMenuList" variant="success">查询</b-button>
      <b-button @click="handleReset" variant="secondary">重置</b-button>
    </b-form-group>
    <b-button @click="handleAddNew" variant="primary">新增</b-button>
    <AddNewMenuModal ref="addNewMenuModalRef"></AddNewMenuModal>
    <b-table striped hover :items="menuList" :fields="fields" :busy="isBusy">
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong> 加载中... </strong>
        </div>
      </template>
      <template #cell(actions)="data">
        <label @click="onButtonClick(data.item)">角色名</label>
      </template>
    </b-table>
  </div>
</template>

<script>
import { menuList } from "@/api/admin";
import AddNewMenuModal from "@/views/management/ums/menu/components/AddNewMenuModal";

export default {
  name: "menu-index",
  data() {
    return {
      menuQueryParam: {
        id: null,
        menuName: null,
        path: null,
      },
      menuList: [],
      fields: [
        { key: "id", label: "ID" },
        { key: "menuName", label: "菜单名" },
        { key: "path", label: "菜单路径" },
        { key: "actions", label: "操作" },
      ],
      isBusy: false,
    };
  },
  components: {
    AddNewMenuModal,
  },
  methods: {
    handleAddNew() {
      this.$refs.addNewMenuModalRef.showModalMethod();
    },
    getMenuList() {
      this.isBusy = true;
      menuList(this.menuQueryParam)
        .then((response) => {
          this.menuList = response.data.data.rows;
          this.isBusy = false;
        })
        .catch((error) => {
          this.$bvToast.toast("查询菜单列表失败！错误信息：" + error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    handleReset() {
      this.menuQueryParam.id = null;
      this.menuQueryParam.menuName = null;
      this.menuQueryParam.path = null;
      this.getMenuList();
    },
    onButtonClick(item) {
      alert(`按钮被点击，数据项 ID: ${item.id}`);
    },
  },
  created() {
    this.getMenuList();
  },
};
</script>

<style scoped></style>
