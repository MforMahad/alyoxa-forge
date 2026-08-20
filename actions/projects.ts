"use server"; //user server because this function runs on the server and the brouwser shouldnt directly talk to mogodb

import { getDatabase } from "@/lib/db/mongodb";

export type ProjectActionState = {
  success: boolean;
  error: string | null;
  slug: string | null;
};

export async function createProject(
  previousState: ProjectActionState,
  formData: FormData
) {
  const name = formData.get("name");
  const description = formData.get("description");

  // validating because i dont want some to put empty data or wrong data inside the fields so before submiting validate

  if (typeof name !== "string" || name.trim().length < 3) {
    throw new Error("Project name must be at least 3 characters.");
  }

  if (typeof description !== "string" || description.trim().length < 10) {
    throw new Error("Description must be at least 10 characters.");
  }

// created the value so that i can just return the project name not the fill String(name).trim()
  const projectName = String(name).trim();
  const projectDesc = String(description).trim();
  const projectCreatedAt = new Date();
  const projectUpdatedAt = new Date();




  const slug = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const db = await getDatabase();

  //this is for the database layer error if the mongodb sees duplicated slug it will throw an error that no duplicate name allowed etc or project exist
  //and i am doing this because there will be seperate projects pages and will call them through [slug] with just one page and multiple projects pages
  // because i am trying to make the foundation strong of the ' FORGE '

  try {
    await db.collection("projects").insertOne({
      name: projectName,
      slug,
      description:projectDesc,
      userId: "test-user",
      createdAt: projectCreatedAt,
      updatedAt: projectUpdatedAt,
    });
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === 11000
    ) {
      return {
        success: false,
        error: "A project with this name already exists.",
        slug: null,
      };
    }

    throw error;
  }

  return {
    success: true,
    error: null,
    slug,
    name:projectName,
    description: projectDesc,
    createdAt:projectCreatedAt ,
    updatedAt:projectUpdatedAt

  };
}
