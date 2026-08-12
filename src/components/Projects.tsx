import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { SectionHeading } from "./About";
import type { Project } from "../types";

const filters: (Project["category"] | "Semua")[] = ["Semua", "Web App", "Landing Page", "Mobile", "Lainnya"];

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("Semua");

  const filtered = useMemo(
    () => (active === "Semua" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="bg-blueprint-paper dark:bg-blueprint-900 py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Sheet 04" title="Proyek yang Pernah Dikerjakan" />

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-mono text-xs px-4 py-2 border transition-colors ${
                active === f
                  ? "border-pencil bg-pencil text-blueprint-950"
                  : "border-blueprint-line/40 text-blueprint-900/70 dark:text-blueprint-paper/70 hover:border-pencil hover:text-pencil"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        ) : (
          <p className="font-mono text-sm text-blueprint-line">Belum ada proyek pada kategori ini.</p>
        )}
      </div>
    </section>
  );
}
