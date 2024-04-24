import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "sqt2xws9",
  dataset: "production",
  apiVersion: "2024-04-21",
  useCdn: true,
  token: import.meta.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
