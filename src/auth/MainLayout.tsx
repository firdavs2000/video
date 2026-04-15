import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

export default function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="h-screen w-screen flex bg-[#191919] transition-all duration-500">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden xl:block fixed left-0 top-0 h-full w-64 z-40">
        <Sidebar
          collapsed={false}
          onToggle={() => {}}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* MOBILE SIDEBAR */}
      {!sidebarCollapsed && (
        <div className="fixed inset-0 z-50 xl:hidden flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarCollapsed(true)}
          />
          <div className="relative w-64 bg-[#191919] h-full">
            <Sidebar
              collapsed={false}
              onToggle={() => setSidebarCollapsed(true)}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      )}

      {/* MAIN */}
      <div className="flex-1 flex flex-col h-full xl:ml-64">
        <Header
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
}

