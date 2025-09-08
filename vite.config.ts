import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import path from "node:path";
import { stringToSlug } from "./src/utils";
import tailwindcss from "@tailwindcss/vite"

const env = loadEnv("dev", process.cwd());
// https://vite.dev/config/
export default defineConfig({
  base: `/${stringToSlug(env.VITE_TEAM_NAME)}/`,
  plugins: [{ enforce: "pre", ...mdx() }, react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
