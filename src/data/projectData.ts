export const projectData = [
  {
    id: "1",
    title: "FitTrack AI",
    description:
      "A full-stack AI-powered fitness app that generates half-marathon training plans and offers personalized feedback using GPT-4o.",
    techstack: [
      { name: "React (TypeScript)", icon: "SiReact" },
      { name: "FastAPI", icon: "SiFastapi" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "OpenAI GPT-4o", icon: "SiOpenai" },
    ],
    keyfeatures: [
      "AI-generated workout plans with GPT-4o",
      "Sleep, mood, and workout tracking",
      "Leaflet.js map integration for real-world route planning",
      "Strava integration for importing activities",
      "Retrieval-augmented prompting for weekly summaries",
    ],
    link: "https://github.com/Jae-YS/FitTrack_FE",
    image: "/marathon.webp",
  },
  {
    id: "2",
    title: "Fine-Tuned BERT on SQuAD v1",
    description:
      "A machine learning project using Hugging Face Transformers to fine-tune BERT for extractive question answering on the SQuAD v1 dataset.",
    techstack: [
      { name: "Python", icon: "SiPython" },
      { name: "Hugging Face", icon: "SiHuggingface" },
      { name: "Weights & Biases", icon: "SiWeightsandbiases" },
    ],
    keyfeatures: [
      "Custom span alignment with offset/overflow mapping",
      "Achieved 77.45% Exact Match and 85.19% F1",
      "Mixed precision training with early stopping",
      "Progressive dataset scaling and LR scheduling",
      "Logged metrics using Weights & Biases",
    ],
    link: "https://github.com/Jae-YS/BERT_model",
    image: "/bert.webp",
  },
  {
    id: "3",
    title: "ParV2: Go-Based Parallel Function Composition",
    description:
      "Research assistant work on a variadic concurrency abstraction in Go, contributing to a runtime-safe parallel execution model and ANN-oriented concurrency research.",
    techstack: [
      { name: "Go", icon: "SiGo" },
      { name: "CSP", icon: "Code" },
      { name: "Reflection", icon: undefined},
      { name: "Concurrency", icon: undefined },
      { name: "Channels", icon: undefined },
    ],
    keyfeatures: [
      "Designed ParV2 to execute arbitrary Go functions in parallel using reflection",
      "Developed a CSP-inspired PAR operator to simplify variadic concurrency patterns",
      "Built a pipeline-based concurrent sorting system and replicator utility",
      "Enabled dynamic channel wiring for real-world parallel composition",
      "Formed the foundation for ongoing research into Go-native artificial neural networks (ANNs)",
      "Research publication in progress under Marc Smith",
    ],
    image: "/go.webp",
  },
  {
    id: "4",
    title: "ValentinePlusPlus",
    description:
      "A digital Valentine's card platform used by 150+ students with custom animations, email delivery, and shareable links.",
    techstack: [
      { name: "React (TypeScript)", icon: "SiReact" },
      { name: "Express", icon: "SiExpress" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Nodemailer", icon: "SiNodemailer" },
    ],
    keyfeatures: [
      "Automated email delivery with Nodemailer",
      "Custom card templates with animations",
      "Unique link generation per user",
      "Mobile-friendly responsive UI",
      "Deployed and used across campus annually",
    ],
    link: "https://github.com/Jae-YS/valentineplusplus_FE",
    image: "/valentine.webp",
  },
];
