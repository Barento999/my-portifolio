import { useState, useEffect, useRef, useMemo } from "react";
import { Code, Coffee, GitBranch, Award, Zap } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = useMemo(
    () => [
      {
        icon: Code,
        value: 15,
        suffix: "+",
        label: "Projects Completed",
        color: "from-blue-600 to-cyan-600",
      },
      {
        icon: Coffee,
        value: 1000,
        suffix: "+",
        label: "Cups of Coffee",
        color: "from-purple-600 to-pink-600",
      },
      {
        icon: GitBranch,
        value: 10,
        suffix: "+",
        label: "Git Commits",
        color: "from-indigo-600 to-purple-600",
      },
      {
        icon: Award,
        value: 3,
        suffix: "+",
        label: "Years Experience",
        color: "from-orange-600 to-amber-600",
      },
      {
        icon: Zap,
        value: 100,
        suffix: "%",
        label: "Client Satisfaction",
        color: "from-green-600 to-emerald-600",
      },
    ],
    []
  );

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = stats.map((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      return setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(
            Math.round(increment * currentStep),
            stat.value
          );
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timers[index]);
        }
      }, stepDuration);
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [isVisible, stats]);

  return (
    <section ref={sectionRef} className="section-container">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold gradient-text mb-4">
          Achievements & Stats
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="card p-6 text-center group hover:scale-105 transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: `${idx * 100}ms` }}>
            <div
              className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="text-white" size={28} />
            </div>
            <div className="text-4xl font-bold gradient-text mb-2 tabular-nums">
              {counts[idx]}
              {stat.suffix}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Core Values */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
            🎯
          </div>
          <h3 className="font-bold gradient-text mb-2">Problem Solver</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Passionate about finding elegant solutions to complex challenges
          </p>
        </div>
        <div className="card p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-600">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
            🚀
          </div>
          <h3 className="font-bold gradient-text mb-2">Fast Learner</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Quick to adapt and master new technologies and frameworks
          </p>
        </div>
        <div className="card p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-800">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
            💡
          </div>
          <h3 className="font-bold gradient-text mb-2">Innovative Thinker</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Always exploring creative approaches to development
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
