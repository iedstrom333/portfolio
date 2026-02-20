export type Skill = {
  name: string;
  icon?: string; // simple-icons slug or custom
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "C#", icon: "csharp" },
      { name: "SQL", icon: "postgresql" },
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML/CSS", icon: "html5" },
      { name: "C/C++", icon: "cplusplus" },
      { name: "R", icon: "r" },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "Scikit-Learn", icon: "scikitlearn" },
      { name: "OpenCV", icon: "opencv" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Unity ML", icon: "unity" },
      { name: "NumPy", icon: "numpy" },
      { name: "Pandas", icon: "pandas" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Claude Code", icon: "anthropic" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "AWS", icon: "amazonaws" },
      { name: "Google Cloud", icon: "googlecloud" },
      { name: "Linux", icon: "linux" },
      { name: "VS Code", icon: "visualstudiocode" },
      { name: "Tableau", icon: "tableau" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Flask", icon: "flask" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
];
