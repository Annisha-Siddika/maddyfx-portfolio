"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
const ParallaxTestimonial = () => {
  const ref = useRef(null);
  const { scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["2%", "-5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <div
    ref={ref}
    className="w-full h-screen overflow-hidden relative grid place-items-center"
  >
     <motion.div
      className="absolute inset-0 -z-0"
      initial={{y: 50}}
      animate={{ y:0}}
      style={{
        // backgroundColor:"#050222",
        backgroundImage: `url(/images/sky.jpeg)`,
        backgroundPosition: "bottom",
        opacity:'30',
        backgroundSize: "cover",
        y: backgroundY,
      }}
    />
     <motion.div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(/images/bg1.png)`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    />
    
    <div
      className="absolute inset-0 z-10"
      style={{
        backgroundImage: `url(/images/bg2.png)`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    />
    <motion.h1
      style={{ y: textY }}
      className="font-bold text-white text-3xl md:text-5xl 2xl:text-7xl relative -top-28 2xl:-top-16 z-20"
    >
      What Clients Say
    </motion.h1>
    
    <motion.div
      className="absolute inset-0 z-30"
      style={{
        backgroundImage: `url(/images/bg3.png)`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        x: bgY,
      }}
    />
  </div>
  );
};

export default ParallaxTestimonial;
