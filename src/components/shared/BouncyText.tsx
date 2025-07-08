import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setKey((prev) => prev + 1), 1800);
    return () => clearTimeout(timer);
  }, [key]);

  const words = text.split(" ");

  return (
    <motion.h1
      key={key}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        flexWrap: "wrap",
        fontSize: "2rem",
        fontWeight: 600,
        marginBottom: "1.5rem",
      }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={item} style={{ marginRight: "0.5rem" }}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
