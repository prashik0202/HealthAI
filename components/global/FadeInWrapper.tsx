"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInWrapperProps {
  children: React.ReactNode;
  duration?: number; // Default duration is 0.6s
}

const FadeInWrapper = ({ children, duration = 0.6 }: FadeInWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
