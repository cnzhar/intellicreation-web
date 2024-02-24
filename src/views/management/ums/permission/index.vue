<template>
  <div>
    <b-card class="shadow managementCard-body">
      <b-form-group label="筛选">
        <b-row class="my-1">
          <b-col sm="3">
            <label>id</label>
            <b-form-input
              v-model="permissionQueryParam.id"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>权限名</label>
            <b-form-input
              v-model="permissionQueryParam.permissionName"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>权限Key</label>
            <b-form-input
              v-model="permissionQueryParam.permissionKey"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <b-button @click="getPermissionList" variant="success"
              >查询</b-button
            >
            <b-button @click="handleReset" variant="secondary">重置</b-button>
          </b-col>
        </b-row>
      </b-form-group>
    </b-card>
    <b-card class="shadow managementCard-body mt-3">
      <b-button @click="handleAddNew" variant="primary">新增</b-button>
      <b-table
        hover
        class="mt-2"
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
          <b-button
            class="plain-button"
            @click="handleView(data.item)"
            variant="primary"
            ><b-icon icon="eye" variant="primary"></b-icon
          ></b-button>
          <b-button
            class="plain-button"
            @click="handleEdit(data.item)"
            variant="primary"
            ><b-icon icon="pencil-square" variant="primary"></b-icon
          ></b-button>
          <b-button class="plain-button" @click="handleDelete(data.item)"
            ><b-icon icon="trash" variant="primary"></b-icon
          ></b-button>
        </template>
      </b-table>
      <b-row class="my-1">
        <b-col sm="2">
          <b-form-select
            v-model="permissionQueryParam.pageSize"
            :options="pageSizeOptions"
            @change="handlePageSizeChange"
          ></b-form-select>
        </b-col>
        <b-col sm="7" class="ms-auto"></b-col>
        <b-col sm="3" class="ms-auto">
          <b-pagination
            v-model="permissionQueryParam.pageNum"
            :total-rows="totalRows"
            :per-page="permissionQueryParam.pageSize"
            @change="handlePageNumChange"
            aria-controls="my-table"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-card>
    <AddNewPermissionModal
      ref="addNewPermissionModalRef"
    ></AddNewPermissionModal>
    <EditPermissionModal
      ref="editPermissionDetailModalRef"
    ></EditPermissionModal>
    <DeletePermissionConfirmModal
      ref="deletePermissionConfirmModalRef"
    ></DeletePermissionConfirmModal>
  </div>
</template>

<script>
import {
  getDefaultData,
  permissionMethods,
} from "@/views/management/ums/permission/usePermission";
import AddNewPermissionModal from "@/views/management/ums/permission/components/AddNewPermissionModal";
import EditPermissionModal from "@/views/management/ums/permission/components/EditPermissionModal";
import DeletePermissionConfirmModal from "@/views/management/ums/permission/components/DeletePermissionConfirmModal";

export default {
  name: "permission-index",
  data() {
    return getDefaultData();
  },
  components: {
    AddNewPermissionModal,
    EditPermissionModal,
    DeletePermissionConfirmModal,
  },
  methods: {
    ...permissionMethods,
  },
  created() {
    this.getPermissionList();
  },
};
</script>

<style scoped></style>
