import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/layout/index.vue";

Vue.use(Router);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        name: "home",
        hidden: true,
        meta: { title: "home", icon: "home" },
      },
    ],
  },
  {
    path: "/404",
    component: Layout,
    children: [
      {
        path: "/404",
        component: () => import("@/views/errorPage/404"),
        name: "404",
        hidden: true,
        meta: { title: "404", icon: "dashboard" },
      },
    ],
  }
];
export default new Router({
  mode: "history",
  scrollBehavior: () => ({ x: 0, y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRoutes,
});
