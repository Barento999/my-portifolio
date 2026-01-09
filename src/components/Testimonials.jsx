import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Academic Peer",
      role: "Software Engineering Student",
      company: "Haramaya University",
      image:
        "https://ui-avatars.com/api/?name=Academic+Peer&background=6366f1&color=fff&size=128",
      text: "Barento demonstrates exceptional technical proficiency and problem-solving abilities. His clean code practices and collaborative approach make him a valuable asset to any development team.",
      rating: 5,
    },
    {
      name: "Project Collaborator",
      role: "Full-Stack Developer",
      company: "Academic Project Team",
      image:
        "https://ui-avatars.com/api/?name=Project+Collaborator&background=a855f7&color=fff&size=128",
      text: "Working alongside Barento on our project management system showcased his deep understanding of the MERN stack. His attention to detail and commitment to best practices elevated our entire project.",
      rating: 5,
    },
    {
      name: "Study Group Leader",
      role: "Technical Mentor",
      company: "Tech Community",
      image:
        "https://ui-avatars.com/api/?name=Study+Leader&background=ec4899&color=fff&size=128",
      text: "Barento's dedication to continuous learning and knowledge sharing is exemplary. He brings fresh perspectives and innovative solutions, making him an invaluable community member.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-container">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold gradient-text mb-4">
          What People Say
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Main Testimonial Card */}
        <div className="card p-8 md:p-12 relative overflow-hidden animate-fade-in">
          {/* Quote Icon */}
          <div className="absolute top-6 right-6 opacity-10">
            <Quote size={80} className="text-primary-600" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, idx) => (
                <Star
                  key={idx}
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full border-4 border-primary-200 dark:border-primary-800 shadow-lg"
              />
              <div className="text-left">
                <h4 className="font-bold text-lg gradient-text">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-600 hover:to-purple-600 hover:text-white hover:scale-110 transition-all duration-300 group"
            aria-label="Previous testimonial">
            <ChevronLeft
              size={24}
              className="group-hover:scale-125 transition-transform"
            />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-8 h-3 bg-gradient-to-r from-primary-600 to-purple-600"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-primary-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-600 hover:to-purple-600 hover:text-white hover:scale-110 transition-all duration-300 group"
            aria-label="Next testimonial">
            <ChevronRight
              size={24}
              className="group-hover:scale-125 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
