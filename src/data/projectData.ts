export const projectData = [
  {
    id: "1",
    title: "FitTrack AI",
    description:
      "A full-stack AI-powered fitness app that generates half-marathon training plans and offers personalized feedback using GPT-4o.",
    techstack: [
      { name: "React (TypeScript)", icon: "react" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "OpenAI GPT-4o", icon: "openai" },
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
      { name: "Python", icon: "python" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Weights & Biases", icon: "weightsandbiases" },
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
      { name: "Go", icon: "go" },
      { name: "CSP", icon: undefined },
      { name: "Reflection", icon: undefined },
      { name: "Concurrency", icon: undefined },
      { name: "Channels", icon: undefined },
    ],
    keyfeatures: [
      "Designed ParV2 to execute arbitrary Go functions in parallel using reflection",
      "Developed a CSP-inspired PAR operator to simplify variadic concurrency patterns",
      "Enabled dynamic channel wiring for real-world parallel composition",
      "Formed the foundation for ongoing research into Go-native artificial neural networks (ANNs)",
      "Research publication in progress under Marc Smith",
    ],
    image: "/go.webp",
  },
  {
    id: "4",
    title: "Lunava",
    description:
      "Lunava is a fully responsive, feature-rich e-commerce application designed to simulate a real-world online shopping experience using the FakeStoreAPI.",
    techstack: [
      { name: "React (TypeScript)", icon: "React" },
      { name: "Redux Toolkit", icon: "Redux" },
      { name: "React Query", icon: "ReactQuery" },
      { name: "Auth0", icon: "Auth0" },
      { name: "Material UI", icon: "MaterialUI" },
      { name: "Vite", icon: "Vite" },
      { name: "React Router", icon: "ReactRouter" },
      { name: "React Toastify", icon: "Toastify" },
      { name: "FakeStoreAPI", icon: "API" },
    ],
    keyfeatures: [
      "Secure login via Auth0, with cart data stored and loaded per user from sessionStorage.",
      "Global Cart Management all synchronized in Redux and sessionStorage.",
      "Products and categories are fetched using React Query and updated in real-time from the API.",
      "Designed with a clean, modern layout for desktop and mobile users.",
      "Confirmation modal, success toast, and cart clearing for an intuitive end-to-end flow.",
    ],
    link: "https://lunava-nu.vercel.app/",
    image: "/lunava.png",
  },
];
