"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DentilBorder } from "@/components/ui/DentilBorder";
import { experiences, education } from "@/data/experience";

function TimelineEntry({
  entry,
  index,
}: {
  entry: (typeof experiences)[0];
  index: number;
}) {
  return (
    <motion.div
      className="relative pl-8 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-rose border-2 border-ivory"
        aria-hidden="true"
      />
      {/* Timeline line — hidden for last item */}
      <div
        className="absolute left-[3px] top-3.5 bottom-0 w-px bg-rose-light"
        aria-hidden="true"
      />

      <div
        className="border-l-2 border-rose pl-5 py-3 pr-3"
        style={{
          background: "linear-gradient(to right, rgba(232, 213, 207, 0.5) 0%, rgba(245, 232, 226, 0.32) 40%, transparent 100%)",
          boxShadow: "inset 3px 0 8px rgba(139, 106, 90, 0.07)",
        }}
      >
        <p
          className="text-xs text-rose tracking-widest uppercase mb-1"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {entry.period}
        </p>
        <h3
          className="text-xl text-brown-dark mb-0.5 leading-snug"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
        >
          {entry.title}
        </h3>
        <p
          className="text-brown-muted text-sm mb-3 tracking-wide"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {entry.organization} · {entry.location}
        </p>
        <ul className="space-y-1.5">
          {entry.bullets.map((bullet) => (
            <li
              key={bullet}
              className="text-sm text-brown-muted leading-relaxed flex gap-2"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="text-rose flex-shrink-0 mt-0.5 text-xs" aria-hidden="true">
                ◆
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-surface/30">
      <DentilBorder />
      <div className="max-w-6xl mx-auto page-pad py-20">
        <SectionHeader title="Experience" ornament="✦" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work experience */}
          <div className="dentil-frame p-6 flex flex-col">
            <div
              className="flex items-center gap-3 mb-8 px-4 py-2 -mx-6"
              aria-hidden="true"
              style={{
                background: "linear-gradient(to right, rgba(200, 164, 164, 0.28), rgba(232, 213, 207, 0.18) 60%, transparent)",
                borderLeft: "3px solid #c8a4a4",
                borderTop: "1px solid rgba(232, 213, 207, 0.6)",
                borderBottom: "1px solid rgba(232, 213, 207, 0.6)",
                boxShadow: "inset 3px 0 8px rgba(139, 106, 90, 0.07)",
              }}
            >
              <span className="text-rose text-[10px]">◆</span>
              <p className="text-xs tracking-[0.3em] uppercase text-brown-muted flex-shrink-0" style={{ fontFamily: "var(--font-inter)" }}>Work</p>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#e8d5cf" }} />
              <span className="text-rose-light text-[10px]">◆</span>
            </div>
            <div className="relative flex-1">
              {experiences.map((entry, i) => (
                <TimelineEntry key={entry.id} entry={entry} index={i} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="dentil-frame p-6 flex flex-col">
            <div
              className="flex items-center gap-3 mb-8 px-4 py-2 -mx-6"
              aria-hidden="true"
              style={{
                background: "linear-gradient(to right, rgba(200, 164, 164, 0.28), rgba(232, 213, 207, 0.18) 60%, transparent)",
                borderLeft: "3px solid #c8a4a4",
                borderTop: "1px solid rgba(232, 213, 207, 0.6)",
                borderBottom: "1px solid rgba(232, 213, 207, 0.6)",
                boxShadow: "inset 3px 0 8px rgba(139, 106, 90, 0.07)",
              }}
            >
              <span className="text-rose text-[10px]">◆</span>
              <p className="text-xs tracking-[0.3em] uppercase text-brown-muted flex-shrink-0" style={{ fontFamily: "var(--font-inter)" }}>Education</p>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#e8d5cf" }} />
              <span className="text-rose-light text-[10px]">◆</span>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  className="text-panel p-6 flex-1"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p
                    className="text-xs text-rose tracking-widest uppercase mb-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {edu.period}
                  </p>
                  <h3
                    className="text-xl text-brown-dark mb-1 leading-snug"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                  >
                    {edu.title}
                  </h3>
                  <p
                    className="text-brown-muted text-sm mb-3 tracking-wide"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {edu.organization}
                  </p>
                  <ul className="space-y-1">
                    {edu.bullets.map((b) => (
                      <li key={b} className="flex gap-2 items-center">
                        <span
                          className="text-rose text-xs flex-shrink-0"
                          aria-hidden="true"
                        >
                          {edu.highlights?.includes(b) ? "✦" : "◆"}
                        </span>
                        <span
                          className={`text-sm ${
                            edu.highlights?.includes(b)
                              ? "text-brown-dark font-medium"
                              : "text-brown-muted"
                          }`}
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
