"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  ornament?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  ornament = "✦",
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {/* Ornament row — flanked by small diamonds */}
      <motion.div
        className="flex items-center justify-center gap-3 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="text-rose-light text-[10px]">◆</span>
        <span
          className="text-rose text-xs tracking-[0.45em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {ornament}
        </span>
        <span className="text-rose-light text-[10px]">◆</span>
      </motion.div>

      {/* Title row — horizontal rules with diamond terminators */}
      <div className="flex items-center gap-4">
        {align === "center" && (
          <div className="flex-1 flex items-center gap-2 justify-end" aria-hidden="true">
            <motion.div
              className="flex-1 h-px"
              style={{
                transformOrigin: "right",
                background: "linear-gradient(to left, #c8a4a4, #e8d5cf 60%, transparent)",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
            <span className="text-rose text-[10px] flex-shrink-0">◆</span>
          </div>
        )}

        {/* Title with filled background panel */}
        <motion.h2
          className="text-3xl md:text-4xl text-brown-dark tracking-[0.12em] whitespace-nowrap flex-shrink-0"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            backgroundColor: "rgba(232, 213, 207, 0.55)",
            padding: "4px 22px",
            boxShadow:
              "inset 2px 2px 0 rgba(253, 248, 244, 0.6), inset -1px -1px 0 rgba(139, 106, 90, 0.18), 0 2px 10px rgba(61, 43, 31, 0.07)",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h2>

        {/* Right rule with diamond terminator */}
        <div className="flex-1 flex items-center gap-2" aria-hidden="true">
          <span className="text-rose text-[10px] flex-shrink-0">◆</span>
          <motion.div
            className="flex-1 h-px"
            style={{
              transformOrigin: "left",
              background: "linear-gradient(to right, #c8a4a4, #e8d5cf 60%, transparent)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
}
