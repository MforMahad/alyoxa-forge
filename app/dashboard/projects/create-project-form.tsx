"use client";

import { createProject, type ProjectActionState } from "@/actions/projects";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FolderPlus, AlertCircle, ArrowRight, Loader2, Sparkles } from "lucide-react";

export default function ProjectForm() {
  const initialState: ProjectActionState = {
    success: false,
    error: null,
    slug: null,
  };
  
  const [state, formAction, isPending] = useActionState(createProject, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.success && state.slug) {
      router.push(`/dashboard/projects/${state.slug}`);
    }
  }, [state.success, state.slug, router]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-[#18181B]/15 rounded-2xl p-6 sm:p-8 shadow-2xs select-none">
      
      {/* Form Header */}
      <div className="border-b border-[#18181B]/10 pb-5 mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#18181B]/50">
            <span>FORGE OS</span>
            <span>//</span>
            <span>PROJECT INITIALIZER</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181B] tracking-tight mt-0.5">
            Create New Project
          </h2>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#18181B] text-white flex items-center justify-center">
          <FolderPlus className="w-5 h-5" />
        </div>
      </div>

      <form action={formAction} className="space-y-6">
        
        {/* Project Name Field */}
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="block text-xs font-bold uppercase tracking-wider text-[#18181B]/70"
          >
            Project Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. ALYOXA Engine, Web Forge v2"
            required
            className="w-full px-4 py-3 bg-[#F7F6F2] border border-[#18181B]/15 rounded-xl text-sm text-[#18181B] placeholder-[#18181B]/40 focus:outline-none focus:border-[#18181B] focus:bg-white transition-all font-medium"
          />
        </div>

        {/* Description Field */}
        <div className="space-y-2">
          <label 
            htmlFor="description" 
            className="block text-xs font-bold uppercase tracking-wider text-[#18181B]/70"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Describe scope, technical stack, or deliverables..."
            required
            className="w-full px-4 py-3 bg-[#F7F6F2] border border-[#18181B]/15 rounded-xl text-sm text-[#18181B] placeholder-[#18181B]/40 focus:outline-none focus:border-[#18181B] focus:bg-white transition-all font-medium resize-none"
          />
        </div>

        {/* Error Banner */}
        {state.error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-800 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{state.error}</span>
          </div>
        )}

        {/* Actions Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#18181B]/10">
          
          <div className="text-[11px] font-mono text-[#18181B]/50 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Auto-generates URL slug</span>
          </div>

          <button 
            type="submit"
            disabled={isPending}
            className="w-full sm:w-auto px-6 py-3 bg-[#18181B] text-white text-xs font-bold rounded-xl hover:bg-[#18181B]/90 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Initializing...</span>
              </>
            ) : (
              <>
                <span>Create Project</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Generated Slug Indicator */}
        {state.slug && (
          <div className="mt-4 p-3 bg-[#F7F6F2] border border-[#18181B]/10 rounded-xl text-xs font-mono text-[#18181B]/70 flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-[#18181B]/40">Generated Slug:</span>
            <span className="font-bold text-[#18181B]">{state.slug}</span>
          </div>
        )}

      </form>
    </div>
  );
}