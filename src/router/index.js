import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import SelectAccType from "../views/SelectAccType.vue";
import RegisterForm from "../views/RegisterForm.vue";
import LoginForm from "../views/LoginForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/acctype",
    name: "SelectAccType",
    component: SelectAccType,
  },
  {
    path: "/register/:type",
    name: "RegisterForm",
    component: RegisterForm,
  },
  {
    path: "/login/:type",
    name: "LoginForm",
    component: LoginForm,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
