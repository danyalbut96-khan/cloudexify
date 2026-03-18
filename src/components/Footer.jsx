import React from "react";
import { Terminal, Mail, Globe, GitBranch } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-primary/20 py-12 bg-background-light dark:bg-background-dark/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded-md flex items-center justify-center text-white">
            <Terminal className="size-4" />
          </div>
          <span className="font-bold tracking-tight">M.Majid.Khan</span>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © 2026. Created with ❤️ by <span className="text-slate-900 dark:text-white font-semibold">Majid</span>
        </p>

        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <Mail className="size-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <Globe className="size-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <GitBranch className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
