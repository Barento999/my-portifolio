import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import DashboardHome from "./DashboardHome";
import ManageProjects from "./ManageProjects";
import ManageMessages from "./ManageMessages";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const menuItems = [
    { path: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    {
      path: "/admin/dashboard/projects",
      icon: FolderKanban,
      label: "Projects",
    },
    {
      path: "/admin/dashboard/messages",
      icon: MessageSquare,
      label: "Messages",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transition-transform duration-300`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>

        <nav className="px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition">
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden">
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-xl font-semibold">Portfolio Management</h1>
            <div className="text-sm text-gray-600">Welcome, Admin</div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="projects" element={<ManageProjects />} />
            <Route path="messages" element={<ManageMessages />} />
          </Routes>
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}></div>
      )}
    </div>
  );
};

export default AdminDashboard;
