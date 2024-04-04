"use client";
import ParallaxService from "./ParallaxService";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ServiceSection(){
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
    const scaleX = useSpring(scrollYProgress, {
      stiffness:100,
      damping: 30,
    })
    return(
        <div id="service">
            <ParallaxService/>
            <div className="service h-screen bg-[#360E06]" ref={ref}>
            <div className="progress">
          <h1 className=" pb-2 text-2xl font-bold">My Services</h1>
          <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
            </div>
        </div>
    )
}