"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Sparkles } from "@/components/ui/Sparkles";
import { DentilBorder } from "@/components/ui/DentilBorder";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center dot-grid"
      aria-label="Introduction"
    >
      {/* Corner ornaments */}
      <span aria-hidden="true" style={{ position: "absolute", top: "1.5rem", left: "1.5rem", width: "2rem", height: "2rem", borderTop: "2px solid #c8a4a4", borderLeft: "2px solid #c8a4a4", opacity: 0.55 }} />
      <span aria-hidden="true" style={{ position: "absolute", top: "1.5rem", right: "1.5rem", width: "2rem", height: "2rem", borderTop: "2px solid #c8a4a4", borderRight: "2px solid #c8a4a4", opacity: 0.55 }} />
      <span aria-hidden="true" style={{ position: "absolute", bottom: "3rem", left: "1.5rem", width: "2rem", height: "2rem", borderBottom: "2px solid #c8a4a4", borderLeft: "2px solid #c8a4a4", opacity: 0.55 }} />
      <span aria-hidden="true" style={{ position: "absolute", bottom: "3rem", right: "1.5rem", width: "2rem", height: "2rem", borderBottom: "2px solid #c8a4a4", borderRight: "2px solid #c8a4a4", opacity: 0.55 }} />
      <div className="max-w-6xl mx-auto page-pad pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Left — text in carved panel */}
          <div className="dentil-frame p-8 md:p-10">
            <motion.p
              className="text-rose text-sm tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="sparkle-icon mr-2" aria-hidden="true">✦</span>
              Austin, TX
            </motion.p>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl text-brown-dark leading-none tracking-wider mb-6"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Ina
              <br />
              Edstrom
            </motion.h1>

            <motion.p
              className="text-brown-muted text-sm tracking-[0.2em] uppercase mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              AI Researcher · National Champion · Software Engineer
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              className="text-panel pl-5 pr-4 py-4 mb-10"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p
                className="text-brown-muted leading-relaxed italic mb-2"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "1rem" }}
              >
                &ldquo;The most dangerous phrase in the language is &lsquo;we&rsquo;ve always done it this way.&rsquo;&rdquo;
              </p>
              <cite
                className="text-xs text-rose tracking-widest uppercase not-italic"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                — Rear Admiral Grace Hopper
              </cite>
            </motion.blockquote>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#projects"
                className="bg-rose text-ivory text-sm tracking-widest uppercase px-6 py-3 hover:bg-rose-dark transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="border border-rose text-rose text-sm tracking-widest uppercase px-6 py-3 hover:bg-rose hover:text-ivory transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              {[
                {
                  href: "https://github.com/iedstrom333",
                  icon: <Github size={18} />,
                  label: "GitHub profile",
                },
                {
                  href: "https://linkedin.com/in/ina-edstrom",
                  icon: <Linkedin size={18} />,
                  label: "LinkedIn profile",
                },
                {
                  href: "mailto:edstrom.ina@gmail.com",
                  icon: <Mail size={18} />,
                  label: "Send email",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-brown-muted hover:text-rose transition-all duration-200 hover:-translate-y-0.5"
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — photo inside matching dentil-frame panel */}
          <motion.div
            className="dentil-frame flex flex-col items-center justify-center p-8 gap-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Sparkles className="w-64 h-64 md:w-72 md:h-72 flex-shrink-0" count={6}>
              <div className="w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
                {/* Photo with thick picture-mat frame */}
                <div
                  className="rotate-1 relative flex-shrink-0"
                  style={{ width: "clamp(200px, 16vw + 100px, 256px)", height: "clamp(200px, 16vw + 100px, 256px)" }}
                >
                  <div style={{ position: "absolute", inset: "24px", overflow: "hidden" }}>
                    <Image
                      src="/photo.jpg"
                      alt="Ina Edstrom"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      zIndex: 10,
                      border: "2px solid #c8a4a4",
                      boxShadow: "inset 0 0 0 22px #fdf8f4, inset 0 0 0 24px #c8a4a4",
                    }}
                  />
                  <span aria-hidden="true" style={{ position: "absolute", top: "6px", left: "6px", width: "28px", height: "28px", borderTop: "2px solid #c8a4a4", borderLeft: "2px solid #c8a4a4", zIndex: 11, pointerEvents: "none" }} />
                  <span aria-hidden="true" style={{ position: "absolute", top: "6px", right: "6px", width: "28px", height: "28px", borderTop: "2px solid #c8a4a4", borderRight: "2px solid #c8a4a4", zIndex: 11, pointerEvents: "none" }} />
                  <span aria-hidden="true" style={{ position: "absolute", bottom: "6px", left: "6px", width: "28px", height: "28px", borderBottom: "2px solid #c8a4a4", borderLeft: "2px solid #c8a4a4", zIndex: 11, pointerEvents: "none" }} />
                  <span aria-hidden="true" style={{ position: "absolute", bottom: "6px", right: "6px", width: "28px", height: "28px", borderBottom: "2px solid #c8a4a4", borderRight: "2px solid #c8a4a4", zIndex: 11, pointerEvents: "none" }} />
                </div>
              </div>
            </Sparkles>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-rose-light"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <ChevronDown size={20} />
      </motion.div>

    </section>
  );
}
