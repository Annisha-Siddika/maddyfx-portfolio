"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress, scrollXProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <div
    ref={ref}
    className="w-full h-screen overflow-hidden relative grid place-items-center"
  >
    <motion.h1
      style={{ y: textY }}
      className="font-bold text-white text-3xl md:text-5xl 2xl:text-7xl relative -top-8 2xl:top-10 z-20"
    >
      What I Did
    </motion.h1>
    
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        // backgroundColor:"#050222",
        backgroundImage: `url(/images/portfolioBG.jpg)`,
        backgroundPosition: "bottom",
        opacity:'30',
        backgroundSize: "cover",
        y: backgroundY,
      }}
    />
    <div
      className="absolute inset-0 z-30"
      style={{
        backgroundImage: `url(/images/frontbg.png)`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    />
    <div
      className="absolute inset-0 z-10"
      style={{
        backgroundImage: `url(/images/backbg.png)`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    />
  
  </div>
  );
};

export default ParallaxSection;
