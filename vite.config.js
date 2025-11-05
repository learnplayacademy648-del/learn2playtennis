import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        // This is where your Babel plugin goes
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(), // tailwindcss() is a Vite plugin, it goes here
  ],
});
