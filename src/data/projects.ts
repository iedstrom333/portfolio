export type ProjectCategory = "ai-ml" | "web" | "data" | "systems";
export type ProjectHighlight = "thesis" | "publication" | "award";

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  category: ProjectCategory;
  highlight?: ProjectHighlight;
  highlightLabel?: string;
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  featured: boolean;
  period?: string;
};

export const projects: Project[] = [
  {
    id: "pole-vault-thesis",
    title: "AI-Driven Sport Technique: Pole Vaulting with PPO",
    shortDescription:
      "Trained a Unity ML-Agent to pole vault from scratch using Proximal Policy Optimization, discovering a novel side-swinging technique and clearing heights up to 6.76 m — breaking the world record by 50 cm.",
    fullDescription:
      "Applied Proximal Policy Optimization (PPO) to a custom Unity ML-Agent that learned to pole vault without any prior knowledge of the sport. The agent trained in a competition-style environment with progressively increasing bar heights, ultimately discovering a new side-swinging technique. The reward system encouraged higher body position and clearing the crossbar while penalizing failures. The model achieved consistent clearances up to 6.30 m and a maximum of 6.76 m.",
    tags: ["PPO", "Unity ML-Agents", "C#", "Python", "PyTorch", "Reinforcement Learning"],
    category: "ai-ml",
    highlight: "thesis",
    highlightLabel: "Master's Thesis",
    featured: true,
    period: "Jun 2023 – Oct 2024",
  },
  {
    id: "tamu-datathon",
    title: "TAMU Datathon 2025 — HEB Product Search",
    shortDescription:
      "Built a multimodal product search system using RAG with dense, sparse, and CLIP vectors. Placed 4th overall and won Judge's Favorite at TAMU Datathon 2025.",
    fullDescription:
      "Developed a multimodal search system for HEB's product catalog using RAG techniques combining dense vector embeddings (sentence transformers), sparse vectors (ngram encodings), and CLIP image-text vectors. Applied BGE reranking models from Hugging Face for semantic meaning. Orchestrated via Java SpringBoot with Python FastAPI endpoints serving the embedding models locally.",
    tags: ["Java", "SpringBoot", "Python", "FastAPI", "PostgreSQL", "Docker", "RAG", "CLIP", "Hugging Face"],
    category: "ai-ml",
    highlight: "award",
    highlightLabel: "Judge's Favorite · 4th Place",
    links: {
      github: "https://github.com/iedstrom333",
    },
    featured: true,
    period: "Nov 2025",
  },
  {
    id: "counterfeit-circuit",
    title: "Multi-Objective Counterfeit Circuit Detection",
    shortDescription:
      "Published IEEE paper proving temperature can detect counterfeit circuits. Automated data collection improving experiment speed by 8.5× and reducing measurement variability by 80–87%.",
    fullDescription:
      "Created an automated, stable test environment to collect thermal and voltage data across 12 Intel and Yamaha circuit combinations. Improved data recording efficiency by 99% through Python automation. Reduced voltage variability by 80% and temperature variability by 87%. Results proved that temperature signatures can reliably identify counterfeit circuits. Published at the 2022 IEEE Symposium Series on Computational Intelligence.",
    tags: ["Python", "IEEE Published", "Circuit Testing", "Data Automation"],
    category: "ai-ml",
    highlight: "publication",
    highlightLabel: "Published — IEEE SSCI 2022",
    featured: true,
    period: "Sep 2021 – Jul 2022",
  },
  {
    id: "dod-video-classification",
    title: "ML Video Classification (DoD Project)",
    shortDescription:
      "Increased video classification accuracy from binary to multi-category by 33% using a TensorFlow CNN and a Python frame-voting classification method.",
    fullDescription:
      "Implemented a convolutional neural network with TensorFlow to classify individual video frames, then developed a frame-voting method that classifies an entire video based on the highest percentage of classified frames. Part of a Department of Defense research project.",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV", "NumPy"],
    category: "ai-ml",
    featured: false,
    period: "Sep 2022 – Dec 2024",
  },
  {
    id: "ai-games",
    title: "AI Games — Deep Q Network",
    shortDescription:
      "Built Deep Q-Network AI bots for Tic-Tac-Toe and Tetris in Python using PyTorch.",
    fullDescription:
      "Implemented a Deep Q neural network in Python with PyTorch to create AI bots capable of playing Tic-Tac-Toe and Tetris. The bots learned optimal strategies through reinforcement learning without explicit programming of game rules.",
    tags: ["Python", "PyTorch", "Deep Q-Network", "Reinforcement Learning"],
    category: "ai-ml",
    featured: false,
  },
  {
    id: "swedish-tweet-classification",
    title: "Swedish Political Tweet Classification",
    shortDescription:
      "Built a political tweet classification pipeline using TF-IDF, Random Forest, and Naive Bayes on Swedish-language data with Seaborn visualizations.",
    fullDescription:
      "Collected and preprocessed Swedish-language tweets, then built a classification pipeline using TF-IDF vectorization with Random Forest and Naive Bayes models to classify political affiliation. Visualized results and model performance using Seaborn.",
    tags: ["Python", "Scikit-Learn", "TF-IDF", "Jupyter", "Seaborn", "NLP"],
    category: "ai-ml",
    featured: false,
  },
  {
    id: "chicago-bus-tracker",
    title: "Chicago Bus Tracker Website",
    shortDescription:
      "Full-stack bus tracker website showing live bus locations on Google Maps, deployed on Google Cloud with a Python Flask server and JavaScript client.",
    fullDescription:
      "Developed a public-facing website for tracking Chicago Transit Authority buses in real time. The Python Flask backend integrates the Chicago Bus Tracker API and Google Maps API. The JavaScript client renders the route and current bus position updated every minute.",
    tags: ["Python", "Flask", "Google Cloud", "JavaScript", "Google Maps API", "HTML/CSS"],
    category: "web",
    links: {
      github: "https://github.com/iedstrom333",
    },
    featured: false,
    period: "Aug 2018 – Nov 2023",
  },
  {
    id: "parking-lot-qr",
    title: "Parking Lot QR App",
    shortDescription:
      "Secure QR-code-based app for marking parking spaces. Hardened through use case/attack modeling, risk analysis, and penetration testing.",
    fullDescription:
      "Developed a site allowing users to mark parking spaces as taken by scanning a QR code. Performed comprehensive security analysis: use case and attack models, risk analysis, and penetration testing to identify and mitigate threats. Deployed on AWS with MySQL for persistence.",
    tags: ["Python", "Flask", "AWS", "MySQL", "Docker", "Security"],
    category: "web",
    featured: false,
    period: "Feb 2022 – May 2022",
  },
  {
    id: "nfl-data-warehouse",
    title: "NFL Data Warehouse",
    shortDescription:
      "Built a star-schema data warehouse with ETL pipelines using Pentaho, enabling OLAP operations and Tableau dashboards for NFL analytics.",
    fullDescription:
      "Designed a normalized star schema data warehouse and implemented ETL pipelines with Pentaho to integrate multiple NFL data sources. Developed OLAP operations and interactive Tableau dashboards enabling faster and more insightful data analysis.",
    tags: ["Microsoft SQL Server", "MySQL", "Pentaho", "Tableau", "ETL", "OLAP"],
    category: "data",
    featured: false,
  },
  {
    id: "dicks-database",
    title: "Dick's Sporting Goods Database",
    shortDescription:
      "Implemented a normalized relational database with complex SQL queries, constraints, and triggers for a retail data modeling project.",
    fullDescription:
      "Designed and implemented a fully normalized database for a Dick's Sporting Goods retail scenario. Performed complex SQL queries, implemented data integrity constraints and triggers to maintain data consistency.",
    tags: ["Microsoft SQL Server", "SQL", "Database Design"],
    category: "data",
    featured: false,
  },
  {
    id: "flash-card-mania",
    title: "Flash Card Mania",
    shortDescription:
      "Java Swing flashcard application with use case diagrams, sequence diagrams, and a full game settings and score screen.",
    fullDescription:
      "Designed and built a flashcard game application in Java Swing. Created UML artifacts including use case diagrams, sequence diagrams, and design-level models. Implemented card library, game settings, main menu, card game, and final score screen.",
    tags: ["Java", "Java Swing", "Eclipse", "UML"],
    category: "systems",
    featured: false,
  },
  {
    id: "scheduling-algorithms",
    title: "Operating System Scheduling Algorithms",
    shortDescription:
      "Implemented OS scheduling algorithms for a virtual computer in Java; led a team through task distribution and compromise based on skill levels.",
    fullDescription:
      "Developed CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority) for a virtual computer simulation in Java. Led the team by distributing tasks fairly, managing timelines, and facilitating compromise based on individual skill levels.",
    tags: ["Java", "Operating Systems", "Team Lead"],
    category: "systems",
    featured: false,
  },
  {
    id: "parallel-bubble-sort",
    title: "Parallel Bubble Sort",
    shortDescription:
      "Implemented parallel bubble sort with OpenMP on the Alabama Supercomputer's DMC cluster.",
    fullDescription:
      "Implemented a parallelized bubble sort algorithm using OpenMP directives on the Alabama Supercomputer's Distributed Memory Cluster. Analyzed performance scaling across different thread counts.",
    tags: ["C/C++", "OpenMP", "HPC", "Parallel Computing"],
    category: "systems",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const nonFeaturedProjects = projects.filter((p) => !p.featured);
