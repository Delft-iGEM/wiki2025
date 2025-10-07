import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import path from "node:path";
import { stringToSlug } from "./src/utils";
import tailwindcss from "@tailwindcss/vite"
import rehypeStarryNight from "rehype-starry-night";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";

// Custom rehype plugin to add classes to links
function rehypeLinkClassifier() {
  return (tree:Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'a' && node.properties.href) {
        const href = node.properties.href;
        const isExternal = /^https?:\/\//.test(href as string);

        
        // Add classes
        const existing = node.properties.className;
        let existingClass: (string | number)[];
        if (Array.isArray(existing)) {
          existingClass = existing;
        } else if (typeof existing === 'string' || typeof existing === 'number') {
          existingClass = [existing];
        } else {
          existingClass = [];
        }
        if (isExternal) {
          node.properties.className = [...existingClass, 'external-link'];
        } else {
          node.properties.className = [...existingClass, 'internal-link'];
        }
      }
    });
  };
}

const env = loadEnv("dev", process.cwd());

export default defineConfig({
  base: `/${stringToSlug(env.VITE_TEAM_NAME)}/`,
  plugins: [
    { 
      enforce: "pre", 
      ...mdx({
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeStarryNight, rehypeLinkClassifier]
      })
    }, 
    react(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});