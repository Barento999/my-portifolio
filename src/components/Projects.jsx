import { useState, useEffect } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === filter));
    }
  }, [filter, projects]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/projects");
      setProjects(response.data);
      setFilteredProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      // Fallback to demo data
      const demoProjects = [
        {
          _id: "1",
          title: "E-Commerce Website",
          description:
            "Modern e-commerce platform for product browsing, cart, orders, and admin management",
          techStack: ["React 19", "Vite", "Tailwind CSS", "Firebase"],
          category: "Full-Stack",
          image: "ecommerce.png",
          liveUrl: "https://demo.com",
          githubUrl: "https://github.com/Barento999/ecommerce-spa",
        },
        {
          _id: "2",
          title: "Project Management System",
          description:
            "Full-stack web application for managing projects, tasks, users, and timelines with secure authentication, role-based access, and time tracking",
          techStack: [
            "React 19",
            "Node.js",
            "MongoDB",
            "Express",
            "Tailwind",
            "JWT",
          ],
          category: "Full-Stack",
          image: "/project-mngmnt.png",
          liveUrl: "https://demo.com",
          githubUrl: "https://github.com/Barento999/Project-Management-System",
        },
        {
          _id: "3",
          title: "REST API Service",
          description:
            "Scalable REST API with authentication, rate limiting, and comprehensive documentation",
          techStack: ["Node.js", "Express", "MongoDB", "JWT"],
          category: "Backend",
          image: "https://via.placeholder.com/400x250",
          githubUrl: "https://github.com",
        },
      ];
      setProjects(demoProjects);
      setFilteredProjects(demoProjects);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["All", "Full-Stack", "Frontend", "Backend"];

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4">Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-8"></div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg scale-105"
                  : "glass-effect hover:scale-105"
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-primary-200 border-t-primary-600"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project._id}
              className="card overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text group-hover:scale-105 transition-transform duration-300 inline-block">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 glass-effect text-gray-700 text-xs font-medium rounded-lg hover:scale-110 transition-transform">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary-600 hover:text-purple-600 text-sm font-semibold hover:scale-110 transition-all">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-semibold hover:scale-110 transition-all">
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
