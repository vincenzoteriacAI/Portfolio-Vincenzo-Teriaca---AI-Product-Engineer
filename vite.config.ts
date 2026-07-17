import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // 👈 Importiamo lo strumento per i percorsi di Node

export default defineConfig({
  resolve: {
    alias: {
      // 👈 Questo dice a Vite: quando vedi "@/", guarda dentro la cartella "src"
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  plugins: [
    tanstackStart(),
    tailwindcss(),
    react(),
  ],
});