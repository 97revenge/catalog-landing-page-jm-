import { motion } from "framer-motion";

export function WordPullUp({ text }: { text: string }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const words = text;
  return (
    <motion.h1 variants={container} initial="hidden" animate="show">
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", paddingRight: "15px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
