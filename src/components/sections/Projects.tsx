"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { DentilBorder } from "@/components/ui/DentilBorder";
import {
  featuredProjects,
  nonFeaturedProjects,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

const filterOptions: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "AI / ML", value: "ai-ml" },
  { label: "Web", value: "web" },
  { label: "Data", value: "data" },
  { label: "Systems", value: "systems" },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? nonFeaturedProjects
      : nonFeaturedProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-surface/30">
      <DentilBorder />
      <div className="max-w-6xl mx-auto page-pad py-20">
        <SectionHeader title="Projects" ornament="✦" />

        {/* Featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} featured index={i} />
          ))}
        </div>

        {/* All projects toggle */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose border border-rose px-6 py-2.5 hover:bg-rose hover:text-ivory transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
            aria-expanded={showAll}
          >
            {showAll ? "Hide" : "All Projects"}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            >
              <ChevronDown size={14} />
            </motion.span>
          </button>
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              {/* Filter tabs */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {filterOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setActiveFilter(opt.value)}
                    className={cn(
                      "text-xs tracking-widest uppercase px-4 py-1.5 border transition-colors",
                      activeFilter === opt.value
                        ? "bg-rose text-ivory border-rose"
                        : "text-brown-muted border-rose-light hover:border-rose hover:text-rose"
                    )}
                    style={{ fontFamily: "var(--font-inter)" }}
                    aria-pressed={activeFilter === opt.value}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProjects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <p
                  className="text-center text-brown-muted text-sm py-8"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  No projects in this category.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <DentilBorder flip />
    </section>
  );
}
