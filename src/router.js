import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import HistoriaPage from "./pages/HistoriaPage.vue";
import ContactoPage from "./pages/ContactoPage.vue";
import ProductosPage from "./pages/ProductosPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/home", redirect: "/" },
        { path: "/historia", component: HistoriaPage },
        { path: "/contacto", component: ContactoPage },
        { path: "/productos", component: ProductosPage, props: true },
        { path: "/:notFound(.*)", redirect: "/home" },
    ],
    scrollBehavior(to, from, savedPosition) { 
        if (savedPosition) {
            return { ...savedPosition, behavior: 'smooth' };
        }
        return { top: 0 };
    }
});

export default router;
