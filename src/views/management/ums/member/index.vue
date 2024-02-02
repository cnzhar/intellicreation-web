<template>
  <div>
    <b-form-group label="筛选">
      <label>id</label>
      <b-form-input
        v-model="memberQueryParam.id"
        id="feedback-user"
      ></b-form-input>
      <label>uid</label>
      <b-form-input
        v-model="memberQueryParam.uid"
        id="feedback-user"
      ></b-form-input>
      <label>昵称</label>
      <b-form-input
        v-model="memberQueryParam.nickname"
        id="feedback-user"
      ></b-form-input>
      <b-button @click="getMemberList" variant="success">查询</b-button>
      <b-button @click="handleReset" variant="danger">重置</b-button>
    </b-form-group>
    <b-button @click="handleAddNew" variant="primary">新增</b-button>
    <b-table striped hover :items="memberList" :fields="fields" :busy="isBusy">
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
          >查看</b-button
        >
        <b-button
          class="plain-button"
          @click="handleEdit(data.item)"
          variant="primary"
          >修改</b-button
        >
      </template>
    </b-table>
    <AddNewMemberModal ref="addNewMemberModalRef"></AddNewMemberModal>
    <MemberDetailModal ref="memberDetailModalRef"></MemberDetailModal>
    <EditMemberModal ref="editMemberModalRef"></EditMemberModal>
    <ViewMemberModal ref="viewMemberDetailModalRef"></ViewMemberModal>
  </div>
</template>

<script>
import { memberList } from "@/api/admin";
import AddNewMemberModal from "@/views/management/ums/member/components/AddNewMemberModal";
import ViewMemberModal from "@/views/management/ums/member/components/ViewMemberModal";
import EditMemberModal from "@/views/management/ums/member/components/EditMemberModal";

export default {
  name: "member-index",
  data() {
    return {
      isShowAddNew: false,
      memberQueryParam: {
        id: null,
        uid: null,
        nickname: null,
      },
      memberList: [],
      fields: [
        { key: "id", label: "ID" },
        { key: "uid", label: "uid" },
        { key: "nickname", label: "昵称" },
        { key: "actions", label: "操作" },
      ],
      isBusy: false,
    };
  },
  components: {
    AddNewMemberModal,
    ViewMemberModal,
    EditMemberModal,
  },
  methods: {
    handleAddNew() {
      this.$refs.addNewMemberModalRef.showModalMethod();
    },
    getMemberList() {
      this.isBusy = true;
      memberList(this.memberQueryParam)
        .then((response) => {
          this.memberList = response.data.data.rows;
          this.isBusy = false;
        })
        .catch((error) => {
          this.$bvToast.toast("查询用户列表失败！错误信息：" + error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    handleReset() {
      this.memberQueryParam.id = null;
      this.memberQueryParam.uid = null;
      this.memberQueryParam.nickname = null;
      this.getMemberList();
    },
    handleView(item) {
      this.$refs.viewMemberDetailModalRef.showModalMethod(item.id);
    },
    handleEdit(item) {
      this.$refs.editMemberModalRef.showModalMethod(item.id);
    },
  },
  created() {
    this.getMemberList();
  },
};
</script>

<style scoped></style>
