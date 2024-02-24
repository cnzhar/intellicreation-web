<template>
  <div>
    <b-modal v-model="isShowRegisterModal" hide-footer hide-header>
      <b-overlay :show="isShow" rounded="sm">
        <div class="container">
          <label>uid</label>
          <b-form-input v-model="member.uid"></b-form-input>
          <label>密码</label>
          <b-form-input
            type="password"
            v-model="member.password"
          ></b-form-input>
          <label>邮箱</label>
          <b-form-input v-model="member.email"></b-form-input>
          <label>昵称</label>
          <b-form-input v-model="member.nickname"></b-form-input>
          <b-button
            @click.prevent="submitForm()"
            variant="success"
            class="btn w-100"
            type="submit"
            >注册
          </b-button>
        </div>
      </b-overlay>
    </b-modal>
  </div>
</template>

<script>
import { register } from "@/api/member";

export default {
  name: "loginModal",
  data() {
    return {
      isShowRegisterModal: false,
      isShow: false,
      member: {
        uid: null,
        password: null,
        email: null,
      },
    };
  },
  methods: {
    hideModal() {
      this.isShowRegisterModal = false;
    },
    showModalMethod() {
      this.isShowRegisterModal = true;
    },
    submitForm() {
      this.isShow = true;
      register(this.member)
        .then(() => {
          this.$bvToast.toast("注册成功", {
            title: "系统消息",
            autoHideDelay: 5000,
          });
          this.isShow = false;
        })
        .catch((error) => {
          this.$bvToast.toast(error.message, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
          this.isShow = false;
        });
    },
  },
};
</script>

<style scoped></style>
