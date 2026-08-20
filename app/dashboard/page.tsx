import { 
   
  CheckSquare, 
  Cpu, 
  ArrowUpRight, 

  Layers, 
  Bot 
} from "lucide-react";

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8 select-none">
      
      {/* Header Bar */}
      <div className="border-b border-[#18181B]/15 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#18181B]/50">
            <span>FORGE OS</span>
            <span>//</span>
            <span>SYSTEM OVERVIEW</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#18181B] mt-1">
            Architectural Workspace
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#18181B]/15 rounded-xl text-xs font-semibold shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System Operational
          </span>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 bg-white border border-[#18181B]/15 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-[#18181B]/60 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]/50">Active Engines</span>
            <Layers className="w-4 h-4 text-[#18181B]" />
          </div>
          <div className="text-2xl font-extrabold text-[#18181B]">03</div>
          <p className="text-[11px] text-[#18181B]/60 mt-1 font-medium">ALYOXA, IWB & Supplement MY</p>
        </div>

        <div className="p-5 bg-white border border-[#18181B]/15 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-[#18181B]/60 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]/50">Pending Tasks</span>
            <CheckSquare className="w-4 h-4 text-[#18181B]" />
          </div>
          <div className="text-2xl font-extrabold text-[#18181B]">08</div>
          <p className="text-[11px] text-[#18181B]/60 mt-1 font-medium">3 priority items queued</p>
        </div>

        <div className="p-5 bg-white border border-[#18181B]/15 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-[#18181B]/60 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]/50">Compute Load</span>
            <Cpu className="w-4 h-4 text-[#18181B]" />
          </div>
          <div className="text-2xl font-extrabold text-[#18181B]">14.2 ms</div>
          <p className="text-[11px] text-[#18181B]/60 mt-1 font-medium">Edge latency optimal</p>
        </div>

        <div className="p-5 bg-white border border-[#18181B]/15 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-[#18181B]/60 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]/50">AI & BI Sync</span>
            <Bot className="w-4 h-4 text-[#18181B]" />
          </div>
          <div className="text-2xl font-extrabold text-[#18181B]">99.9%</div>
          <p className="text-[11px] text-[#18181B]/60 mt-1 font-medium">Data pipelines operational</p>
        </div>

      </div>

      {/* Main Workspace Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Active Projects Panel */}
        <div className="lg:col-span-2 p-6 bg-white border border-[#18181B]/15 rounded-2xl shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#18181B]/10 pb-4">
            <div>
              <h2 className="font-extrabold text-sm text-[#18181B] uppercase tracking-wider">Active Deployments</h2>
              <p className="text-xs text-[#18181B]/60">Current client architectures & agency engines</p>
            </div>
            <span className="text-xs font-mono font-bold text-[#18181B]/50">FORGE v2.4</span>
          </div>

          <div className="space-y-3">
            
            {/* Project Item 1 */}
            <div className="p-4 bg-[#F7F6F2] border border-[#18181B]/10 rounded-xl flex items-center justify-between hover:border-[#18181B]/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#18181B] text-white flex items-center justify-center text-xs font-bold font-mono">
                  AF
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#18181B]">ALYOXA Agency Engine</h3>
                  <p className="text-[11px] text-[#18181B]/60">Next.js 15 • Spline 3D Wireframe • Netlify</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md border border-emerald-200">
                LIVE
              </span>
            </div>

            {/* Project Item 2 */}
            <div className="p-4 bg-[#F7F6F2] border border-[#18181B]/10 rounded-xl flex items-center justify-between hover:border-[#18181B]/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#18181B] text-white flex items-center justify-center text-xs font-bold font-mono">
                  IW
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#18181B]">Inner Wisdom Balancing</h3>
                  <p className="text-[11px] text-[#18181B]/60">WordPress • Blog Management • Video Support</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded-md border border-blue-200">
                SUPPORT
              </span>
            </div>

            {/* Project Item 3 */}
            <div className="p-4 bg-[#F7F6F2] border border-[#18181B]/10 rounded-xl flex items-center justify-between hover:border-[#18181B]/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#18181B] text-white flex items-center justify-center text-xs font-bold font-mono">
                  HS
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#18181B]">Health Supplement Engine (MY)</h3>
                  <p className="text-[11px] text-[#18181B]/60">WordPress Custom • 20–30 SKUs • SEO Proposal</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-md border border-amber-200">
                PROPOSAL
              </span>
            </div>

          </div>
        </div>

        {/* Quick Action & Status Panel */}
        <div className="p-6 bg-white border border-[#18181B]/15 rounded-2xl shadow-2xs flex flex-col justify-between space-y-6">
          <div>
            <h2 className="font-extrabold text-sm text-[#18181B] uppercase tracking-wider border-b border-[#18181B]/10 pb-4 mb-4">
              Quick Telemetry
            </h2>

            <div className="space-y-3">
              <button className="w-full py-2.5 px-3.5 text-xs font-semibold bg-[#18181B] text-white rounded-xl hover:bg-[#18181B]/90 transition-all flex items-center justify-between shadow-2xs">
                <span>View All Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button className="w-full py-2.5 px-3.5 text-xs font-semibold bg-[#F7F6F2] border border-[#18181B]/15 text-[#18181B] rounded-xl hover:border-[#18181B]/30 transition-all flex items-center justify-between">
                <span>Task Backlog</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#18181B]/50" />
              </button>
            </div>
          </div>

          <div className="p-4 bg-[#F7F6F2] border border-[#18181B]/10 rounded-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#18181B]/60 block mb-1">
              SYSTEM STATE
            </span>
            <p className="text-xs text-[#18181B]/80 font-medium leading-relaxed">
              Workspace configured for rapid deployment. Navigation routes synced with layout core.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}