<template>
  <div>
    <b-card class="shadow mt-3">
      <h4>该用户所拥有的角色</h4>
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
  </div>
</template>

<script>
import {
  getDefaultData,
  memberRoleMethods,
} from "@/views/management/ums/member/ViewMemberDetail/useMemberRoleComponnet";

export default {
  name: "MemberRoleComponent",
  data() {
    return getDefaultData();
  },
  methods: {
    ...memberRoleMethods,
  },
  created() {
    this.getRoleList();
  },
};
</script>

<style scoped></style>
