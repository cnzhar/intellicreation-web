<template>
  <div>
    <b-form-group label="筛选">
      <label>id</label>
      <b-form-input
        v-model="permissionQueryParam.id"
        id="feedback-user"
      ></b-form-input>
      <label>权限名</label>
      <b-form-input
        v-model="permissionQueryParam.permissionName"
        id="feedback-user"
      ></b-form-input>
      <label>权限Key</label>
      <b-form-input
        v-model="permissionQueryParam.permissionKey"
        id="feedback-user"
      ></b-form-input>
      <b-button @click="getPermissionList" variant="success">查询</b-button>
      <b-button @click="handleReset" variant="secondary">重置</b-button>
    </b-form-group>
    <b-button @click="handleAddNew" variant="primary">新增</b-button>
    <AddNewPermissionModal
      ref="addNewPermissionModalRef"
    ></AddNewPermissionModal>
    <b-table
      striped
      hover
      :items="permissionList"
      :fields="fields"
      :busy="isBusy"
    >
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
import { permissionList } from "@/api/admin";
import AddNewPermissionModal from "@/views/management/ums/permission/components/AddNewPermissionModal";

export default {
  name: "permission-index",
  data() {
    return {
      permissionQueryParam: {
        id: null,
        permissionName: null,
        permissionKey: null,
      },
      permissionList: [],
      fields: [
        { key: "id", label: "ID" },
        { key: "permissionName", label: "权限名" },
        { key: "permissionKey", label: "权限Key" },
        { key: "actions", label: "操作" },
      ],
      isBusy: false,
    };
  },
  components: {
    AddNewPermissionModal,
  },
  methods: {
    handleAddNew() {
      this.$refs.addNewPermissionModalRef.showModalMethod();
    },
    getPermissionList() {
      this.isBusy = true;
      permissionList(this.permissionQueryParam)
        .then((response) => {
          this.permissionList = response.data.data.rows;
          this.isBusy = false;
        })
        .catch((error) => {
          this.$bvToast.toast("查询权限列表失败！错误信息：" + error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    handleReset() {
      this.permissionQueryParam.id = null;
      this.permissionQueryParam.permissionName = null;
      this.permissionQueryParam.permissionKey = null;
      this.getPermissionList();
    },
    onButtonClick(item) {
      alert(`按钮被点击，数据项 ID: ${item.id}`);
    },
  },
  created() {
    this.getPermissionList();
  },
};
</script>

<style scoped></style>
