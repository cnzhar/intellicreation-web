<template>
  <div>
    <b-card class="shadow managementCard-body">
      <b-form-group label="筛选">
        <b-row class="my-1">
          <b-col sm="3">
            <label>id</label>
            <b-form-input
              v-model="tagQueryParam.id"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>标签名</label>
            <b-form-input
              v-model="tagQueryParam.name"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>描述</label>
            <b-form-input
              v-model="tagQueryParam.remark"
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
        :items="tagList"
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
            v-model="tagQueryParam.pageSize"
            :options="pageSizeOptions"
            @change="handlePageSizeChange"
          ></b-form-select>
        </b-col>
        <b-col sm="7" class="ms-auto"></b-col>
        <b-col sm="3" class="ms-auto">
          <b-pagination
            v-model="tagQueryParam.pageNum"
            :total-rows="totalRows"
            :per-page="tagQueryParam.pageSize"
            @change="handlePageNumChange"
            aria-controls="my-table"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-card>
    <AddNewTagModal ref="addNewTagModalRef"></AddNewTagModal>
    <EditTagModal ref="editTagModalRef"></EditTagModal>
    <DeleteTagConfirmModal
      ref="deleteTagConfirmModalRef"
    ></DeleteTagConfirmModal>
  </div>
</template>

<script>
import AddNewTagModal from "@/views/management/ams/tag/components/AddNewTagModal";
import EditTagModal from "@/views/management/ams/tag/components/EditTagModal";
import DeleteTagConfirmModal from "@/views/management/ams/tag/components/DeleteTagConfirmModal";
import { tagList } from "@/api/ams";

export default {
  name: "tag-index",
  data() {
    return {
      tagQueryParam: {
        id: null,
        name: null,
        remark: null,
        pageNum: 1,
        pageSize: 5,
      },
      tagList: [],
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "标签名" },
        { key: "description", label: "描述" },
        { key: "actions", label: "操作" },
      ],
      isBusy: false,
      pageSizeOptions: [
        { value: 5, text: "每页5条" },
        { value: 10, text: "每页10条" },
        { value: 15, text: "每页15条" },
        { value: 30, text: "每页30条" },
      ],
      totalRows: 0,
    };
  },
  components: {
    AddNewTagModal,
    EditTagModal,
    DeleteTagConfirmModal,
  },
  methods: {
    getTagList() {
      this.isBusy = true;
      tagList(this.tagQueryParam)
        .then((response) => {
          this.tagList = response.data.data.rows;
          this.totalRows = response.data.data.total;
          this.isBusy = false;
        })
        .catch((error) => {
          this.$bvToast.toast("查询标签列表失败！错误信息：" + error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    handlePageSizeChange(pageSize) {
      this.tagQueryParam.pageSize = pageSize;
      this.getTagList();
    },
    handlePageNumChange(pageNum) {
      this.tagQueryParam.pageNum = pageNum;
      this.getTagList();
    },
    handleAddNew() {
      this.$refs.addNewTagModalRef.showModalMethod();
      this.getMemberList();
    },
    handleView(item) {
      this.$router.push("/admin/ams/tagDetail?tid=" + item.id);
    },
    handleEdit(item) {
      this.$refs.editTagModalRef.showModalMethod(item.id);
    },
    handleDelete(item) {
      this.$refs.deleteTagConfirmModalRef.showModalMethod(item.id);
    },
  },
  created() {
    this.getTagList();
  },
};
</script>

<style scoped></style>
