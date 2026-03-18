import React from "react";
import { motion } from "framer-motion";
import { Calendar, Award, GraduationCap } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "TechNexus Solutions",
      description: "Leading development of cloud-native SaaS platforms and AI integrations.",
      icon: <Award className="text-primary" />,
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Innovate AI",
      description: "Focused on building responsive web applications and scalable backend APIs.",
      icon: <Briefcase className="text-primary" />,
    },
    {
      year: "2018 - 2021",
      title: "Bachelor of Computer Science",
      company: "Stanford University",
      description: "Specialized in Artificial Intelligence and Software Engineering.",
      icon: <GraduationCap className="text-primary" />,
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
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          I'm a passionate developer with a knack for creating elegant solutions to complex problems. 
          With over 6 years of experience in the industry, I've worked on everything from small startup MVPs 
          to large-scale enterprise systems.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          My goal is to build software that is not only functional but also provides a premium user experience. 
          I believe that the bridge between engineering and design is where the most impactful products are born.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Calendar className="text-primary" /> My Journey
          </h3>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-slate-200 dark:border-primary/20"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 size-4 bg-primary rounded-full border-4 border-background-light dark:border-background-dark"></div>
                <p className="text-sm font-bold text-primary mb-1">{item.year}</p>
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-slate-500 dark:text-slate-500 font-medium mb-3">{item.company}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Facts / Info Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl h-fit sticky top-32"
        >
          <div className="size-20 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
            <Award className="size-10" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Values & Approach</h3>
          <ul className="space-y-4">
            {[
              "Performance-first mindset",
              "User-centric design focus",
              "Scalable architecture patterns",
              "Continuous learning & growth",
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <div className="size-1.5 bg-primary rounded-full" />
                {text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

const Briefcase = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

export default About;
