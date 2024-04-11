"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { logos } from "@/lib/data";

export default function LogoImg() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
    const rx = useTransform(scrollYProgress, [0, 1], ["-80%", "100%"]);

  return (
    <div
    ref={targetRef}
    className="relative h-[250vh]"
  >
    <div className="sticky top-16 flex h-screen items-center overflow-hidden">
      <motion.div style={{ x: rx }} className="flex gap-4">
        {logos.map((logo) => {
          return (
            <div
key={logo.id}
className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
>
<div
  style={{
    backgroundImage: `url(${logo.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
></div>
</div>
          );
        })}
      </motion.div>
    </div>
  </div>
  )
}
