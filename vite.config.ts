import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    chunkSizeWarningLimit: 900, // Raise warning limit a bit (optional)
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React core
          react: ["react", "react-dom"],
          // Split markdown stack (now mostly loaded dynamically, but keep separate if statically referenced)
          markdown: ["react-markdown", "remark-gfm"],
          // Split icons
          icons: ["react-icons"],
        },
      },
    },
  },
});
