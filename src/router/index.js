import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import portal from "./routes/portal";
import community from "@/router/routes/community";
import mine from "@/router/routes/mine";
import admin from "./routes/admin";
import creation from "@/router/routes/creation";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...portal,
    ...creation,
    ...community,
    ...mine,
    ...admin,
    {
      path: "*",
      name: "404",
      component: () => import("@/views/404/404.vue"),
    },
  ],
});

export default router;
