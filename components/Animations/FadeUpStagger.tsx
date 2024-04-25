"use client";


import { motion } from "framer-motion";
import React from "react";

export const FadeUpStagger = ({ children }:{children:React.ReactNode}) => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
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
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} > {children}</motion.div>
    </motion.div>
  );
};
