import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import portal from "./routes/portal";
import admin from "./routes/admin";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...portal,
    ...admin,
    {
      path: "*",
      name: "404",
      component: () => import("@/views/404/404.vue"),
    },
  ],
});

export default router;
