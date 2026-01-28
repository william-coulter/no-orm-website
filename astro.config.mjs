// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  site: "https://no-orm.com",
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: "no-orm-cli",
      description: "Documentation for no-orm-cli (npm). Generate type-safe Slonik/Zod interfaces and access patterns from your PostgreSQL schema.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/william-coulter/no-orm",
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
          label: "Usage in production",
          autogenerate: { directory: "usage-in-production" },
        },
        {
          label: "Example server",
          autogenerate: { directory: "example-server" },
        },
        {
          label: "Limitations",
          autogenerate: { directory: "limitations" },
        },
        {
          label: "Similar projects",
          autogenerate: { directory: "similar-projects" },
        },
        {
          label: "Missing something?",
          autogenerate: { directory: "missing-something" },
        },
      ],
    }),
  ],
});
