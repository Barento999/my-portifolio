import { GraduationCap, Briefcase, Award } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      type: "education",
      icon: GraduationCap,
      title: "Bachelor of Software Engineering",
      organization: "University Name",
      period: "2022 - Present",
      description:
        "Studying software engineering with focus on web development, algorithms, and system design.",
      highlights: ["GPA: 3.8/4.0", "Dean's List", "Active in coding clubs"],
    },
    {
      type: "project",
      icon: Briefcase,
      title: "Full-Stack Developer",
      organization: "Academic Projects",
      period: "2023 - Present",
      description:
        "Built multiple full-stack applications using MERN stack for coursework and personal learning.",
      highlights: [
        "E-commerce platform",
        "Task management system",
        "REST API services",
      ],
    },
    {
      type: "certification",
      icon: Award,
      title: "Web Development Certifications",
      organization: "Online Learning Platforms",
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

  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>

          {timeline.map((item, idx) => (
            <div key={idx} className="relative mb-12 md:ml-16">
              {/* Timeline Icon */}
              <div className="absolute -left-16 top-0 hidden md:flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full text-white">
                <item.icon size={24} />
              </div>

              {/* Content Card */}
              <div className="card p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {item.organization}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {item.period}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{item.description}</p>

                <ul className="space-y-1">
                  {item.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
