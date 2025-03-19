import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Portfolio from "@/views/Portfolio.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
