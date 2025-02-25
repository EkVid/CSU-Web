import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

import { defineConfig } from "astro/config";
// Import the defineConfig helper to get better autocompletion
// Import the React integration
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.NODE_ENV === "production"
      ? "https://csu-web.vercel.app/"
      : "https://csu-web.vercel.app/",
  integrations: [
    react(),
    process.env.NODE_ENV === "production" && sitemap(),
    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
      },
      Image: false,
      JavaScript: true,
      Logger: 1,
    }),
  ],
});
