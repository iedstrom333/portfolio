"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DentilBorder } from "@/components/ui/DentilBorder";
import { skillGroups } from "@/data/skills";
import {
  SiPython,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiHuggingface,
  SiUnity,
  SiNumpy,
  SiPandas,
  SiDocker,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiLinux,
  SiReact,
  SiNextdotjs,
  SiFlask,
  SiFastapi,
  SiSpringboot,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import { Code2, Brain, BarChart3, Database, Monitor } from "lucide-react";

// Map icon slugs to components — lucide fallbacks for missing simple-icons
const iconMap: Record<string, React.ReactNode> = {
  python: <SiPython size={20} />,
  csharp: <Code2 size={20} />,         // no SiCsharp in this version
  postgresql: <SiPostgresql size={20} />,
  java: <Code2 size={20} />,            // no SiJava
  javascript: <SiJavascript size={20} />,
  typescript: <SiTypescript size={20} />,
  html5: <SiHtml5 size={20} />,
  cplusplus: <SiCplusplus size={20} />,
  r: <BarChart3 size={20} />,           // no SiR
  tensorflow: <SiTensorflow size={20} />,
  pytorch: <SiPytorch size={20} />,
  scikitlearn: <SiScikitlearn size={20} />,
  opencv: <SiOpencv size={20} />,
  huggingface: <SiHuggingface size={20} />,
  unity: <SiUnity size={20} />,
  numpy: <SiNumpy size={20} />,
  pandas: <SiPandas size={20} />,
  anthropic: <Brain size={20} />,
  docker: <SiDocker size={20} />,
  git: <SiGit size={20} />,
  github: <SiGithub size={20} />,
  amazonaws: <Database size={20} />,    // no SiAmazonwebservices
  googlecloud: <SiGooglecloud size={20} />,
  linux: <SiLinux size={20} />,
  visualstudiocode: <Monitor size={20} />, // no SiVisualstudiocode
  tableau: <BarChart3 size={20} />,    // no SiTableau
  react: <SiReact size={20} />,
  nextdotjs: <SiNextdotjs size={20} />,
  flask: <SiFlask size={20} />,
  fastapi: <SiFastapi size={20} />,
  springboot: <SiSpringboot size={20} />,
  tailwindcss: <SiTailwindcss size={20} />,
};

export function Skills() {
  return (
    <section id="skills" className="bg-ivory">
      <DentilBorder />
      <div className="max-w-6xl mx-auto page-pad py-20">
        <SectionHeader title="Technical Skills" ornament="◆" />

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="dentil-frame p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              {/* Category header — filled label strip */}
              <div
                className="flex items-center gap-4 mb-5 -mx-5 px-5 py-2"
                style={{
                  background: "linear-gradient(to right, rgba(200, 164, 164, 0.25), rgba(232, 213, 207, 0.18) 60%, transparent)",
                  borderBottom: "1px solid rgba(232, 213, 207, 0.7)",
                  borderTop: "1px solid rgba(232, 213, 207, 0.5)",
                }}
              >
                <span className="text-rose text-[10px]" aria-hidden="true">◆</span>
                <p
                  className="text-xs tracking-[0.28em] uppercase text-brown-muted flex-shrink-0"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {group.category}
                </p>
                <div className="flex-1 h-px bg-rose-light" aria-hidden="true" />
                <span className="text-rose-light text-[10px]" aria-hidden="true">◆</span>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 border border-rose-light px-3 py-2 cursor-default"
                    style={{
                      background: "linear-gradient(135deg, rgba(245, 232, 226, 0.65) 0%, rgba(253, 248, 244, 0.4) 100%)",
                      boxShadow: "inset 1px 1px 0 rgba(253, 248, 244, 0.6), inset -1px -1px 0 rgba(139, 106, 90, 0.1)",
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: si * 0.03 }}
                  >
                    <span
                      className="text-rose"
                      aria-hidden="true"
                    >
                      {skill.icon && iconMap[skill.icon] ? (
                        iconMap[skill.icon]
                      ) : (
                        <span className="text-rose text-base">◆</span>
                      )}
                    </span>
                    <span
                      className="text-xs tracking-wider text-brown-muted"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
