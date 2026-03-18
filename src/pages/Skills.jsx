import React from "react";
import { motion } from "framer-motion";
import { Code, Bot, Globe, Shield } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="text-primary" />,
      skills: [
        { name: "JavaScript / TypeScript", level: 95 },
        { name: "Python", level: 90 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 },
      ],
    },
    {
      title: "AI / Tools",
      icon: <Bot className="text-primary" />,
      skills: [
        { name: "OpenAI / Anthropic APIs", level: 95 },
        { name: "LangChain", level: 85 },
        { name: "Vector Databases (Pinecone)", level: 80 },
        { name: "TensorFlow / PyTorch", level: 70 },
      ],
    },
    {
      title: "Web Development",
      icon: <Globe className="text-primary" />,
      skills: [
        { name: "React / Next.js", level: 98 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Node.js / FastAPI", level: 92 },
        { name: "PostgreSQL / MongoDB", level: 88 },
      ],
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
        <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          My expertise spans across the entire full-stack ecosystem, with a deep focus 
          on modern web technologies and AI integration.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            <div className="space-y-6">
              {category.skills.map((skill, j) => (
                <div key={j}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 + j * 0.05 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
