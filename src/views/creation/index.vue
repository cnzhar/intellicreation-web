<template>
  <div class="creation-main">
    <p>{{ articleForm }}</p>
    <p>options: {{ this.options }}</p>
    <p>value:{{ this.value }}</p>
    <p v-for="(id, index) in idValue" :key="index">idValue:{{ id }}</p>
    <p v-for="(tag, index) in tempTag" :key="index">tempTag: {{ tag }}</p>
    <b-card class="shadow mb-3">
      <b-form>
        <b-row class="my-1">
          <b-col sm="3">
            <b-form-group id="input-group-1" label="标题:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="articleForm.title"
                type="text"
                placeholder="输入标题"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="状态:"
              label-for="textarea-no-resize"
            >
              <b-form-select
                v-model="articleForm.status"
                :options="statusOptions"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col sm="3">
            <b-form-group
              id="input-group-2"
              label="一级分类:"
              label-for="textarea-no-resize"
              width="30%"
            >
              <b-row no-gutters>
                <b-col sm="9">
                  <b-form-input v-model="category1Name" readonly></b-form-input>
                </b-col>
                <b-col sm="3">
                  <b-dropdown id="dropdown-text" text="选择">
                    <b-form-group
                      label="搜索"
                      label-for="tag-search-input"
                      label-cols-md="auto"
                      class="mb-0 ml-2 mr-2"
                      label-size="sm"
                    >
                      <b-form-input
                        v-model="category1QueryParam.name"
                        id="tag-search-input"
                        type="search"
                        size="sm"
                      ></b-form-input>
                    </b-form-group>
                    <b-pagination
                      class="m-2"
                      v-model="category1QueryParam.pageNum"
                      :total-rows="category1TotalRows"
                      :per-page="category1QueryParam.pageSize"
                      @change="handleCategory1PageNumChange"
                      aria-controls="my-table"
                    ></b-pagination>
                    <b-dropdown-item-button
                      v-for="item in parentZeroCategories"
                      :key="item.value"
                      @click="onCategory1OptionClick(item.id, item.name)"
                      >{{ item.name }}</b-dropdown-item-button
                    >
                  </b-dropdown>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="二级分类:"
              label-for="textarea-no-resize"
            >
              <b-row no-gutters>
                <b-col sm="9">
                  <b-form-input v-model="category2Name" readonly></b-form-input>
                </b-col>
                <b-col sm="3">
                  <b-dropdown id="dropdown-text" text="选择">
                    <b-form-group
                      label="搜索"
                      label-for="tag-search-input"
                      label-cols-md="auto"
                      class="mb-0 ml-2 mr-2"
                      label-size="sm"
                    >
                      <b-form-input
                        v-model="category2QueryParam.name"
                        id="tag-search-input"
                        type="search"
                        size="sm"
                      ></b-form-input>
                    </b-form-group>
                    <b-pagination
                      class="m-2"
                      v-model="category2QueryParam.pageNum"
                      :total-rows="category2TotalRows"
                      :per-page="category2QueryParam.pageSize"
                      @change="handleCategory2PageNumChange"
                      aria-controls="my-table"
                    ></b-pagination>
                    <b-dropdown-item-button
                      v-for="item in parentOtherCategories"
                      :key="item.value"
                      @click="onCategory2OptionClick(item.id, item.name)"
                      >{{ item.name }}</b-dropdown-item-button
                    >
                  </b-dropdown>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group
              id="input-group-2"
              label="摘要:"
              label-for="textarea-no-resize"
            >
              <b-form-textarea
                id="textarea-no-resize"
                v-model="articleForm.summary"
                placeholder="输入摘要"
                rows="5"
                no-resize
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- 标签 -->
        <b-row>
          <b-col sm="3">
            <b-form-group
              id="input-group-2"
              label="封面图:"
              label-for="textarea-no-resize"
            >
              <b-img
                v-bind="mainProps"
                :src="articleForm.thumbnail"
                rounded
                alt="Rounded image"
              ></b-img>
              <input
                @change="onAvatarChange"
                type="file"
                id="avatar-input"
                style="display: none"
                accept="image/*"
              />
              <b-button class="ml-2" @click="handleChooseFile" variant="primary"
                >上传封面图</b-button
              >
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group label="标签：" label-for="tags-with-dropdown">
              <b-form-tags
                id="tags-with-dropdown"
                v-model="value"
                no-outer-focus
                class="mb-2"
              >
                <template v-slot="{ tags, disabled, addTag, removeTag }">
                  <ul
                    v-if="tags.length > 0"
                    class="list-inline d-inline-block mb-2"
                  >
                    <li v-for="tag in tags" :key="tag" class="list-inline-item">
                      <b-form-tag
                        @remove="OnRemoveTag({ tag, removeTag })"
                        :title="tag"
                        :disabled="disabled"
                        variant="info"
                        >{{ tag }}</b-form-tag
                      >
                    </li>
                  </ul>

                  <b-dropdown
                    size="sm"
                    variant="outline-secondary"
                    block
                    menu-class="w-100"
                  >
                    <template #button-content>
                      <b-icon icon="tag-fill"></b-icon> 添加标签
                    </template>
                    <b-dropdown-form @submit.stop.prevent="() => {}">
                      <b-form-group
                        label="搜索标签"
                        label-for="tag-search-input"
                        label-cols-md="auto"
                        class="mb-0"
                        label-size="sm"
                        :description="searchDesc"
                        :disabled="disabled"
                      >
                        <b-form-input
                          v-model="tagQueryParam.name"
                          id="tag-search-input"
                          type="search"
                          size="sm"
                          autocomplete="off"
                        ></b-form-input>
                      </b-form-group>
                      <b-pagination
                        class="mt-3"
                        v-model="tagQueryParam.pageNum"
                        :total-rows="tagTotalRows"
                        :per-page="tagQueryParam.pageSize"
                        @change="handleTagPageNumChange"
                        aria-controls="my-table"
                      ></b-pagination>
                    </b-dropdown-form>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button
                      v-for="option in availableOptions"
                      :key="option"
                      @click="onOptionClick({ option, addTag })"
                    >
                      {{ option.name }}
                    </b-dropdown-item-button>
                    <b-dropdown-text v-if="availableOptions.length === 0">
                      暂无可选标签
                    </b-dropdown-text>
                  </b-dropdown>
                </template>
              </b-form-tags>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              v-if="!isUpdate"
              @click="saveCurrentArticle"
              variant="primary"
              >保存</b-button
            >
            <b-button
              v-if="isUpdate"
              @click="updateCurrentArticle"
              variant="primary"
              >更新</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </b-card>
    <div>
      <mavon-editor
        ref="md"
        class="content-editor mb-3"
        v-model="articleForm.content"
        :toolbars="customToolbars"
        @imgAdd="imgAdd"
        @imgDel="$imgDel"
      />
    </div>
    <MyCreationSettingSideBar
      ref="myCreationSettingSideBarRef"
    ></MyCreationSettingSideBar>
  </div>
</template>

<script>
import { getDefaultData, creationMethods } from "@/views/creation/useCreation";

export default {
  name: "creation-index",
  data() {
    return getDefaultData();
  },
  computed: {
    criteria() {
      // Compute the search criteria
      return this.tagQueryParam.name.trim().toLowerCase();
    },
    availableOptions() {
      const criteria = this.criteria;
      const options = this.options.filter(
        (opt) => this.value.indexOf(opt.name) === -1
      );
      if (criteria) {
        return options.filter((opt) =>
          opt.name.toLowerCase().includes(criteria)
        );
      }
      return options;
    },
    searchDesc() {
      if (this.criteria && this.availableOptions.length === 0) {
        return "暂无符合的标签";
      }
      return "";
    },
  },
  watch: {
    "category1QueryParam.name"() {
      this.getAvailableCategory1Option(this.category1QueryParam);
    },
    "category2QueryParam.name"() {
      this.getAvailableCategory2Option(this.category2QueryParam);
    },
    "tagQueryParam.name"() {
      this.getAvailableTagOption(this.tagQueryParam);
    },
  },
  methods: {
    ...creationMethods,
  },
  created() {
    if (this.$route.query.aid !== undefined) {
      this.isUpdate = true;
      this.getUpdateArticleInfo();
    }
    this.getAvailableTagOption(this.tagQueryParam);
    this.getAvailableCategory1Option(this.category1QueryParam);
  },
};
</script>

<style scoped>
.creation-main {
  width: 95%;
  height: 100%;
  margin: 4.5rem auto 0;
}

.content-editor {
  width: 100%;
  height: 90vh;
  z-index: 10 !important;
}
</style>
