"use client";

import { createProject } from "@/actions/projects";
import { useActionState } from "react";

export default function ProjectForm() {
  const initialState = {
    success: false,
    error: null,
  };
  const [state, formAction] = useActionState(createProject, initialState);

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
      </form>
    </div>
  );
}
