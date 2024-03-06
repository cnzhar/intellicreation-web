<template>
  <div>
    <b-card class="shadow">
      <b-form-group label="筛选">
        <b-row class="my-1">
          <b-col sm="3">
            <label>id</label>
            <b-form-input
              v-model="articleQueryParam.id"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>菜单名</label>
            <b-form-input
              v-model="articleQueryParam.menuName"
              id="feedback-user"
            ></b-form-input>
          </b-col>
          <b-col sm="3">
            <label>菜单路径</label>
            <b-form-input
              v-model="articleQueryParam.path"
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
    <b-card class="shadow mt-3">
      <b-table
        hover
        class="mt-2"
        :items="articleList"
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
            v-model="articleQueryParam.pageSize"
            :options="pageSizeOptions"
            @change="handlePageSizeChange"
          ></b-form-select>
        </b-col>
        <b-col sm="7" class="ms-auto"></b-col>
        <b-col sm="3" class="ms-auto">
          <b-pagination
            v-model="articleQueryParam.pageNum"
            :total-rows="totalRows"
            :per-page="articleQueryParam.pageSize"
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
  articleMethods,
} from "@/views/management/ams/article/useArticle";

export default {
  name: "article-index",
  data() {
    return getDefaultData();
  },
  methods: {
    ...articleMethods,
  },
  created() {
    this.getArticleList();
  },
};
</script>

<style scoped></style>
