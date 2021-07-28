import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignUp from '../components/TheSignup.vue';
import Login from '../components/TheLogin.vue';
import Add from '../components/TheAddResturant.vue';
import Update from '../components/TheUpdateResturant.vue';

const routes = [
  {
    path: "/panel",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
  {
    path: "/update/:id",
    name: "Update",
    component: Update,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
