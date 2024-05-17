"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FadeUpStagger } from "../Animations/FadeUpStagger";

export const ChatButton = () => {
  const [view, setView] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setView((preview) => !preview);
    }, 3600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {view === true && (
        <>
          <FadeUpStagger>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className=" fixed bottom-10 right-10 z-50 bg-opacity-50 rounded-xl"
            >
              <button className="rounded-xl animated-background bg-gradient-to-r from-blue-500 via-blue-800 to-purple-600 w-16 h-16 flex items-center justify-center shadow-xl transform transition-transform duration-500 hover:scale-90 hover:translate-y-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 14 14"
                  className="transform transition-transform duration-500 hover:scale-90 animate-pulse current-fill text-white "
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M7 6.433v3.97a2.724 2.724 0 1 1-5.439-.229C.994 9.565.636 8.374.636 7.38c0-1.354.665-2.671 1.617-3.19a2.38 2.38 0 0 1 3.902-2.076" />
                    <path d="M3.511 5.809c-.35-.08-1.141-.6-1.26-1.612m.039 4.549c-.356.281-.64.917-.731 1.427m5.441.23a2.724 2.724 0 1 0 5.439-.229c.567-.609.924-1.8.924-2.794c0-.434-.068-.864-.192-1.266" />
                    <path d="M11.71 8.746c.356.281.64.917.731 1.427M7.064 4.307c-.35-.062-.35-.565 0-.626a3.176 3.176 0 0 0 2.559-2.45l.021-.097c.076-.347.57-.35.649-.003l.025.113a3.193 3.193 0 0 0 2.566 2.435c.353.061.353.568 0 .63a3.193 3.193 0 0 0-2.566 2.435l-.025.112c-.08.346-.573.344-.649-.003l-.021-.096a3.176 3.176 0 0 0-2.559-2.45" />
                  </g>
                </svg>
              </button>
            </motion.div>
          </FadeUpStagger>
        </>
      )}
    </>
  );
};
