import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="card relative overflow-hidden p-12 md:p-16 text-center shadow-2xl animate-fade-in">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-primary-300 to-purple-300 dark:from-primary-600/30 dark:to-purple-600/30 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600/30 dark:to-pink-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6 animate-float">
              <Sparkles
                size={20}
                className="text-primary-600 dark:text-primary-400 animate-pulse"
              />
              <span className="font-semibold text-sm gradient-text">
                Let's Collaborate
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight">
              Ready to Build Something Amazing?
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              I'm actively seeking{" "}
              <span className="font-bold gradient-text">
                internship opportunities
              </span>{" "}
              and{" "}
              <span className="font-bold gradient-text">
                freelance projects
              </span>
              . Let's connect and create something remarkable together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary flex items-center justify-center gap-2 group">
                Start a Conversation
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <a
                href="/cv.pdf"
                download
                className="btn-secondary flex items-center justify-center gap-2">
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-slate-700">
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  15+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  3+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Commitment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
