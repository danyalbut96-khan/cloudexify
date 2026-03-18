import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      // Backend integration placeholder
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="py-20 flex flex-col md:flex-row gap-20">
      <div className="md:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I'm always open to discussing new opportunities and creative ideas.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
              <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Mail className="size-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Email</p>
                <p>hello@anonkhan.dev</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="md:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-[2rem]"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center py-10"
              >
                <CheckCircle className="size-20 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-primary font-bold underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-primary/20 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-primary/20 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Message</label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-primary/20 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white transition-all resize-none"
                    placeholder="How can I help?"
                  />
                </div>
                <button
                  disabled={status === "submitting"}
                  className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? "Sending..." : (
                    <>Send Message <Send className="size-5" /></>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
