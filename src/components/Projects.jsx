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
          title: "E-Commerce Platform",
          description:
            "Full-stack e-commerce application with cart, payment integration, and admin dashboard",
          techStack: ["React", "Node.js", "MongoDB", "Stripe"],
          category: "Full-Stack",
          image: "https://via.placeholder.com/400x250",
          liveUrl: "https://demo.com",
          githubUrl: "https://github.com",
        },
        {
          _id: "2",
          title: "Task Management App",
          description:
            "Collaborative task management tool with real-time updates and team features",
          techStack: ["React", "Tailwind", "Firebase"],
          category: "Frontend",
          image: "https://via.placeholder.com/400x250",
          liveUrl: "https://demo.com",
          githubUrl: "https://github.com",
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
    <section id="projects" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === cat
                  ? "bg-primary-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project._id} className="card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
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
                      className="flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
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
