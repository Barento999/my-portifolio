import { useState, useEffect } from "react";
import {
  Download,
  Mail,
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
} from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    {
      text: "Full-Stack Developer",
      gradient: "from-blue-600 via-cyan-500 to-teal-500",
    },
    {
      text: "AI & ML Enthusiast",
      gradient: "from-purple-600 via-pink-500 to-rose-500",
    },
    {
      text: "Problem Solver",
      gradient: "from-orange-600 via-amber-500 to-yellow-500",
    },
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex].text;
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(
          isDeleting
            ? currentRole.slice(0, typedText.length - 1)
            : currentRole.slice(0, typedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="section-container min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-300 to-purple-300 dark:from-primary-600/30 dark:to-purple-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600/30 dark:to-pink-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-pink-300 to-primary-300 dark:from-pink-600/30 dark:to-primary-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6 animate-fade-in animate-float">
            <Sparkles className="text-primary-600 animate-pulse" size={20} />
            <span className="gradient-text font-semibold">
              Building Modern Web Experiences
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up drop-shadow-lg">
            <span className="gradient-text block">I'm</span>
            <span className="gradient-text block mt-2">Barento Hashum</span>
          </h1>

          <h2 className="text-2xl md:text-3xl mb-6 h-12 animate-fade-in-up animation-delay-200">
            <span
              className={`font-bold bg-gradient-to-r ${roles[currentRoleIndex].gradient} bg-clip-text text-transparent transition-all duration-500`}>
              {typedText}
            </span>
            <span className="text-gray-700 dark:text-gray-400 animate-pulse font-bold">
              |
            </span>
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-400 leading-relaxed">
            Software Engineering student passionate about{" "}
            <span className="font-bold gradient-text">
              AI & Machine Learning
            </span>
            . Building scalable web applications with modern technologies and
            exploring the future of intelligent systems.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-default group">
              <SiReact
                className="text-cyan-500 group-hover:scale-125 transition-transform duration-300"
                size={24}
              />
              <span className="font-semibold dark:text-gray-200">React</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-default group">
              <SiNodedotjs
                className="text-green-600 group-hover:scale-125 transition-transform duration-300"
                size={24}
              />
              <span className="font-semibold dark:text-gray-200">Node.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-default group">
              <SiMongodb
                className="text-green-500 group-hover:scale-125 transition-transform duration-300"
                size={24}
              />
              <span className="font-semibold dark:text-gray-200">MongoDB</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-default group">
              <SiTailwindcss
                className="text-cyan-400 group-hover:scale-125 transition-transform duration-300"
                size={24}
              />
              <span className="font-semibold dark:text-gray-200">Tailwind</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1000 mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-primary flex items-center justify-center gap-2 group">
              View Projects
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <a
              href="/cv.pdf"
              download
              className="btn-secondary flex items-center justify-center gap-2 group">
              <Download
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
              Download CV
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-secondary flex items-center justify-center gap-2 group">
              <Mail
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              Contact Me
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-1000">
            <a
              href="https://github.com/Barento999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 hover:scale-110 hover:shadow-lg transition-all duration-300 group">
              <Github
                size={22}
                className="group-hover:rotate-12 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/barento-hashum-2a67221a6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:scale-110 hover:shadow-lg transition-all duration-300 group">
              <Linkedin
                size={22}
                className="group-hover:rotate-12 transition-transform"
              />
            </a>
            <a
              href="mailto:barentohashum11@gmail.com"
              className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-pink-600 hover:to-rose-600 hover:scale-110 hover:shadow-lg transition-all duration-300 group">
              <Mail
                size={22}
                className="group-hover:rotate-12 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
