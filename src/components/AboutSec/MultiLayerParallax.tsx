"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress, scrollXProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-5xl md:text-7xl relative -top-16 z-30"
      >
        Who I am
      </motion.h1>
      
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          // backgroundColor:"#050222",
          backgroundImage: `url(/images/sky.png)`,
          backgroundPosition: "bottom",
          opacity:'30',
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/images/bighill.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <motion.div
      initial={{x: 20, y: -20}}
      whileInView={{x: -20, y: 20}}
      transition={{ 
        delay: 1,
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
        className="absolute top-12 left-1/3 z-10"
        style={{
          backgroundColor: '#f2992a',
          borderRadius: '50%',
          width:"100px",
          height:'100px',
        }}
      />
      <div
        className="absolute inset-0 -left-1 z-40"
        style={{
          backgroundImage: `url(/images/smallhill.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}