import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import HistoriaPage from "./pages/HistoriaPage.vue";
import ContactoPage from "./pages/ContactoPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: HomePage },
        { path: "/historia", component: HistoriaPage },
        { path: "/contacto", component: ContactoPage },
    ],
});

export default router;
