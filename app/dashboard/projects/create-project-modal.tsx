"use client";

import { useState } from "react";
import ProjectForm from "./create-project-form";
import { Plus, X, FolderPlus } from "lucide-react";

export default function CreateProjectModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#18181B] text-white text-xs font-bold rounded-xl hover:bg-[#18181B]/90 transition-all shadow-2xs cursor-pointer w-fit"
      >
        <Plus className="w-4 h-4" />
        <span>New Project</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#18181B]/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          />

          <div className="relative w-full max-w-2xl bg-white border border-[#18181B]/20 rounded-2xl shadow-xl z-10 overflow-hidden animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#18181B]/10 bg-[#F7F6F2]">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#18181B]/60">
                <FolderPlus className="w-3.5 h-3.5 text-[#18181B]" />
                <span>FORGE OS // INITIALIZER</span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#18181B]/50 hover:text-[#18181B] hover:bg-[#18181B]/10 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
              <ProjectForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}