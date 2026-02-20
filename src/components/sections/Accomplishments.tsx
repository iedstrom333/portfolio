"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { accomplishments } from "@/data/accomplishments";
import { DentilBorder } from "@/components/ui/DentilBorder";

export function Accomplishments() {
  return (
    <section id="accomplishments" className="bg-ivory">
      <DentilBorder />
      <div className="max-w-6xl mx-auto page-pad py-16">
        <SectionHeader title="Honors & Awards" ornament="◆" />

        <div className="dentil-frame p-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {accomplishments.map((a, i) => (
            <motion.div
              key={a.label}
              className="border border-rose-light px-5 py-4 flex items-start gap-3"
              style={{
                background: "linear-gradient(135deg, rgba(245, 232, 226, 0.65) 0%, rgba(253, 248, 244, 0.45) 100%)",
                boxShadow: "inset 2px 2px 0 rgba(253, 248, 244, 0.55), inset -1px -1px 0 rgba(139, 106, 90, 0.12)",
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span
                className="text-rose text-sm mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                {a.ornament}
              </span>
              <div>
                <p
                  className="text-brown-dark text-sm tracking-wide leading-snug"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
                >
                  {a.label}
                </p>
                {a.detail && (
                  <p
                    className="text-brown-muted text-xs mt-0.5 tracking-wide"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {a.detail}
                  </p>
                )}
              </div>
              {a.period && (
                <p
                  className="text-rose-light text-xs ml-auto flex-shrink-0 self-center"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {a.period}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
      <DentilBorder flip />
    </section>
  );
}
