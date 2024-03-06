import { mineEditInfo, updateMineInfo } from "@/api/mine";
import { uploadImage } from "@/api/upload";

export function getDefaultData() {
  return {
    mine: {},
    inputElements: [
      {
        caption: "UID",
        type: "text",
        key: "uid",
      },
      {
        caption: "昵称",
        type: "text",
        key: "nickname",
      },
      {
        caption: "状态",
        type: "text",
        key: "status",
      },
      {
        caption: "描述",
        type: "text",
        key: "description",
      },
    ],
  };
}

export const mineMethods = {
  getMineEditInfo() {
    mineEditInfo()
      .then((response) => {
        this.mine = response.data.data;
      })
      .catch((error) => {
        this.$bvToast.toast(error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleChooseFile() {
    document.getElementById("avatar-input").click();
  },
  onAvatarChange(e) {
    const avatar = e.target.files[0];
    // 将图片上传到服务器
    uploadImage(avatar)
      .then((response) => {
        this.mine.avatar = response.data.data;
      })
      .catch((error) => {
        this.$bvToast.toast("上传失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleSave() {
    updateMineInfo(this.mine)
      .then(() => {
        this.$bvToast.toast("保存成功", {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      })
      .catch((error) => {
        this.$bvToast.toast("上传失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
};
