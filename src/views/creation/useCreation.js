import {
  addArticle,
  availableCategory1,
  availableCategory2,
  availableTag,
  updateArticle,
  updateArticleInfo,
} from "@/api/article";
import { uploadImage } from "@/api/upload";

export function getDefaultData() {
  return {
    articleForm: {
      id: null,
      title: null,
      content: null,
      summary: null,
      thumbnail: null,
      category1Id: null,
      category2Id: null,
      status: null,
      tag: {},
    },
    customToolbars: {
      imagelink: true,
      undo: true,
      redo: true,
      trash: true,
      navigation: true,
    },
    mainProps: {
      blank: true,
      blankColor: "#777",
      width: 150,
      height: 150,
      class: "m1",
    },
    statusOptions: [
      { value: 0, text: "草稿" },
      { value: 4, text: "发布" },
    ],
    tagQueryParam: {
      name: "",
      pageNum: 1,
      pageSize: 5,
    },
    category1QueryParam: {
      name: "",
      pageNum: 1,
      pageSize: 5,
    },
    category2QueryParam: {
      name: "",
      parent: null,
      pageNum: 1,
      pageSize: 5,
    },
    parentZeroCategories: [],
    parentOtherCategories: [],
    category1Name: null,
    category2Name: null,
    category1TotalRows: 0,
    category2TotalRows: 0,
    tagTotalRows: 0,
    tempTag: new Set(),
    // 标签的可选项
    options: [],
    value: [],
    idValue: new Set(),
    isUpdate: false,
  };
}

export const creationMethods = {
  handleChooseFile() {
    document.getElementById("avatar-input").click();
  },
  onAvatarChange(e) {
    const avatar = e.target.files[0];
    // 将图片上传到服务器
    uploadImage(avatar)
      .then((response) => {
        this.mainProps.blank = false;
        this.articleForm.thumbnail = response.data.data;
      })
      .catch((error) => {
        this.$bvToast.toast("上传失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  onCategory1OptionClick(id, name) {
    this.articleForm.category1Id = id;
    this.category1Name = name;
    this.category2QueryParam.parent = id;
    this.getAvailableCategory2Option();
  },
  onCategory2OptionClick(id, name) {
    this.articleForm.category2Id = id;
    this.category2Name = name;
  },
  getAvailableCategory1Option() {
    availableCategory1(this.category1QueryParam)
      .then((response) => {
        this.parentZeroCategories = response.data.data.rows;
        this.category1TotalRows = response.data.data.total;
      })
      .catch((error) => {
        this.$bvToast.toast("获取可选标签失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  getAvailableCategory2Option() {
    availableCategory2(this.category2QueryParam)
      .then((response) => {
        this.parentOtherCategories = response.data.data.rows;
        this.category2TotalRows = response.data.data.total;
      })
      .catch((error) => {
        this.$bvToast.toast("获取可选标签失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  getAvailableTagOption() {
    availableTag(this.tagQueryParam)
      .then((response) => {
        this.options = response.data.data.rows;
        this.tagTotalRows = response.data.data.total;
      })
      .catch((error) => {
        this.$bvToast.toast("获取可选标签失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  onOptionClick({ option, addTag }) {
    addTag(option.name);
    this.idValue.add(option.id);
    this.tempTag.add(option);
    this.tagQueryParam.name = "";
  },
  OnRemoveTag({ tag, removeTag }) {
    removeTag(tag);
    // 找到tag对应的id，并在idValue删除
    let targetId = null;
    this.tempTag.forEach((item) => {
      if (item.name === tag) {
        targetId = item.id;
      }
    });
    this.idValue.delete(targetId);
  },
  handleCategory1PageNumChange(pageNum) {
    this.category1QueryParam.pageNum = pageNum;
    this.getAvailableCategory1Option(this.category1QueryParam);
  },
  handleCategory2PageNumChange(pageNum) {
    this.category2QueryParam.pageNum = pageNum;
    this.getAvailableCategory2Option(this.category2QueryParam);
  },
  handleTagPageNumChange(pageNum) {
    this.tagQueryParam.pageNum = pageNum;
    this.getAvailableTagOption(this.tagQueryParam);
  },
  saveCurrentArticle() {
    this.articleForm.tag = Array.from(this.idValue);
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
  imgAdd(pos, file) {
    // 将图片上传到服务器
    uploadImage(file)
      .then((response) => {
        // 将返回的url替换到文本原位置![...](0) -> ![...](url)
        this.$refs.md.$img2Url(pos, response.data.data);
      })
      .catch((error) => {
        this.$bvToast.toast("上传失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  getUpdateArticleInfo() {
    this.articleForm.id =
      this.$route.query.aid === undefined ? 1 : parseInt(this.$route.query.aid);
    updateArticleInfo(this.articleForm.id)
      .then((response) => {
        this.articleForm = response.data.data;
        this.category1Name = response.data.data.category1Name;
        this.category2Name = response.data.data.category2Name;
        this.idValue = new Set(response.data.data.tag);
        this.value = response.data.data.tagName;
        const tagId = response.data.data.tag;
        const tagName = response.data.data.tagName;
        for (let i = 0; i < tagId.length; i++) {
          this.tempTag.add({ id: tagId[i], name: tagName[i] });
        }
        if (this.articleForm.thumbnail) {
          this.mainProps.blank = false;
        }
      })
      .catch((error) => {
        this.$bvToast.toast("获取失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  updateCurrentArticle() {
    this.articleForm.tag = Array.from(this.idValue);
    updateArticle(this.articleForm)
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
};
