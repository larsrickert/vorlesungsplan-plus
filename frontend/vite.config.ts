import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), "./src/i18n/locales/**"),
    }),
    VitePWA({
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      workbox: {
        // default only includes js,css and html files, so images (logo etc.) will not be cached in pwa
        globPatterns: ["**/*.{js,css,html,svg,jpg,png,json}"],
      },
      manifest: {
        name: "Vorlesungsplan+",
        short_name: "Vorlesungsplan+",
        description: "App for viewing lectures and events at the DHBW Mosbach and Bad Mergentheim.",
        theme_color: "#3880ff",
        display: "standalone",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-maskable-1024x1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
