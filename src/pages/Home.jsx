import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Star, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative pt-20 pb-32 flex flex-col items-center text-center">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Available for new projects
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent"
      >
        Hi, I'm Anon Khan
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
      >
        Developer & SaaS Founder creating high-performance digital experiences. 
        I bridge the gap between complex engineering and intuitive design.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
      >
        <Link to="/projects">
          <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/30 flex items-center gap-2">
            View Projects <ArrowRight className="size-5" />
          </button>
        </Link>
        <Link to="/contact">
          <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Contact Me
          </button>
        </Link>
      </motion.div>

      {/* Hero Visual Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-20 w-full relative"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="glass-card rounded-2xl p-4 md:p-8 aspect-video w-full max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-8 bg-slate-200/50 dark:bg-slate-800/50 rounded-lg animate-pulse"></div>
            <div className="col-span-4 flex flex-col gap-4">
              <div className="h-1/3 bg-primary/20 rounded-lg animate-pulse"></div>
              <div className="h-2/3 bg-slate-200/50 dark:bg-slate-800/50 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="w-full py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Projects Completed", value: "40+", icon: <Star className="text-primary" /> },
          { label: "Happy Clients", value: "25+", icon: <Users className="text-primary" /> },
          { label: "Years Experience", value: "6+", icon: <Briefcase className="text-primary" /> },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-2xl group hover:border-primary/40 transition-colors text-left"
          >
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-2 uppercase text-xs tracking-widest">{stat.label}</p>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-black text-primary">{stat.value}</span>
              <span className="mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{stat.icon}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
