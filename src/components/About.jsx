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
          <div className="relative w-80 h-96 mx-auto group perspective-1000">
            {/* Animated gradient background */}
            <div className="absolute -inset-2 bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>

            {/* Image container with 3D effect */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 animate-float">
              <img
                src="/barentohashum.jpg"
                alt="Barento Hashum"
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full"></div>

              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-primary-400 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-pink-400 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-400 to-purple-400 rounded-full blur-2xl opacity-40 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          </div>
        </div>

        <div className="animate-slide-in-right">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Full-Stack Developer & AI/ML Enthusiast
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I'm a passionate Software Engineering student with a strong focus on
            full-stack web development and{" "}
            <span className="font-bold gradient-text">
              Artificial Intelligence & Machine Learning
            </span>
            . I specialize in building modern, scalable applications using
            React, Node.js, and MongoDB.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            My journey in software development is driven by curiosity and a
            desire to create intelligent solutions that make a real impact. I'm
            particularly interested in combining web development with AI/ML to
            build smart, data-driven systems that solve real-world problems.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or learning about the latest
            trends in software development. I believe in continuous learning and
            staying ahead of the curve in this ever-evolving tech landscape.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 group">
              <Code
                className="text-primary-600 mt-1 group-hover:scale-125 transition-transform"
                size={24}
              />
              <div>
                <h4 className="font-semibold dark:text-gray-200">Clean Code</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Writing maintainable, scalable code
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 group">
              <Lightbulb
                className="text-purple-600 mt-1 group-hover:scale-125 transition-transform"
                size={24}
              />
              <div>
                <h4 className="font-semibold dark:text-gray-200">
                  Problem Solver
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Creative solutions to complex challenges
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 group">
              <Target
                className="text-pink-600 mt-1 group-hover:scale-125 transition-transform"
                size={24}
              />
              <div>
                <h4 className="font-semibold dark:text-gray-200">
                  Goal-Oriented
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Focused on delivering results
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 group">
              <Users
                className="text-blue-600 mt-1 group-hover:scale-125 transition-transform"
                size={24}
              />
              <div>
                <h4 className="font-semibold dark:text-gray-200">
                  Team Player
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
