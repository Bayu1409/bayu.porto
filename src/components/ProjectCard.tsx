import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import type { Project } from "../types";

const themeColors = [
  {
    main: "bg-indigo-500",
    text: "text-indigo-600 dark:text-indigo-400",
    bgLight: "bg-indigo-50 dark:bg-indigo-900/20",
    check: "text-indigo-500",
    shadow: "shadow-indigo-500/20",
  },
  {
    main: "bg-blue-900 dark:bg-blue-700",
    text: "text-blue-900 dark:text-blue-400",
    bgLight: "bg-blue-50 dark:bg-blue-900/20",
    check: "text-blue-800 dark:text-blue-500",
    shadow: "shadow-blue-900/20",
  },
  {
    main: "bg-rose-500",
    text: "text-rose-600 dark:text-rose-400",
    bgLight: "bg-rose-50 dark:bg-rose-900/20",
    check: "text-rose-500",
    shadow: "shadow-rose-500/20",
  },
];

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const theme = themeColors[index % themeColors.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`relative group bg-white dark:bg-blueprint-950 border border-blueprint-line/10 dark:border-blueprint-line/20 rounded-2xl flex flex-col overflow-hidden shadow-xl ${theme.shadow} hover:-translate-y-2 transition-all duration-300`}
    >
      {/* Top Header Section */}
      <div className="flex justify-between items-center pt-8 pb-6 pl-8 pr-0">
        <h3 className={`text-3xl font-display font-bold ${theme.text}`}>
          0{index + 1}<span className="text-sm font-normal text-blueprint-line/60 dark:text-blueprint-line ml-1">/ {project.id}</span>
        </h3>
        
        {/* Category Pill touching right edge */}
        <div className={`${theme.main} text-white font-mono text-xs font-bold tracking-widest uppercase rounded-l-full pl-6 pr-4 py-2`}>
          {project.category}
        </div>
      </div>

      <div className="px-8 pb-8 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-blueprint-950 dark:text-white mb-3">
          {project.title}
        </h4>
        <p className="text-sm text-blueprint-900/70 dark:text-blueprint-paper/70 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Features List */}
        <ul className="space-y-4 mb-8 text-sm text-blueprint-900/80 dark:text-blueprint-paper/80 font-medium">
          <li className="flex items-start gap-3">
            <FiCheckCircle className={`mt-0.5 flex-shrink-0 ${theme.check}`} size={16} />
            <span className="leading-tight"><strong className="font-semibold text-blueprint-950 dark:text-white">Solusi:</strong> {project.solution}</span>
          </li>
          <li className="flex items-start gap-3">
            <FiCheckCircle className={`mt-0.5 flex-shrink-0 ${theme.check}`} size={16} />
            <span className="leading-tight"><strong className="font-semibold text-blueprint-950 dark:text-white">Hasil:</strong> {project.result}</span>
          </li>
          <li className="flex items-start gap-3">
            <FiCheckCircle className={`mt-0.5 flex-shrink-0 ${theme.check}`} size={16} />
            <span className="leading-tight"><strong className="font-semibold text-blueprint-950 dark:text-white">Tech:</strong> {project.techStack.join(", ")}</span>
          </li>
        </ul>

        {/* Bottom Button */}
        <div className="mt-auto">
          <a
            href={project.demoUrl || project.repoUrl || "#"}
            className={`block w-full text-center py-4 rounded-xl font-bold text-white text-sm tracking-wide ${theme.main} hover:opacity-90 transition-opacity`}
          >
            LIHAT DETAIL
          </a>
        </div>
      </div>
    </motion.article>
  );
}
