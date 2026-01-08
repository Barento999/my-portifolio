import { Code, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
            BH
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">
            Full-Stack Developer & Software Engineering Student
          </h3>
          <p className="text-gray-600 mb-4">
            I'm a passionate Software Engineering student with a strong focus on
            full-stack web development. I specialize in building modern,
            scalable applications using React, Node.js, and MongoDB.
          </p>
          <p className="text-gray-600 mb-6">
            My journey in software development is driven by curiosity and a
            desire to create solutions that make a real impact. I'm particularly
            interested in frontend development, user experience, and building
            systems that scale.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Code className="text-primary-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold">Clean Code</h4>
                <p className="text-sm text-gray-600">
                  Writing maintainable, scalable code
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lightbulb className="text-primary-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold">Problem Solver</h4>
                <p className="text-sm text-gray-600">
                  Creative solutions to complex challenges
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="text-primary-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold">Goal-Oriented</h4>
                <p className="text-sm text-gray-600">
                  Focused on delivering results
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-primary-600 mt-1" size={24} />
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
