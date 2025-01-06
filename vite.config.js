import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                // Manually split large chunks, especially node_modules
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return "vendor"; // Create a 'vendor' chunk for dependencies
                    }
                },
            },
        },
        // Increase the chunk size warning limit
        chunkSizeWarningLimit: 1000, // In kilobytes, adjust as needed
    },
});
