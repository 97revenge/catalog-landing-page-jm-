import { AnimatePresence, motion, AnimationProps } from "framer-motion";

export function WordPullUp({ text, style }: { text: string; style: string }) {
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
    <AnimatePresence>
      <motion.h1 variants={container} initial="hidden" animate="show">
        {words.split(" ").map((word, i) => {
          const transition: AnimationProps = {
            transition: {
              yoyo: Infinity,
              duration: 0.5,
              delay: i * 0.2,
            },
          };

          return (
            <>
              <motion.span
                key={i}
                variants={item}
                style={{ display: "inline-block", paddingRight: "15px" }}
                className={style}
                {...(word.length === 30 && transition)}
              >
                {word === "" ? <span>&nbsp;</span> : word}
              </motion.span>
            </>
          );
        })}
      </motion.h1>
    </AnimatePresence>
  );
}
