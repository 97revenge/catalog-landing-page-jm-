"use client";

import { motion, Variants } from "framer-motion";
import React, { useState } from "react";

export const FadeUpStagger = ({ children }: { children: React.ReactNode }) => {
  const [animationEnd, setAnimationEnd] = useState<boolean>(false);

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: -10, y: 0 },
    show: { opacity: 0, y: 1, transition: { type: "blur" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <motion.div
        variants={
          animationEnd === false
            ? FADE_UP_ANIMATION_VARIANTS
            : FADE_DOWN_ANIMATION_VARIANTS
        }
        exit={{ opacity: 10, x: "100%" }}
        onAnimationEnd={({}) => setAnimationEnd((preview) => !preview)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
