import { getDatabase } from "@/lib/db/mongodb";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Folder, Calendar, Clock, Tag, Layers, CheckCircle2, Terminal } from "lucide-react";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const db = await getDatabase();
  const { slug } = await params;

  const project = await db.collection("projects").findOne({ slug });

  if (!project) {
    notFound();
  }

  const { name, description, createdAt, updatedAt } = project;

  return (
    <div className="space-y-8 select-none">
      {/* Top Navigation & Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#18181B]/60 hover:text-[#18181B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO PROJECTS</span>
        </Link>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#18181B]/5 border border-[#18181B]/15 rounded-full text-[11px] font-mono font-semibold text-[#18181B]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          ACTIVE NODE
        </span>
      </div>

      {/* Header Unit */}
      <div className="bg-white border border-[#18181B]/15 rounded-2xl p-6 sm:p-8 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#18181B]/10 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#18181B]/50">
              <Folder className="w-3.5 h-3.5" />
              <span>PROJECT INSTANCE</span>
              <span>//</span>
              <span className="text-[#18181B]">{slug}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
              {name}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#F7F6F2] border border-[#18181B]/15 rounded-xl text-xs font-mono font-bold text-[#18181B]/70">
              SLUG: {slug}
            </span>
          </div>
        </div>

        {/* Core Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-4 bg-[#F7F6F2] border border-[#18181B]/10 rounded-xl space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#18181B]/50">
              <Calendar className="w-3.5 h-3.5" />
              <span>Created At</span>
            </div>
            <p className="text-xs font-mono font-semibold text-[#18181B]">
              {new Date(createdAt).toLocaleString()}
            </p>
          </div>

          <div className="p-4 bg-[#F7F6F2] border border-[#18181B]/10 rounded-xl space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#18181B]/50">
              <Clock className="w-3.5 h-3.5" />
              <span>Updated At</span>
            </div>
            <p className="text-xs font-mono font-semibold text-[#18181B]">
              {new Date(updatedAt).toLocaleString()}
            </p>
          </div>

          <div className="p-4 bg-[#F7F6F2] border border-[#18181B]/10 rounded-xl space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#18181B]/50">
              <Tag className="w-3.5 h-3.5" />
              <span>Database Status</span>
            </div>
            <p className="text-xs font-mono font-semibold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Synchronized
            </p>
          </div>

          <div className="p-4 bg-[#F7F6F2] border border-[#18181B]/10 rounded-xl space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#18181B]/50">
              <Layers className="w-3.5 h-3.5" />
              <span>Engine Type</span>
            </div>
            <p className="text-xs font-mono font-semibold text-[#18181B]">
              Forge Sub-Module
            </p>
          </div>
        </div>
      </div>

      {/* Description & Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-[#18181B]/15 rounded-2xl p-6 shadow-2xs space-y-4">
          <div className="border-b border-[#18181B]/10 pb-3 flex items-center justify-between">
            <h2 className="text-xs font-extrabold text-[#18181B] uppercase tracking-wider">
              Project Specification & Description
            </h2>
            <Terminal className="w-4 h-4 text-[#18181B]/40" />
          </div>

          <p className="text-sm text-[#18181B]/80 font-medium leading-relaxed whitespace-pre-wrap">
            {description}
          </p>
        </div>

        <div className="bg-white border border-[#18181B]/15 rounded-2xl p-6 shadow-2xs space-y-4">
          <h2 className="text-xs font-extrabold text-[#18181B] uppercase tracking-wider border-b border-[#18181B]/10 pb-3">
            System Telemetry
          </h2>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between py-2 border-b border-[#18181B]/10">
              <span className="text-[#18181B]/50">Engine:</span>
              <span className="font-bold">Next.js App Router</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#18181B]/10">
              <span className="text-[#18181B]/50">Storage:</span>
              <span className="font-bold">MongoDB Collection</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[#18181B]/50">Routing:</span>
              <span className="font-bold">Dynamic [slug]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}