"use client";

import { ExternalLink, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

const categoryColors: Record<string, string> = {
  "ai-ml": "#c8a4a4",
  web: "#8b6a5a",
  data: "#d4af8a",
  systems: "#9b7b70",
};

const highlightStyles: Record<string, string> = {
  thesis: "bg-rose-light text-brown border border-rose",
  publication: "bg-champagne/30 text-brown border border-champagne",
  award: "bg-surface text-rose border border-rose",
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
}

export function ProjectCard({ project, featured = false, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      className={cn(
        "transition-all duration-300 group relative overflow-hidden flex flex-col",
        featured
          ? "p-8 dentil-frame"
          : "p-6 border border-rose-light hover:border-rose"
      )}
      style={featured ? {} : {
        background: "linear-gradient(135deg, rgba(245, 232, 226, 0.55) 0%, rgba(253, 248, 244, 0.35) 100%)",
        boxShadow: "inset 2px 2px 0 rgba(253, 248, 244, 0.6), inset -1px -1px 0 rgba(139, 106, 90, 0.1)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      {/* Top category stripe — thicker, more visible */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "3px",
          background: `linear-gradient(to right, ${categoryColors[project.category]}, ${categoryColors[project.category]}88)`,
          boxShadow: `0 1px 4px ${categoryColors[project.category]}44`,
        }}
        aria-hidden="true"
      />

      {/* Highlight badge */}
      {project.highlight && project.highlightLabel && (
        <span
          className={cn(
            "inline-block text-xs tracking-widest uppercase px-2.5 py-1 mb-4 self-start",
            highlightStyles[project.highlight]
          )}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {project.highlightLabel}
        </span>
      )}

      {/* Period */}
      {project.period && (
        <p
          className="text-xs text-brown-muted tracking-wider mb-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {project.period}
        </p>
      )}

      {/* Title */}
      <h3
        className={cn(
          "text-brown-dark leading-tight mb-3",
          featured ? "text-2xl md:text-3xl" : "text-xl"
        )}
        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="text-brown-muted text-sm leading-relaxed mb-5 flex-1"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {project.shortDescription}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-brown-muted border border-rose-light px-2 py-0.5 tracking-wide"
            style={{
              fontFamily: "var(--font-inter)",
              background: "rgba(232, 213, 207, 0.35)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.links && (
        <div className="flex gap-3 mt-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-rose hover:text-brown transition-colors tracking-wider uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={14} aria-hidden="true" />
              GitHub
            </a>
          )}
          {project.links.paper && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-rose hover:text-brown transition-colors tracking-wider uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
              aria-label={`Paper for ${project.title}`}
            >
              <FileText size={14} aria-hidden="true" />
              Paper
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-rose hover:text-brown transition-colors tracking-wider uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={14} aria-hidden="true" />
              Demo
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
