import { getDatabase } from "@/lib/db/mongodb";
import CreateProjectModal from "./create-project-modal";
import ProjectCard from "@/components/dashboard/Projects/Project-card";

export default async   function ProjectsPage() {
  const db = await getDatabase();

  const projects = await db.collection('projects').find({}).toArray();


  return (
    <main className="space-y-8 select-none">
      {/* Top Header & Trigger Action */}
      <div className="border-b border-[#18181B]/15 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#18181B]/50 font-mono">
            <span>FORGE OS</span>
            <span>//</span>
            <span>PROJECT MANAGEMENT</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#18181B] mt-1">
            Projects
          </h1>
          <p className="text-xs text-[#18181B]/60 mt-0.5">
            Manage your Forge projects and architectures.
          </p>
        </div>

        <CreateProjectModal />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {projects.map((project: any) => (
      <ProjectCard key={project._id.toString()} project={project} />
      ))}

      </div>

    
    </main>
  );
}