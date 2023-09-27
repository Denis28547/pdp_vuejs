import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AddAnimalView from "../views/AddAnimalView.vue";
import AnimalFullView from "../views/AnimalFullView.vue";
import SearchAnimalView from "../views/SearchAnimalView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/add-animal",
    name: "add-animal",
    component: AddAnimalView,
  },
  {
    path: "/search-animal/:search",
    name: "search-animal",
    component: SearchAnimalView,
  },
  {
    path: "/animal/:id",
    name: "animal-full",
    component: AnimalFullView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
