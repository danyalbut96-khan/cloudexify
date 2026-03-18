import React from "react";
import { motion } from "framer-motion";
import { Wrench, Type, Image as ImageIcon, ExternalLink, Zap } from "lucide-react";

const Dashboard = () => {
  const tools = [
    {
      title: "Text Tools Pro",
      description: "A comprehensive suite for text manipulation: case conversion, word counting, and formatting.",
      icon: <Type className="size-8 text-primary" />,
      link: "#", // Placeholder for actual tool link
      category: "Utility",
      features: ["Advanced Regex", "Word Count", "Case Swap"],
    },
    {
      title: "Background Remover AI",
      description: "ML-powered tool to instantly remove backgrounds from images with professional precision.",
      icon: <ImageIcon className="size-8 text-primary" />,
      link: "#", // Placeholder for actual tool link
      category: "AI / Graphics",
      features: ["Edge Detection", "Auto-Crop", "HD Export"],
    },
    {
      title: "Code Formatter",
      description: "Quickly beautify and minify code across multiple languages with pre-defined styles.",
      icon: <Zap className="size-8 text-primary" />,
      link: "#",
      category: "Dev Tool",
      features: ["Prettier Support", "Minification", "Multi-Language"],
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
        <div className="flex items-center gap-4 mb-6">
          <div className="size-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
            <Wrench className="size-6" />
          </div>
          <h2 className="text-4xl font-bold">Tools Dashboard</h2>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Explore the standalone tools I've built to solve everyday development and productivity challenges. 
          Each tool is optimized for speed and user experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-[2rem] hover:border-primary/40 transition-all flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-primary/10 rounded-2xl">
                {tool.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400">
                {tool.category}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-3">{tool.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {tool.description}
            </p>

            <div className="space-y-3 mb-8">
              {tool.features.map((feature, j) => (
                <div key={j} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <div className="size-1 bg-primary rounded-full" />
                  {feature}
                </div>
              ))}
            </div>

            <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group">
              Launch Tool <ExternalLink className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
