<template>
  <div>
    <b-card class="shadow">
      <b-form-group label="筛选">
        <b-row class="my-1">
          <b-col sm="3">
            <label>id</label>
            <b-form-input
              v-model="memberQueryParam.id"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>UID</label>
            <b-form-input
              v-model="memberQueryParam.uid"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>昵称</label>
            <b-form-input
              v-model="memberQueryParam.nickname"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <b-button @click="getMemberList" variant="success">查询</b-button>
            <b-button @click="handleReset" variant="danger">重置</b-button>
          </b-col>
        </b-row>
      </b-form-group>
    </b-card>
    <b-card class="shadow mt-3">
      <b-button @click="handleAddNew" variant="primary">新增</b-button>
      <b-table
        hover
        class="mt-2"
        :items="memberList"
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
          <b-button class="plain-button" @click="handleView(data.item)"
            ><b-icon icon="eye" variant="primary"></b-icon
          ></b-button>
          <b-button class="plain-button" @click="handleEdit(data.item)"
            ><b-icon icon="pencil-square" variant="primary"></b-icon
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
            v-model="memberQueryParam.pageSize"
            :options="pageSizeOptions"
            @change="handlePageSizeChange"
          ></b-form-select>
        </b-col>
        <b-col sm="7" class="ms-auto"></b-col>
        <b-col sm="3" class="ms-auto">
          <b-pagination
            v-model="memberQueryParam.pageNum"
            :total-rows="totalRows"
            :per-page="memberQueryParam.pageSize"
            @change="handlePageNumChange"
            aria-controls="my-table"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-card>
    <AddNewMemberModal ref="addNewMemberModalRef"></AddNewMemberModal>
    <EditMemberModal ref="editMemberModalRef"></EditMemberModal>
    <SetMemberModal ref="setMemberModalRef"></SetMemberModal>
    <DeleteMemberConfirmModal
      ref="deleteMemberConfirmModalRef"
    ></DeleteMemberConfirmModal>
  </div>
</template>

<script>
import {
  getDefaultData,
  memberMethods,
} from "@/views/management/ums/member/useMember";
import AddNewMemberModal from "@/views/management/ums/member/components/AddNewMemberModal";
import EditMemberModal from "@/views/management/ums/member/components/EditMemberModal";
import SetMemberModal from "@/views/management/ums/member/components/SetMemberModal";
import DeleteMemberConfirmModal from "@/views/management/ums/member/components/DeleteMemberConfirmModal";

export default {
  name: "member-index",
  data() {
    return getDefaultData();
  },
  components: {
    AddNewMemberModal,
    EditMemberModal,
    SetMemberModal,
    DeleteMemberConfirmModal,
  },
  methods: {
    ...memberMethods,
  },
  created() {
    this.getMemberList();
  },
};
</script>

<style scoped></style>
