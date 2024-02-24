import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import PortalVue from "portal-vue";

import MavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

// global css
import "@/styles/index.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(PortalVue);

Vue.use(MavonEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
