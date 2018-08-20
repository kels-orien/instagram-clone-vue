import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Posts from "@/components/Posts";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Posts",
      component: Posts
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ],
  mode: "history"
});
