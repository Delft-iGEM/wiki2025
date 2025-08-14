// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// keep config self-contained; no imports from ./src/**
const slugify = (s?: string) =>
  (s ?? "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: `/${slugify(env.VITE_TEAM_NAME)}/`,
    plugins: [react()],
  };
});
