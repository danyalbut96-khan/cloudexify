import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Caption Generator",
      description: "A mobile application that generates contextual captions for images using Gemini Pro Vision.",
      tech: ["Flutter", "Gemini API", "Dart"],
      live: "#",
      github: "#",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD96a1KzfPaICVQTpOZuCEItXotLzq69Yz_9-cPQoNPiTys13OCy4tOQmTzr6Y8VoUSCniILqwc0CEHYuSsBukpSl8_EMuycM9x8Ko4FxbACxqDIzwQRPAwPzsEcTd6HsjuRmUOMmJMH8Ft8PQePuMt9HwCHIim7e6rg3LIHbOwdBWQWDGpa3Wb_5fHg2FLkXbNnLdNIswNgwDEtSVhJ6_eMmnWzl4oWbhH7IToqgqgugYD1rK5Ub5typr-OeAkuRuLgXKOzLj3YI0",
    },
    {
      title: "SaaS Analytics Dashboard",
      description: "Real-time analytics platform for SaaS businesses with predictive growth models.",
      tech: ["Next.js", "Tailwind CSS", "FastAPI"],
      live: "#",
      github: "#",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtjapL7u66zSSQLtFuKMV-HqBg9vq6X55xTYgyHZPh_G55qFq3EQfSQ6jdy10L-mziC_oDD7oB1LYxDAO6pbIgUFAD_zd4is-_4pM-4bNhkNP3Hp25d74qWFre2kJdS-h8aGA5AbGb9VOyDHIPH21T4_ouBcANgkTMUlSBh4DrjXUsaliJ8GwUcci7Or_reZpy5ZdD0gsDVJOFBetNF0iVJhF9ZD-9xGpY0pmDO7nR1D6tmPw2oIiz5QF6-BrqQTFTBwlhusFIRR0",
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of neural networks training in real-time.",
      tech: ["React", "Three.js", "TensorFlow.js"],
      live: "#",
      github: "#",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD96a1KzfPaICVQTpOZuCEItXotLzq69Yz_9-cPQoNPiTys13OCy4tOQmTzr6Y8VoUSCniILqwc0CEHYuSsBukpSl8_EMuycM9x8Ko4FxbACxqDIzwQRPAwPzsEcTd6HsjuRmUOMmJMH8Ft8PQePuMt9HwCHIim7e6rg3LIHbOwdBWQWDGpa3Wb_5fHg2FLkXbNnLdNIswNgwDEtSVhJ6_eMmnWzl4oWbhH7IToqgqgugYD1rK5Ub5typr-OeAkuRuLgXKOzLj3YI0",
    },
  ];

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-20"
      >
        <h2 className="text-4xl font-bold mb-6">Selected Projects</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          A showcase of platforms and tools I've built, ranging from AI experiments to production-ready SaaS.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 gap-4">
                <a href={project.live} className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
                  <ExternalLink className="size-5 text-white" />
                </a>
                <a href={project.github} className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Github className="size-5 text-white" />
                </a>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
