"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function WavyText({ time }: { time: number }) {
  const [view, setView] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setView((preview) => !preview);
    }, time);

    return () => clearTimeout(timer);
  }, []);

  const word = `Ilumine e dê vida para sua casa com nossos produtos decasa & decoração💡`;
  const variants1 = {
    hidden: { y: 10 },
    visible: { y: -10 },
  };
  return (
    <div className="transition-auto flex space-x-2 justify-center">
      {view === true && (
        <>
          <AnimatePresence>
            {word.split("").map((char, i) => (
              <motion.h1
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants1}
                transition={{ yoyo: Infinity, duration: 0.5, delay: i * 0.2 }}
              >
                {char}
              </motion.h1>
            ))}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
