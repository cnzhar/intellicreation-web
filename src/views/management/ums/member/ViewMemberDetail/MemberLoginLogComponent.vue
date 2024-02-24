<template>
  <div>
    <b-card class="shadow managementCard-body mt-3">
      <h4>用户登录日志</h4>
      <b-table
        hover
        class="mt-2"
        :items="loginLogList"
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
            v-model="loginLogQueryParam.pageSize"
            :options="pageSizeOptions"
            @change="handlePageSizeChange"
          ></b-form-select>
        </b-col>
        <b-col sm="7" class="ms-auto"></b-col>
        <b-col sm="3" class="ms-auto">
          <b-pagination
            v-model="loginLogQueryParam.pageNum"
            :total-rows="totalRows"
            :per-page="loginLogQueryParam.pageSize"
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
  loginLogMethods,
} from "@/views/management/ums/member/ViewMemberDetail/useMemberLoginLogComponent";

export default {
  name: "MemberLoginLogComponent",
  data() {
    return getDefaultData();
  },
  methods: {
    ...loginLogMethods,
  },
  created() {
    this.getLoginLogList();
  },
};
</script>

<style scoped></style>
