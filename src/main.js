import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";

import App from "./App";

import Home from "./pages/Home";
import About from "./pages/About";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
const app = createApp(App);
app.use(router);
app.mount("#app");
