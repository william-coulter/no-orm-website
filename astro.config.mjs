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
          // Go over the CRUD methods.
          // There is always a "many" variant.
          // Branding.
          label: "The basics",
          autogenerate: { directory: "the-basics" },
        },
        {
          // Querying on certain columns.
          // Index-first approach. Why? (you always should index on a query pattern).
          // Indexes changing the return type.
          // You can write custom SQL if needed, but encouraged not to in no-orm. Example repo.
          label: "Advanced queries",
          autogenerate: { directory: "advanced-queries" },
        },
        {
          // Do I need a full section? Maybe in basics.
          label: "Foreign keys",
          autogenerate: { directory: "foreign-keys" },
        },
        {
          // Discuss the custom serialisers.
          // You have to hand-write any check constraints.
          // Touch on no composite types.
          // Not everything is documented, try it out and see what happens.
          label: "Advanced types",
          autogenerate: { directory: "advanced-types" },
        },
        {
          // Basically copy / paste. Maybe use AI.
          label: "The config file",
          autogenerate: { directory: "the-config-file" },
        },
        {
          // Talk about a recommended deploy pipeline (example server).
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
