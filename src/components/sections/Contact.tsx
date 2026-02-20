"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sparkles } from "@/components/ui/Sparkles";
import { DentilBorder } from "@/components/ui/DentilBorder";

const EMAIL = "edstrom.ina@gmail.com";

const socials = [
  {
    href: `mailto:${EMAIL}`,
    icon: <Mail size={24} />,
    label: "Email",
    value: EMAIL,
  },
  {
    href: "https://linkedin.com/in/ina-edstrom",
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    value: "linkedin.com/in/ina-edstrom",
  },
  {
    href: "https://github.com/iedstrom333",
    icon: <Github size={24} />,
    label: "GitHub",
    value: "github.com/iedstrom333",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="bg-ivory">
      <DentilBorder />
      <div className="max-w-6xl mx-auto page-pad py-20">
        <Sparkles className="rounded-none" count={4}>
          <div className="py-10 dentil-frame px-8">
            <SectionHeader title="Let's Connect" ornament="✦" />

            <motion.p
              className="text-center text-brown-muted mb-12 max-w-md mx-auto"
              style={{ fontFamily: "var(--font-inter)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Open to new opportunities in Austin, TX — and always up for interesting conversations.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
              {socials.map((social, i) => (
                <motion.div
                  key={social.label}
                  className="w-full sm:w-auto"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {social.label === "Email" ? (
                    <div className="flex gap-0 border border-rose-light">
                      <a
                        href={social.href}
                        className="flex items-center gap-3 px-5 py-4 text-brown-muted hover:text-rose hover:bg-surface/50 transition-all flex-1"
                        aria-label={`Send email to ${EMAIL}`}
                      >
                        <span className="text-rose" aria-hidden="true">
                          {social.icon}
                        </span>
                        <div>
                          <p
                            className="text-xs text-rose tracking-widest uppercase"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            {social.label}
                          </p>
                          <p
                            className="text-sm text-brown-dark"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            {social.value}
                          </p>
                        </div>
                      </a>
                      <button
                        onClick={copyEmail}
                        className="px-3 border-l border-rose-light text-brown-muted hover:text-rose hover:bg-surface/50 transition-colors"
                        aria-label={copied ? "Email copied!" : "Copy email address"}
                        title={copied ? "Copied!" : "Copy email"}
                      >
                        {copied ? (
                          <Check size={14} className="text-rose" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  ) : (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-4 border border-rose-light hover:border-rose hover:bg-surface/50 transition-all group w-full sm:w-auto"
                      aria-label={`${social.label} profile`}
                    >
                      <span
                        className="text-rose group-hover:scale-110 transition-transform"
                        aria-hidden="true"
                      >
                        {social.icon}
                      </span>
                      <div>
                        <p
                          className="text-xs text-rose tracking-widest uppercase"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {social.label}
                        </p>
                        <p
                          className="text-sm text-brown-dark"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {social.value}
                        </p>
                      </div>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Footer note */}
            <motion.p
              className="text-center text-xs text-rose-light mt-16 tracking-widest"
              style={{ fontFamily: "var(--font-inter)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              ✦ Built with Next.js · TypeScript · Tailwind CSS ✦
            </motion.p>
          </div>
        </Sparkles>
      </div>
      <DentilBorder flip />
    </section>
  );
}
