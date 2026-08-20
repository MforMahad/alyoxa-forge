import { Sidebar } from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;    
}) {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#18181B] flex">
      {/* Persistent Sidebar */}
      <Sidebar />

      {/* Main Layout Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Persistent TopBar */}
        <Topbar />

        {/* Page Content Rendered Here */}
        <main className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}