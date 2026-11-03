import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://dwarakfoundations.com",
  output: "static",
  publicDir: "./public",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/brochure/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
