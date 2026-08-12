import { getDatabase } from "./db/mongodb";

export async function getProjects() {
  const db = await getDatabase();

  const projects = await db
    .collection("projects")
    .find({})
    .toArray();

  return projects;
}