import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await axios.post("http://localhost:5000/api/messages", formData);
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          I'm currently looking for internship opportunities and freelance
          projects. Feel free to reach out if you'd like to work together!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="animate-slide-in-left">
          <h3 className="text-2xl font-bold mb-6 gradient-text">
            Contact Information
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1 dark:text-gray-200">Email</h4>
                <a
                  href="mailto:barentohashum11@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  barentohashum11@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1 dark:text-gray-200">Phone</h4>
                <a
                  href="tel:+251930873999"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  +251 930 873 999
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1 dark:text-gray-200">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Harar, Ethiopia
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 glass-effect rounded-2xl border-2 border-primary-200 dark:border-primary-800 animate-glow">
            <h4 className="font-bold mb-2 gradient-text">
              Open to Opportunities
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm actively seeking internship positions and freelance projects.
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-slide-in-right">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700"
                placeholder="Your message..."></textarea>
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-xl font-medium animate-fade-in ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700 border-2 border-green-300"
                    : "bg-red-100 text-red-700 border-2 border-red-300"
                }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </span>
              ) : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
