import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Usar './' ajuda o GitHub Actions a encontrar os arquivos independente da subpasta
  base: './', 
  server: {
    host: "::",
    port: 5173,
    strictPort: false,
    hmr: {
      overlay: false,
    },
  },
  preview: {
    port: 5173,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  // Garante que o build vá para a pasta 'dist' que o GitHub Actions espera
  build: {
    outDir: 'dist',
  }
}));