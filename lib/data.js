import { client } from "../client";

export const getData = async () => {
  const query = '*[_type == "project"] | order(_createdAt desc)';

  const projects = await client.fetch(query);
  return projects;
};
