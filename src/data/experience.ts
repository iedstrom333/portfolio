export type ExperienceEntry = {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: "work" | "education";
  bullets: string[];
  highlights?: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    id: "amazon",
    title: "Amazon Delivery Associate",
    organization: "SMRT LogisTX INC.",
    location: "Austin, TX",
    period: "Feb 2025 – Oct 2025",
    type: "work",
    bullets: [
      "Delivered over 20,000 Amazon packages across North Austin with 92% route completion and safety compliance",
      "Received 500+ positive customer reviews for timely delivery and above-and-beyond service",
      "Led 12 rescues on under-performing drivers to improve team completion time",
    ],
  },
  {
    id: "ml-researcher",
    title: "Machine Learning Graduate Researcher",
    organization: "Department of Defense Project — University of South Alabama",
    location: "Mobile, AL",
    period: "Sep 2022 – Dec 2024",
    type: "work",
    bullets: [
      "Implemented a convolutional neural network with TensorFlow to classify video frames",
      "Developed a video classification method with Python to classify based on highest percent of classified frames",
      "Increased video classification accuracy from binary to multi-category by 33%",
    ],
  },
  {
    id: "automation-researcher",
    title: "Automation Researcher",
    organization: "Counterfeit Chip Detection Project — University of South Alabama",
    location: "Mobile, AL",
    period: "Sep 2021 – Jul 2022",
    type: "work",
    bullets: [
      "Improved data recording efficiency by 99% by automating data collection and visualization in Python",
      "Reduced voltage measurement variability by 80% for 12 Intel and Yamaha circuit combinations",
      "Reduced temperature variability by 87% by developing a safe automated system for incubator use",
      "Trained the team on the automated test environment, improving experiment speed by 8.5×",
      "Published paper — 2022 IEEE Symposium Series on Computational Intelligence",
    ],
  },
];

export const education: ExperienceEntry[] = [
  {
    id: "ms-cs",
    title: "Master of Science in Computer Science",
    organization: "University of South Alabama",
    location: "Mobile, AL",
    period: "2023 – 2024",
    type: "education",
    bullets: ["4.00 GPA", "Thesis: AI-Driven Sport Technique — Pole Vaulting with PPO"],
    highlights: ["4.00 GPA"],
  },
  {
    id: "bs-cs",
    title: "Bachelor of Science in Computer Science",
    organization: "University of South Alabama",
    location: "Mobile, AL",
    period: "2019 – 2023",
    type: "education",
    bullets: [
      "3.91 GPA",
      "Minor in Mathematics",
      "Certification in Artificial Intelligence",
    ],
    highlights: ["3.91 GPA"],
  },
];
