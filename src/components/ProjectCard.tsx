import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "../types";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group bg-blueprint-paper dark:bg-blueprint-900 border-2 border-pencil p-5 flex flex-col shadow-[6px_6px_0px_0px_rgba(255,107,53,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(255,107,53,1)] transition-all duration-300 rounded-xl"
    >
      <div className="aspect-video w-full bg-blueprint-900/5 dark:bg-blueprint-paper/5 border-2 border-pencil mb-4 grid place-items-center overflow-hidden rounded-lg">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${project.title.replace(/\s+/g, '+')}&size=512&background=0D1B2A&color=E0E1DD`;
            }}
          />
        ) : (
          <span className="font-mono text-[11px] text-blueprint-line uppercase tracking-widest">
            Screenshot — {project.category}
          </span>
        )}
      </div>

      <p className="font-mono text-[11px] text-pencil uppercase tracking-widest mb-1">{project.category}</p>
      <h3 className="font-display font-semibold text-lg text-blueprint-900 dark:text-blueprint-paper mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-blueprint-900/70 dark:text-blueprint-paper/70 mb-3">{project.description}</p>

      <div className="text-xs text-blueprint-900/60 dark:text-blueprint-paper/60 space-y-1 mb-4">
        <p><span className="text-pencil font-mono">masalah</span> — {project.problem}</p>
        <p><span className="text-pencil font-mono">solusi</span> — {project.solution}</p>
        <p><span className="text-pencil font-mono">hasil</span> — {project.result}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] px-2 py-1 border border-blueprint-line/40 text-blueprint-line"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-4 font-mono text-xs">
        {project.demoUrl && (
          <a href={project.demoUrl} className="flex items-center gap-1.5 text-blueprint-900 dark:text-blueprint-paper hover:text-pencil transition-colors">
            <FiExternalLink /> Demo
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} className="flex items-center gap-1.5 text-blueprint-900 dark:text-blueprint-paper hover:text-pencil transition-colors">
            <FiGithub /> Repo
          </a>
        )}
      </div>
    </motion.article>
  );
}
