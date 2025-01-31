import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: '0.0.0.0',
        port: 5173
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
