import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2026 Barento Hashum. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Built with React, Node.js & MongoDB
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/barentohashum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition">
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/barentohashum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition">
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:barento@example.com"
              className="text-gray-400 hover:text-white transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
