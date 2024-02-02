<template>
  <div>
    <b-overlay :show="show" rounded="sm">
      <div class="container">
        <section
          class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div
                class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center"
              >
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">登录账号</h5>
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
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          />
                          <label class="form-check-label" for="rememberMe"
                            >以管理员身份登录</label
                          >
                        </div>
                      </div>
                      <div class="col-12">
                        <button
                          @click.prevent="submitForm()"
                          class="btn btn-primary w-100"
                          type="submit"
                        >
                          登录
                        </button>
                      </div>
                      <div class="col-12">
                        <p class="small mb-0">
                          没有账号？ <a href="/register">注册账号</a>
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
  </div>
</template>

<script>
import { login } from "@/api/login";
import { setToken } from "@/utils/auth";

export default {
  name: "Login-index",
  data() {
    return {
      show: false,
      member: {
        uid: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      const member = this.member;
      this.show = true;
      login(member)
        .then((response) => {
          console.log(response);
          if (response.data.data.token) {
            setToken(response.data.data.token);
          }
          if (response.data.code === 200) {
            this.$bvToast.toast("登录成功", {
              title: "系统消息",
              autoHideDelay: 5000,
            });
            // this.$router.push("/home");
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
  },
};
</script>

<style scoped></style>
