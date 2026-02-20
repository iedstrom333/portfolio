export type Accomplishment = {
  label: string;
  detail?: string;
  ornament: "✦" | "◆" | "✧";
  period?: string;
};

export const accomplishments: Accomplishment[] = [
  {
    label: "National Champion",
    detail: "AAU Junior Olympic Female Pole Vault",
    ornament: "✦",
    period: "Aug 2017",
  },
  {
    label: "4.0 GPA",
    detail: "Master's in Computer Science",
    ornament: "◆",
    period: "2024",
  },
  {
    label: "Published — IEEE SSCI 2022",
    detail: "Counterfeit Circuit Detection",
    ornament: "✦",
    period: "Oct 2022",
  },
  {
    label: "Judge's Favorite",
    detail: "TAMU Datathon 2025 · 4th Place",
    ornament: "◆",
    period: "Nov 2025",
  },
  {
    label: "Graduate Student Spotlight",
    detail: "School of Computing",
    ornament: "✦",
    period: "Mar 2024",
  },
  {
    label: "Henderson Scholarship",
    detail: "Upcoming Senior of the Year",
    ornament: "◆",
    period: "Apr 2022",
  },
  {
    label: "Upsilon Pi Epsilon",
    detail: "Honor Society",
    ornament: "✦",
    period: "Apr 2022",
  },
  {
    label: "3rd Place — Sunbelt Conference",
    detail: "Women's Indoor Pole Vault",
    ornament: "◆",
    period: "Mar 2021",
  },
  {
    label: "Swedish ACTFL Certified",
    detail: "Writing & Oral Proficiency",
    ornament: "✦",
    period: "Oct 2016",
  },
];
