<template>
  <div class="creation-main">
    <div class="desc-main">
      <b-form>
        <b-form-group
          class="desc-input-group"
          id="input-group-1"
          label="标题:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="articleForm.title"
            type="email"
            placeholder="输入标题"
            required
          ></b-form-input>
        </b-form-group>

        <b-button @click="saveCurrentArticle" variant="primary">保存</b-button>
        <b-button @click="openMyCreation" variant="primary"
          >我的作品集</b-button
        >
      </b-form>
    </div>
    <div>
      <mavon-editor
        class="content-editor"
        v-model="articleForm.content"
        :toolbars="customToolbars"
      />
    </div>
    <MyCreationSideBar ref="myCreationSideBarRef"></MyCreationSideBar>
  </div>
</template>

<script>
import { addArticle } from "@/api/article";
import MyCreationSideBar from "@/views/creation/components/MyCreationSideBar";

export default {
  name: "creation-index",
  data() {
    return {
      articleForm: {
        title: null,
        content: null,
      },
      customToolbars: {
        imagelink: true,
        undo: true,
        redo: true,
        trash: true,
        navigation: true,
      },
    };
  },
  components: {
    MyCreationSideBar,
  },
  methods: {
    saveCurrentArticle() {
      addArticle(this.articleForm)
        .then(() => {
          this.$bvToast.toast("保存成功", {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        })
        .catch((error) => {
          this.$bvToast.toast("保存失败！错误信息：" + error, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
        });
    },
    openMyCreation() {
      this.$refs.myCreationSideBarRef.showSideBarMethod();
    },
  },
};
</script>

<style scoped>
.creation-main {
  height: 100%;
  margin: 4.5rem auto 0;
}

.desc-main {
  width: 100%;
}

.desc-input-group {
  width: 10rem;
  display: inline-block;
}

.content-editor {
  width: 100%;
  height: 80vh;
  z-index: 10 !important;
}
</style>
