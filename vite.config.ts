import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
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
    // Produce the Vercel Build Output API structure (.vercel/output), including
    // the server handler and public assets required by TanStack Start SSR.
    nitro({ preset: "vercel" }),
    tailwindcss(),
    react(),
  ],
});
