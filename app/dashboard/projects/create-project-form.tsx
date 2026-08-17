"use client";

import { createProject, type ProjectActionState } from "@/actions/projects";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProjectForm() {
  const initialState: ProjectActionState = {
    success: false,
    error: null,
    slug: null,
  };
  const [state, formAction] = useActionState(createProject, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.success && state.slug) {
      router.push(`/dashboard/projects/${state.slug}`);
    }
  }, [state.success, state.slug, router]);

  return (
    <div>
      <form action={formAction}>
        <div>
          <label htmlFor="name">Project Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="My awesome project"
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe your project..."
            required
          />
        </div>
        {state.error && <p>{state.error}</p>}

        <button type="submit">Create Project</button>
        <p>
        Created slug: {state.slug}
        </p>
      </form>
    </div>
  );
}
