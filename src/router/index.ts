import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Experience from "@/views/Experience.vue";
import Projects from "@/views/Projects.vue";
import Hobbies from "@/views/Hobbies.vue";
import Skills from "@/views/Skills.vue";
import Contact from "@/views/Contact.vue";
import Talks from "@/views/Talks.vue";
import ViewContainer from "@/views/ViewContainer.vue";
import { langMatch } from "@/locale/locale";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: `/:lang${langMatch}?`,
    component: ViewContainer,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "experience",
        name: "Experience",
        component: Experience,
      },
      {
        path: "skills",
        name: "Skills",
        component: Skills,
      },
      {
        path: "hobbies",
        name: "Hobbies",
        component: Hobbies,
      },
      {
        path: "projects",
        name: "Projects",
        component: Projects,
      },
      {
        path: "Talks",
        name: "Talks",
        component: Talks,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
    ],
  },
];

const router = new VueRouter({
  // On a apache server, the history mode needs a rewrite rule.
  // See ./public/.htaccess
  // and
  // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
