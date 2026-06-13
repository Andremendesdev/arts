import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure'
import { schema } from "./sanity/schemaTypes";
import { isSanityConfigured, projectId, dataset } from "./sanity/env";

if (!isSanityConfigured) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");
}

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Dependendo da versão instalada, usa-se structureTool ou deskTool.
  // Como instalamos a 'sanity' latest, provavelmente é structureTool.
  plugins: [structureTool()],
  schema,
});
