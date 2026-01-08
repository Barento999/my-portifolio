import { useState, useEffect } from "react";
import { Download, Mail, ArrowRight, Sparkles } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="section-container min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6 animate-fade-in">
            <Sparkles className="text-primary-600" size={20} />
            <span className="text-primary-700 font-medium">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-400 bg-clip-text text-transparent animate-fade-in-up">
            Barento Hashum
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 h-10 animate-fade-in-up animation-delay-200">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
            Software Engineering student passionate about building scalable web
            applications with modern technologies. Specializing in React,
            Node.js, and MongoDB.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap animate-fade-in-up animation-delay-600">
            {[
              { Icon: SiReact, name: "React", color: "text-cyan-500" },
              { Icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
              { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
              { Icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
            ].map(({ Icon, name, color }, idx) => (
              <div
                key={name}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${600 + idx * 100}ms` }}>
                <Icon className={color} size={24} />
                <span className="font-medium">{name}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1000">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
