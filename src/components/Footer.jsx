import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-pink-500 to-primary-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300 animate-float">
                  BH
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-400 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity -z-10 animate-pulse"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              Barento Hashum
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack Developer & AI/ML Enthusiast crafting innovative
              digital experiences
            </p>
          </div>

          {/* Connect */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 flex items-center justify-center md:justify-end gap-2">
              <Sparkles size={18} className="text-purple-400" />
              Let's Connect
            </h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a
                href="https://github.com/Barento999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:from-primary-600 hover:to-purple-600 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 group">
                <Github
                  size={22}
                  className="group-hover:rotate-12 transition-transform"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/barento-hashum-2a67221a6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:from-blue-600 hover:to-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group">
                <Linkedin
                  size={22}
                  className="group-hover:rotate-12 transition-transform"
                />
              </a>
              <a
                href="mailto:barentohashum11@gmail.com"
                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:from-pink-600 hover:to-rose-500 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 group">
                <Mail
                  size={22}
                  className="group-hover:rotate-12 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Barento Hashum. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Built with{" "}
            <Heart size={14} className="text-red-500 animate-pulse" /> using
            <span className="text-cyan-400 font-semibold">React</span>,
            <span className="text-green-400 font-semibold">Node.js</span> &
            <span className="text-green-500 font-semibold">MongoDB</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
