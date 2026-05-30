import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./sanity/schemaTypes";

// Temporary fallback for deskTool if using sanity v3 directly
// Actually the new import is from 'sanity/structure' or 'sanity/desk' depending on version. Let's use the standard one.
import { structureTool } from 'sanity/structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "qw9690w6";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Dependendo da versão instalada, usa-se structureTool ou deskTool.
  // Como instalamos a 'sanity' latest, provavelmente é structureTool.
  plugins: [structureTool()],
  schema,
});
