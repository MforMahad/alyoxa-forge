import Link from "next/link";
import { ArrowUpRight, Calendar, Folder } from "lucide-react";
import { ObjectId } from "mongodb";

interface ProjectCardProps {
  project: {
    _id: string | ObjectId;
    name: string;
    slug: string;
    description: string;
    createdAt?: string | Date;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const formattedDate = project.createdAt
    ? new Date(project.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Recently";

  return (
    <Link
      href={`/dashboard/projects/${project.slug}`}
      className="group relative flex flex-col justify-between p-6 bg-white border border-[#18181B]/15 rounded-2xl hover:border-[#18181B]/40 hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <div className="space-y-4">
        {/* Top Meta Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F7F6F2] border border-[#18181B]/10 rounded-md">
            <Folder className="w-3 h-3 text-[#18181B]/60" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#18181B]/70">
              {project.slug}
            </span>
          </div>

          <div className="w-7 h-7 rounded-lg border border-[#18181B]/10 flex items-center justify-center text-[#18181B]/40 group-hover:text-[#18181B] group-hover:border-[#18181B]/30 group-hover:bg-[#F7F6F2] transition-all">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Project Details */}
        <div>
          <h3 className="text-lg font-extrabold text-[#18181B] tracking-tight group-hover:underline underline-offset-4 decoration-[#18181B]/30">
            {project.name}
          </h3>
          <p className="text-xs text-[#18181B]/65 mt-1.5 line-clamp-2 leading-relaxed">
            {project.description || "No project description provided."}
          </p>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-6 pt-4 border-t border-[#18181B]/10 flex items-center justify-between text-[11px] font-mono text-[#18181B]/50">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[#18181B]/40" />
          <span>{formattedDate}</span>
        </div>
        <span className="font-bold text-[#18181B]/80 tracking-wide">
          ACTIVE
        </span>
      </div>
    </Link>
  );
}