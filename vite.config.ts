import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      manifest: {
        name: "Ismail Ibrahim Mensah Portfolio",
        short_name: "IIM Portfolio",
        start_url: "/",
        display: "standalone",
        background_color: "#0b0b0b",
        theme_color: "#0b0b0b",
        description: "Portfolio of Ismail Ibrahim Mensah – fast, offline-ready.",
        icons: [
          { src: "/favicon.ico", sizes: "48x48 64x64 128x128 256x256", type: "image/x-icon" }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,woff2}"],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        navigateFallback: "/index.html",
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.destination === "image",
              handler: "CacheFirst",
              options: {
                cacheName: "images-cache",
                expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: "StaleWhileRevalidate",
              options: { cacheName: "google-fonts-stylesheets" }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-webfonts",
                expiration: { maxEntries: 30, maxAgeSeconds: 365 * 24 * 60 * 60 }
              }
            },
            {
              // Cache public Supabase storage assets (covers, images)
              urlPattern: /^https:\/\/brnqkegzltefudfmhtkf\.supabase\.co\/storage\/v1\/object\/public\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "supabase-public-storage",
                expiration: { maxEntries: 80, maxAgeSeconds: 60 * 24 * 60 * 60 }
              }
            },
            {
              // Network first for Supabase API; serve cached when offline
              urlPattern: /^https:\/\/brnqkegzltefudfmhtkf\.supabase\.co\/.*/i,
              handler: "NetworkFirst",
              options: {
                cacheName: "supabase-api",
                networkTimeoutSeconds: 3,
                expiration: { maxEntries: 60, maxAgeSeconds: 7 * 24 * 60 * 60 }
              }
            }
          ]
      },
      includeAssets: ["/images/og.jpg", "/images/preload.jpg", "/docs/Ismail_Ibrahim_Mensah.pdf"]
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
