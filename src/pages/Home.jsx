import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Star, Users, Briefcase, Zap, Globe, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const words = ["build APIs", "create AI tools", "develop modern web apps"];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative pt-20 pb-32 flex flex-col items-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open for collaboration
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          Hi, I'm <span className="text-gradient">M. Majid Khan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="h-12 md:h-16 flex items-center justify-center text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-300"
        >
          <span className="mr-3">I</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-primary underline decoration-primary/30 underline-offset-8"
            >
              {words[textIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl"
        >
          Software Engineer & AI Developer dedicated to building high-performance 
          SaaS tools and intuitive digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link to="/projects">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all flex items-center gap-3 group"
            >
              View My Work <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass-premium rounded-2xl font-black text-lg hover:bg-white/10 transition-all"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Featured Illustration/Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-32 w-full relative"
      >
        <div className="absolute left-1/2 -translate-x-1/2 -top-40 size-[600px] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="glass-premium rounded-[3rem] p-1 shadow-2xl relative">
          <div className="bg-background-dark/20 rounded-[2.9rem] p-8 md:p-16 aspect-[21/9] w-full flex items-center justify-center overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20">
              {[
                { label: "API Design", icon: <Globe className="size-12 text-primary" /> },
                { label: "AI Models", icon: <Cpu className="size-12 text-indigo-500" /> },
                { label: "SaaS Ops", icon: <Zap className="size-12 text-purple-500" /> },
                { label: "Fast Dev", icon: <Terminal className="size-12 text-slate-400" /> },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="size-24 rounded-3xl glass-premium flex items-center justify-center p-6 shadow-xl">
                    {item.icon}
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest opacity-60">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="w-full py-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "SaaS Tools Built", value: "12", icon: <Zap className="text-yellow-500" /> },
          { label: "Commits in 2024", value: "1.4k+", icon: <Briefcase className="text-green-500" /> },
          { label: "Performance Score", value: "99/100", icon: <Star className="text-primary" /> },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="glass-premium p-10 rounded-3xl"
          >
            <div className="flex items-center gap-4 mb-4">
              {stat.icon}
              <span className="text-sm font-bold uppercase tracking-widest text-slate-500">{stat.label}</span>
            </div>
            <div className="text-5xl font-black">{stat.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
