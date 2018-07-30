import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
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
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ],
  mode: "history"
});
