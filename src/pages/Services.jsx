import React from "react";
import { motion } from "framer-motion";
import { Layers, Database, Cpu, Layout } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "API Development",
      description: "Robust, scalable, and well-documented REST & GraphQL APIs using Python (FastAPI/Django) or Node.js.",
      icon: <Database className="size-8 text-primary" />,
      tags: ["FastAPI", "PostgreSQL", "Auth"],
    },
    {
      title: "AI Integration",
      description: "Custom AI solutions, LLM prompt engineering, and RAG systems integration into existing workflows.",
      icon: <Cpu className="size-8 text-primary" />,
      tags: ["Gemini", "LangChain", "Vector DB"],
    },
    {
      title: "Web Applications",
      description: "Full-stack web apps built with modern frameworks like React, Next.js, and clean UI/UX as priority.",
      icon: <Layout className="size-8 text-primary" />,
      tags: ["React", "Custom UI", "UX"],
    },
    {
      title: "Cloud Infrastructure",
      description: "Deployment optimization and serverless architecture design for high-performance delivery.",
      icon: <Layers className="size-8 text-primary" />,
      tags: ["AWS", "Vercel", "Docker"],
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
        <h2 className="text-4xl font-bold mb-6">What I Do</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          I provide specialized services to help businesses scale their digital infrastructure 
          and leverage the power of AI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-10 rounded-[2rem] hover:border-primary/40 transition-all group"
          >
            <div className="mb-8 p-4 bg-primary/10 w-fit rounded-2xl group-hover:bg-primary/20 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
