"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DentilBorder } from "@/components/ui/DentilBorder";

const stats = [
  {
    value: "4.0",
    unit: "GPA",
    detail: "Master's in Computer Science",
    ornament: "✦",
  },
  {
    value: "National",
    unit: "Champion",
    detail: "AAU Junior Olympic Pole Vault",
    ornament: "◆",
  },
  {
    value: "IEEE",
    unit: "Published",
    detail: "2022 SSCI Symposium",
    ornament: "✦",
  },
];

export function About() {
  return (
    <section id="about" className="bg-surface/40">
      <DentilBorder />
      <div className="max-w-6xl mx-auto page-pad py-20">
        <SectionHeader title="About Me" ornament="✦" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Text — inlaid carved panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="dentil-frame p-8"
          >
            <p
              className="text-brown-dark leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "1.25rem" }}
            >
              I trained an AI to pole vault — and it discovered a technique nobody had tried before.
            </p>
            <p
              className="text-brown-muted leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              That&apos;s what I do: combine technical rigor with genuine curiosity to find answers no one expected.
              As a machine learning researcher and national champion athlete, I approach every problem with the
              same mindset — push past the conventional, be precise, and keep going until something clicks.
            </p>
            <p
              className="text-brown-muted leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              My thesis used Proximal Policy Optimization to teach a virtual agent to pole vault from scratch —
              no prior sport knowledge, no predefined technique. It found its own way, ultimately clearing
              6.76 meters with a side-swinging method never seen before. That result was 50 cm above the
              current world record.
            </p>
            <p
              className="text-brown-muted leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              I hold a Master&apos;s and Bachelor&apos;s in Computer Science from the University of South Alabama,
              a published paper in the 2022 IEEE Symposium Series on Computational Intelligence, and years of
              hands-on research in machine learning for both government and academic projects.
            </p>
            <p
              className="text-brown-muted leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Outside of research, I&apos;m a Swedish ACTFL-certified speaker, a lifelong athlete, and someone
              who believes the best solutions come from asking questions nobody else thought to ask.
            </p>
          </motion.div>

          {/* Stat cards — outer dentil-frame panel fills the full column height */}
          <motion.div
            className="dentil-frame p-8 flex flex-col gap-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.unit}
                className="flex-1 flex flex-col justify-center py-6 px-2"
                style={{
                  borderBottom: i < stats.length - 1 ? "1px solid rgba(232, 213, 207, 0.7)" : undefined,
                  background: i % 2 === 0
                    ? "linear-gradient(to right, rgba(232, 213, 207, 0.35), transparent 70%)"
                    : "transparent",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <p
                  className="text-rose text-xs tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                  aria-hidden="true"
                >
                  {stat.ornament}
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="text-5xl text-brown-dark"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-brown text-sm tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {stat.unit}
                  </span>
                </div>
                <p
                  className="text-brown-muted text-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <DentilBorder flip />
    </section>
  );
}
