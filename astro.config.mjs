// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: "No ORM",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Get started",
          autogenerate: { directory: "get-started" },
        },
        {
          label: "The basics",
          autogenerate: { directory: "the-basics" },
        },
        {
          label: "Advanced queries",
          autogenerate: { directory: "advanced-queries" },
        },
        {
          label: "Advanced types",
          autogenerate: { directory: "advanced-types" },
        },
        {
          label: "The config file",
          autogenerate: { directory: "the-config-file" },
        },
        {
          // Talk about a recommended deploy pipeline (example server).
          // Don't commit your no-orm code. It should be generated against your production DB.
          label: "Using in production",
          autogenerate: { directory: "using-in-production" },
        },
        {
          // Is this also like "best practices?"
          label: "Example server",
          autogenerate: { directory: "example-server" },
        },
        {
          // Limitations.
          label: "Limitations",
          autogenerate: { directory: "limitations" },
        },
        {
          label: "Similar projects",
          autogenerate: { directory: "similar-projects" },
        },
        {
          // If there is something missing from the docs:
          // - Read the source code.
          // - Try `no-orm` out in your example scenario.
          // - Submit an issue on `no-orm` Github.
          label: "Missing something?",
          autogenerate: { directory: "missing-something" },
        },
      ],
    }),
  ],
});
