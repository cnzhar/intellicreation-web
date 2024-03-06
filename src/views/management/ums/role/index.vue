<template>
  <div>
    <b-card class="shadow">
      <b-form-group label="筛选">
        <b-row class="my-1">
          <b-col sm="3">
            <label>id</label>
            <b-form-input
              v-model="roleQueryParam.id"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>角色名</label>
            <b-form-input
              v-model="roleQueryParam.roleName"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>角色Key</label>
            <b-form-input
              v-model="roleQueryParam.roleKey"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <b-button @click="getRoleList" variant="success">查询</b-button>
            <b-button @click="handleReset" variant="secondary">重置</b-button>
          </b-col>
        </b-row>
      </b-form-group>
    </b-card>
    <b-card class="shadow mt-3">
      <b-button @click="handleAddNew" variant="primary">新增</b-button>
      <b-table
        hover
        class="mt-2"
        :items="roleList"
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
          <b-button
            class="plain-button"
            @click="handleView(data.item)"
            variant="primary"
            ><b-icon icon="eye"></b-icon
          ></b-button>
          <b-button
            class="plain-button"
            @click="handleEdit(data.item)"
            variant="primary"
            ><b-icon icon="pencil-square"></b-icon
          ></b-button>
          <b-button class="plain-button" @click="handleSet(data.item)"
            ><b-icon icon="gear" variant="primary"></b-icon
          ></b-button>
          <b-button class="plain-button" @click="handleDelete(data.item)"
            ><b-icon icon="trash" variant="primary"></b-icon
          ></b-button>
        </template>
      </b-table>
      <b-row class="my-1">
        <b-col sm="2">
          <b-form-select
            v-model="roleQueryParam.pageSize"
            :options="pageSizeOptions"
            @change="handlePageSizeChange"
          ></b-form-select>
        </b-col>
        <b-col sm="7" class="ms-auto"></b-col>
        <b-col sm="3" class="ms-auto">
          <b-pagination
            v-model="roleQueryParam.pageNum"
            :total-rows="totalRows"
            :per-page="roleQueryParam.pageSize"
            @change="handlePageNumChange"
            aria-controls="my-table"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-card>
    <AddNewRoleModal ref="addNewRoleModalRef"></AddNewRoleModal>
    <EditRoleModal ref="editRoleModalRef"></EditRoleModal>
    <SetRoleModal ref="setRoleModalRef"></SetRoleModal>
    <DeleteRoleConfirmModal
      ref="deleteRoleConfirmModalRef"
    ></DeleteRoleConfirmModal>
  </div>
</template>

<script>
import {
  getDefaultData,
  roleMethods,
} from "@/views/management/ums/role/useRole";
import AddNewRoleModal from "@/views/management/ums/role/components/AddNewRoleModal";
import EditRoleModal from "@/views/management/ums/role/components/EditRoleModal";
import SetRoleModal from "@/views/management/ums/role/components/SetRoleModal";
import DeleteRoleConfirmModal from "@/views/management/ums/role/components/DeleteRoleConfirmModal";

export default {
  name: "role-index",
  data() {
    return getDefaultData();
  },
  components: {
    AddNewRoleModal,
    EditRoleModal,
    SetRoleModal,
    DeleteRoleConfirmModal,
  },
  methods: {
    ...roleMethods,
  },
  created() {
    this.getRoleList();
  },
};
</script>

<style scoped></style>
