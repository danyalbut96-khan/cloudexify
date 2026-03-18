import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Filter, Sparkles, Database, Layout } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "APIs", "Web", "AI"];

  const projects = [
    {
      title: "Text Tools API Pro",
      category: "APIs",
      description: "A high-performance text manipulation engine with regex support, cleaning, and multilingual analysis.",
      tech: ["FastAPI", "Python", "Regex", "Docker"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD96a1KzfPaICVQTpOZuCEItXotLzq69Yz_9-cPQoNPiTys13OCy4tOQmTzr6Y8VoUSCniILqwc0CEHYuSsBukpSl8_EMuycM9x8Ko4FxbACxqDIzwQRPAwPzsEcTd6HsjuRmUOMmJMH8Ft8PQePuMt9HwCHIim7e6rg3LIHbOwdBWQWDGpa3Wb_5fHg2FLkXbNnLdNIswNgwDEtSVhJ6_eMmnWzl4oWbhH7IToqgqgugYD1rK5Ub5typr-OeAkuRuLgXKOzLj3YI0",
      live: "#",
      github: "#"
    },
    {
      title: "Background Remover AI",
      category: "AI",
      description: "Cloud-based AI tool that uses neural networks to intelligently isolate subjects from images.",
      tech: ["PyTorch", "Flask", "React", "Cloudinary"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtjapL7u66zSSQLtFuKMV-HqBg9vq6X55xTYgyHZPh_G55qFq3EQfSQ6jdy10L-mziC_oDD7oB1LYxDAO6pbIgUFAD_zd4is-_4pM-4bNhkNP3Hp25d74qWFre2kJdS-h8aGA5AbGb9VOyDHIPH21T4_ouBcANgkTMUlSBh4DrjXUsaliJ8GwUcci7Or_reZpy5ZdD0gsDVJOFBetNF0iVJhF9ZD-9xGpY0pmDO7nR1D6tmPw2oIiz5QF6-BrqQTFTBwlhusFIRR0",
      live: "#",
      github: "#"
    },
    {
      title: "E-Commerce OS",
      category: "Web",
      description: "A complete operating system for modern retail, including inventory, checkout, and real-time analytics.",
      tech: ["Next.js", "Tailwind", "PostgreSQL", "Stripe"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD96a1KzfPaICVQTpOZuCEItXotLzq69Yz_9-cPQoNPiTys13OCy4tOQmTzr6Y8VoUSCniILqwc0CEHYuSsBukpSl8_EMuycM9x8Ko4FxbACxqDIzwQRPAwPzsEcTd6HsjuRmUOMmJMH8Ft8PQePuMt9HwCHIim7e6rg3LIHbOwdBWQWDGpa3Wb_5fHg2FLkXbNnLdNIswNgwDEtSVhJ6_eMmnWzl4oWbhH7IToqgqgugYD1rK5Ub5typr-OeAkuRuLgXKOzLj3YI0",
      live: "#",
      github: "#"
    },
    {
      title: "Neural Translator",
      category: "AI",
      description: "Real-time voice and text translation service leveraging advanced transformer models.",
      tech: ["Transformer", "Node.js", "LangChain"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtjapL7u66zSSQLtFuKMV-HqBg9vq6X55xTYgyHZPh_G55qFq3EQfSQ6jdy10L-mziC_oDD7oB1LYxDAO6pbIgUFAD_zd4is-_4pM-4bNhkNP3Hp25d74qWFre2kJdS-h8aGA5AbGb9VOyDHIPH21T4_ouBcANgkTMUlSBh4DrjXUsaliJ8GwUcci7Or_reZpy5ZdD0gsDVJOFBetNF0iVJhF9ZD-9xGpY0pmDO7nR1D6tmPw2oIiz5QF6-BrqQTFTBwlhusFIRR0",
      live: "#",
      github: "#"
    }
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="max-w-xl"
        >
          <div className="flex items-center gap-3 mb-4">
             <Filter className="text-primary size-5" />
             <span className="text-xs font-black uppercase tracking-widest text-primary">Portfolio Selection</span>
          </div>
          <h2 className="text-5xl font-black mb-6">Proven <span className="text-primary">Impact</span> Through Code.</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A diverse collection of systems and interfaces built with performance and user experience as the core.
          </p>
        </motion.div>

        <div className="flex bg-slate-100 dark:bg-white/5 p-2 rounded-2xl border border-slate-200 dark:border-white/5 shadow-inner">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all ${filter === cat ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group glass-premium rounded-[3rem] overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                   <div className="flex gap-4">
                     <a href={p.live} className="size-14 bg-white text-dark rounded-2xl flex items-center justify-center hover:scale-110 transition-transform"><ExternalLink className="size-6" /></a>
                     <a href={p.github} className="size-14 glass-premium text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform"><Github className="size-6" /></a>
                   </div>
                </div>
                <div className="absolute top-6 right-6 px-4 py-2 glass-premium rounded-xl text-xs font-black uppercase text-white tracking-widest shadow-2xl">
                   {p.category}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="px-4 py-2 bg-slate-800/50 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
