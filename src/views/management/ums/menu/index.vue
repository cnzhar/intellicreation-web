<template>
  <div>
    <b-card class="shadow managementCard-body">
      <b-form-group label="筛选">
        <b-row class="my-1">
          <b-col sm="3">
            <label>id</label>
            <b-form-input
              v-model="menuQueryParam.id"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>菜单名</label>
            <b-form-input
              v-model="menuQueryParam.menuName"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>菜单路径</label>
            <b-form-input
              v-model="menuQueryParam.path"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <b-button @click="getMenuList" variant="success">查询</b-button>
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
        :items="menuList"
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
            v-model="menuQueryParam.pageSize"
            :options="pageSizeOptions"
            @change="handlePageSizeChange"
          ></b-form-select>
        </b-col>
        <b-col sm="7" class="ms-auto"></b-col>
        <b-col sm="3" class="ms-auto">
          <b-pagination
            v-model="menuQueryParam.pageNum"
            :total-rows="totalRows"
            :per-page="menuQueryParam.pageSize"
            @change="handlePageNumChange"
            aria-controls="my-table"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-card>
    <AddNewMenuModal ref="addNewMenuModalRef"></AddNewMenuModal>
    <EditMenuModal ref="editMenuDetailModalRef"></EditMenuModal>
    <DeleteMenuConfirmModal
      ref="deleteMenuConfirmModalRef"
    ></DeleteMenuConfirmModal>
  </div>
</template>

<script>
import {
  getDefaultData,
  menuMethods,
} from "@/views/management/ums/menu/useMenu";
import AddNewMenuModal from "@/views/management/ums/menu/components/AddNewMenuModal";
import EditMenuModal from "@/views/management/ums/menu/components/EditMenuModal";
import DeleteMenuConfirmModal from "@/views/management/ums/menu/components/DeleteMenuConfirmModal";

export default {
  name: "menu-index",
  data() {
    return getDefaultData();
  },
  components: {
    AddNewMenuModal,
    EditMenuModal,
    DeleteMenuConfirmModal,
  },
  methods: {
    ...menuMethods,
  },
  created() {
    this.getMenuList();
  },
};
</script>

<style scoped></style>
