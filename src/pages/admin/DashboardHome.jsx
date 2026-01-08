import { useState, useEffect } from "react";
import { FolderKanban, MessageSquare, TrendingUp } from "lucide-react";
import axios from "axios";

const DashboardHome = () => {
  const [stats, setStats] = useState({
    projects: 0,
    messages: 0,
    views: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const [projectsRes, messagesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/projects"),
        axios.get("http://localhost:5000/api/messages", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setStats({
        projects: projectsRes.data.length,
        messages: messagesRes.data.length,
        views: Math.floor(Math.random() * 1000) + 500,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const statCards = [
    {
      icon: FolderKanban,
      label: "Total Projects",
      value: stats.projects,
      color: "bg-blue-500",
    },
    {
      icon: MessageSquare,
      label: "Messages",
      value: stats.messages,
      color: "bg-green-500",
    },
    {
      icon: TrendingUp,
      label: "Portfolio Views",
      value: stats.views,
      color: "bg-purple-500",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {statCards.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div
                className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                <stat.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition text-left">
            <h4 className="font-semibold mb-1">Add New Project</h4>
            <p className="text-sm text-gray-600">Showcase your latest work</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition text-left">
            <h4 className="font-semibold mb-1">View Messages</h4>
            <p className="text-sm text-gray-600">
              Check contact form submissions
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
