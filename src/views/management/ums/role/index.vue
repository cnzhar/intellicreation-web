<template>
  <div>
    <b-form-group label="筛选">
      <label>id</label>
      <b-form-input
        v-model="roleQueryParam.id"
        id="feedback-user"
      ></b-form-input>
      <label>角色名</label>
      <b-form-input
        v-model="roleQueryParam.roleName"
        id="feedback-user"
      ></b-form-input>
      <label>角色Key</label>
      <b-form-input
        v-model="roleQueryParam.roleKey"
        id="feedback-user"
      ></b-form-input>
      <b-button @click="getRoleList" variant="success">查询</b-button>
      <b-button @click="handleReset" variant="secondary">重置</b-button>
    </b-form-group>
    <b-button @click="handleAddNew" variant="primary">新增</b-button>
    <AddNewRoleModal ref="addNewRoleModalRef"></AddNewRoleModal>
    <b-table striped hover :items="roleList" :fields="fields" :busy="isBusy">
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
import { roleList } from "@/api/admin";
import AddNewRoleModal from "@/views/management/ums/role/components/AddNewRoleModal";

export default {
  name: "role-index",
  data() {
    return {
      roleQueryParam: {
        id: null,
        roleName: null,
        roleKey: null,
      },
      roleList: [],
      fields: [
        { key: "id", label: "ID" },
        { key: "roleName", label: "角色名" },
        { key: "roleKey", label: "角色Key" },
        { key: "actions", label: "操作" },
      ],
      isBusy: false,
    };
  },
  components: {
    AddNewRoleModal,
  },
  methods: {
    handleAddNew() {
      this.$refs.addNewRoleModalRef.showModalMethod();
    },
    getRoleList() {
      this.isBusy = true;
      roleList(this.roleQueryParam)
        .then((response) => {
          this.roleList = response.data.data.rows;
          this.isBusy = false;
        })
        .catch((error) => {
          this.$bvToast.toast("查询角色列表失败！错误信息：" + error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    handleReset() {
      this.roleQueryParam.id = null;
      this.roleQueryParam.roleName = null;
      this.roleQueryParam.roleKey = null;
      this.getRoleList();
    },
    onButtonClick(item) {
      alert(`按钮被点击，数据项 ID: ${item.id}`);
    },
  },
  created() {
    this.getRoleList();
  },
};
</script>

<style scoped></style>
