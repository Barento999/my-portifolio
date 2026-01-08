import {
  GraduationCap,
  Briefcase,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      type: "education",
      icon: GraduationCap,
      title: "Bachelor of Software Engineering",
      organization: "Haramaya University",
      location: "Harar, Ethiopia",
      period: "2022 - Present",
      description:
        "Studying software engineering with focus on web development, algorithms, and system design.",
      highlights: [
        "Dean's List",
        "Active in coding clubs",
        "Full-stack development focus",
      ],
    },
    {
      type: "project",
      icon: Briefcase,
      title: "Full-Stack Developer",
      organization: "Academic Projects",
      location: "Remote",
      period: "2023 - Present",
      description:
        "Built multiple full-stack applications using MERN stack for coursework and personal learning.",
      highlights: [
        "E-commerce platform with Firebase",
        "Project management system",
        "REST API services with JWT auth",
      ],
    },
    {
      type: "certification",
      icon: Award,
      title: "Web Development Certifications",
      organization: "Online Learning Platforms",
      location: "Online",
      period: "2023",
      description:
        "Completed comprehensive courses in modern web development technologies.",
      highlights: [
        "React Advanced Patterns",
        "Node.js Backend Development",
        "MongoDB Database Design",
      ],
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "education":
        return "from-blue-500 to-cyan-500";
      case "project":
        return "from-purple-500 to-pink-500";
      case "certification":
        return "from-orange-500 to-red-500";
      default:
        return "from-primary-500 to-purple-500";
    }
  };

  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold gradient-text mb-4">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-purple-200 to-pink-200 dark:from-primary-900/50 dark:via-purple-900/50 dark:to-pink-900/50 hidden md:block rounded-full"></div>

          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="relative mb-12 md:ml-16 animate-fade-in-up"
              style={{ animationDelay: `${idx * 200}ms` }}>
              {/* Timeline Icon */}
              <div
                className={`absolute -left-16 top-0 hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-br ${getTypeColor(
                  item.type
                )} rounded-full text-white shadow-lg animate-float`}>
                <item.icon size={24} />
              </div>

              {/* Content Card */}
              <div className="card p-6 group hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold gradient-text mb-1 group-hover:scale-105 transition-transform inline-block">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold flex items-center gap-2">
                      <Briefcase size={16} className="text-primary-600" />
                      {item.organization}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-purple-600" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-pink-600" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50 dark:hover:from-primary-900/20 dark:hover:to-purple-900/20 transition-all duration-300 group/item">
                      <span className="w-2 h-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full mt-1.5 group-hover/item:scale-150 transition-transform"></span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
