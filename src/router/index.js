import { createRouter, createWebHistory } from "vue-router";
import FooView from "../views/FooView.vue";
import LoginView from "@/views/auth/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/foo",
      name: "Foo",
      component: FooView,
    },
    {
      path: "/bar",
      name: "Bar",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BarView.vue"),
    },
    {
      path: "/",
      name: "Login",
      component: LoginView,
    },
  ],
});

export default router;
