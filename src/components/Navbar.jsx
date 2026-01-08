import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-effect shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="group cursor-pointer">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                BH
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-400 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity -z-10 animate-pulse"></div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 bg-white/60 dark:bg-slate-800/80 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-white/40 dark:border-slate-700/50">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-white font-semibold capitalize transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-primary-600 hover:to-purple-600 hover:scale-105 hover:shadow-md">
                  {section}
                </button>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/80 backdrop-blur-md border border-white/40 dark:border-slate-700/50 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-br hover:from-primary-600 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Toggle theme">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/80 backdrop-blur-md border border-white/40 dark:border-slate-700/50 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-br hover:from-primary-600 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-gradient-to-br from-primary-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-110">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-white/20 dark:border-slate-700/50 animate-fade-in shadow-xl">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 font-semibold capitalize hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50 dark:hover:from-primary-900/30 dark:hover:to-purple-900/30 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md border border-transparent hover:border-primary-200 dark:hover:border-primary-700">
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
