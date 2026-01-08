import { useState, useEffect } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiMysql,
  SiPython,
  SiPhp,
} from "react-icons/si";
import { Code2 } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-500", level: 90 },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "text-yellow-400",
          level: 85,
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "text-cyan-400",
          level: 90,
        },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-600", level: 95 },
        { name: "CSS3", icon: SiCss3, color: "text-blue-600", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: SiNodedotjs,
          color: "text-green-600",
          level: 85,
        },
        { name: "Python", icon: SiPython, color: "text-blue-500", level: 80 },
        { name: "PHP", icon: SiPhp, color: "text-indigo-600", level: 75 },
        { name: "Express", icon: SiExpress, color: "text-gray-700", level: 80 },
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "text-green-500",
          level: 80,
        },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600", level: 75 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit, color: "text-orange-600", level: 85 },
        { name: "GitHub", icon: SiGithub, color: "text-gray-900", level: 85 },
        {
          name: "VS Code",
          icon: Code2,
          color: "text-blue-600",
          level: 90,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4 animate-fade-in">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="card p-6 hover:scale-105 transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: `${idx * 100}ms` }}>
            <h3 className="text-xl font-bold mb-6 text-center gradient-text">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="group hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50 p-3 rounded-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon
                        className={`${skill.color} group-hover:scale-125 transition-transform duration-300`}
                        size={24}
                      />
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-inner">
                    <div
                      className={`bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-1000 shadow-lg ${
                        isVisible ? "animate-progress" : "w-0"
                      }`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${skillIdx * 100}ms`,
                      }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center animate-fade-in-up animation-delay-600">
        <h3 className="text-xl font-semibold mb-4 gradient-text">
          Core Concepts
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "REST APIs",
            "CRUD Operations",
            "JWT Authentication",
            "Responsive Design",
            "Git Version Control",
            "Agile Methodology",
          ].map((concept, idx) => (
            <span
              key={idx}
              className="px-5 py-2 glass-effect rounded-full text-sm font-semibold hover:scale-110 transition-all cursor-default animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}>
              {concept}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
