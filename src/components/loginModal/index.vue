<template>
  <div>
    <b-modal v-model="isShowLoginModal" hide-footer hide-header>
      <b-overlay :show="isShow" rounded="sm">
        <div class="container">
          <section
            class="section register d-flex flex-column align-items-center justify-content-center py-4"
          >
            <div class="container">
              <div class="row justify-content-center">
                <div
                  class="d-flex flex-column align-items-center justify-content-center"
                >
                  <div class="mb-3">
                    <div class="card-body">
                      <div class="pt-4 pb-2">
                        <h5 class="card-title text-center pb-0 fs-4">
                          登录账号
                        </h5>
                        <p class="text-center small">请输入用户名和密码</p>
                      </div>

                      <form class="row g-3 needs-validation" novalidate>
                        <div class="col-12">
                          <label for="yourUsername" class="form-label"
                            >账号</label
                          >
                          <div class="input-group has-validation">
                            <input
                              v-model="member.uid"
                              type="text"
                              name="username"
                              class="form-control"
                              id="yourUsername"
                              required
                            />
                            <div class="invalid-feedback">请输入您的账号</div>
                          </div>
                        </div>

                        <div class="col-12">
                          <label for="yourPassword" class="form-label"
                            >密码</label
                          >
                          <input
                            v-model="member.password"
                            type="password"
                            name="password"
                            class="form-control"
                            id="yourPassword"
                            required
                          />
                          <div class="invalid-feedback">请输入您的密码</div>
                        </div>
                        <div class="col-12">
                          <b-button
                            @click.prevent="submitForm()"
                            variant="success"
                            class="btn-primary w-100 mt-3"
                            type="submit"
                            >登录
                          </b-button>
                        </div>
                        <div class="col-12">
                          <p class="small mb-0">
                            没有账号？
                            <label @click="handleRegister">注册账号</label>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </b-overlay>
    </b-modal>
    <registerModal ref="registerModalRef"></registerModal>
  </div>
</template>

<script>
import { login } from "@/api/member";
import { setToken } from "@/utils/auth";
import registerModal from "@/components/loginModal/registerModal";

export default {
  name: "loginModal",
  data() {
    return {
      isShowLoginModal: false,
      isShow: false,
      closeCallback: null, // 关闭时的回调函数
      member: {
        uid: "",
        password: "",
      },
    };
  },
  components: {
    registerModal,
  },
  methods: {
    hideModal() {
      this.isShowLoginModal = false;
      if (this.closeCallback) {
        this.closeCallback();
        this.closeCallback = null; // 调用后清除回调，防止重复调用
      }
    },
    showModalMethod(callback) {
      this.isShowLoginModal = true;
      this.closeCallback = callback;
    },
    submitForm() {
      const member = this.member;
      this.show = true;
      login(member)
        .then((response) => {
          if (response.data.data.token) {
            setToken(response.data.data.token);
          }
          if (response.data.code === 200) {
            this.$bvToast.toast("登录成功", {
              title: "系统消息",
              autoHideDelay: 5000,
            });
            this.hideModal();
          } else {
            this.$bvToast.toast(response.message, {
              title: "系统消息",
              autoHideDelay: 5000,
            });
          }
          this.show = false;
        })
        .catch((error) => {
          this.$bvToast.toast(error.message, {
            title: "系统消息",
            autoHideDelay: 5000,
          });
          this.show = false;
        });
    },
    handleRegister() {
      this.$refs.registerModalRef.showModalMethod();
    },
  },
};
</script>

<style scoped></style>
