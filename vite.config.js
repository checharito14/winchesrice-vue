import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import sitemap from "vite-plugin-sitemap";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        sitemap({
            hostname: "https://winchesricemx.com",
            routes: [
                { path: "/home", changefreq: "monthly", priority: 0.8 },
                { path: "/historia", changefreq: "monthly", priority: 0.6 },
                { path: "/productos", changefreq: "monthly", priority: 0.9 },
                { path: "/contacto", changefreq: "monthly", priority: 1.0 },   
            ],
        }),
    ],
    server: {
        host: "0.0.0.0",
        port: 5173,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Importa variables y mixins globales en cada archivo SCSS automáticamente
                additionalData: `
                    @use "@/assets/styles/variables.scss" as *;
                    @use "@/assets/styles/mixins.scss" as *;
                `,
            },
        },
    },
});
