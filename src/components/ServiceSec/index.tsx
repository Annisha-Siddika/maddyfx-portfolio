"use client";
import ParallaxService from "./ParallaxService";
import { motion, useScroll, useSpring,  } from "framer-motion";
import { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";

export default function ServiceSection(){
  const {ref} = useSectionInView('Service', 0.25);


    const serviceRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: serviceRef,
      offset: ["end end", "start start"],
    });
    const scaleX = useSpring(scrollYProgress, {
      stiffness:100,
      damping: 30,
    })
    return(
        <div id="service"  ref={ref}>
            <ParallaxService/>
            <div className="service h-screen bg-[#360E06]" ref={serviceRef}>
            <div className="progress">
          <h1 className=" pb-2 text-2xl font-bold">My Services</h1>
          <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
            </div>
        </div>
    )
}