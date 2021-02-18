import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Experience from "@/views/Experience.vue";
import Projects from "@/views/Projects.vue";
import Hobbies from "@/views/Hobbies.vue";
import Skills from "@/views/Skills.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/hobbies",
    name: "Hobbies",
    component: Hobbies
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
