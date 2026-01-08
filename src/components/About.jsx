import { Code, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl animate-float relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
            BH
          </div>
        </div>

        <div className="animate-slide-in-right">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Full-Stack Developer & AI/ML Enthusiast
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I'm a passionate Software Engineering student with a strong focus on
            full-stack web development and{" "}
            <span className="font-bold gradient-text">
              Artificial Intelligence & Machine Learning
            </span>
            . I specialize in building modern, scalable applications using
            React, Node.js, and MongoDB.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            My journey in software development is driven by curiosity and a
            desire to create intelligent solutions that make a real impact. I'm
            particularly interested in combining web development with AI/ML to
            build smart, data-driven systems that solve real-world problems.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 group">
              <Code
                className="text-primary-600 mt-1 group-hover:scale-125 transition-transform"
                size={24}
              />
              <div>
                <h4 className="font-semibold">Clean Code</h4>
                <p className="text-sm text-gray-600">
                  Writing maintainable, scalable code
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 group">
              <Lightbulb
                className="text-purple-600 mt-1 group-hover:scale-125 transition-transform"
                size={24}
              />
              <div>
                <h4 className="font-semibold">Problem Solver</h4>
                <p className="text-sm text-gray-600">
                  Creative solutions to complex challenges
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 group">
              <Target
                className="text-pink-600 mt-1 group-hover:scale-125 transition-transform"
                size={24}
              />
              <div>
                <h4 className="font-semibold">Goal-Oriented</h4>
                <p className="text-sm text-gray-600">
                  Focused on delivering results
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 group">
              <Users
                className="text-blue-600 mt-1 group-hover:scale-125 transition-transform"
                size={24}
              />
              <div>
                <h4 className="font-semibold">Team Player</h4>
                <p className="text-sm text-gray-600">
                  Collaborative and communicative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
