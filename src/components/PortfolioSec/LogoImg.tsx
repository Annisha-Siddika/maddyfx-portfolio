"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { logos } from "@/lib/data";
import Image from "next/image";
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
    className="relative py-8">
      <div className="flex items-center justify-end overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3  items-center place-items-center gap-4">
          {logos.map((logo) => {
            return (
              <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x:0}}
              transition={{duration:1}}
                key={logo.id}
                className="relative odd:w-80 even:w-64 odd:h-80 even:h-64 overflow-hidden bg-neutral-200 rounded-lg border-4 border-orange-600"
              >
                <Image
                src={logo.url}
                width={800}
                height={800}
                alt="logos"
                className="absolute inset-0 z-0 transition-transform duration-300 hover:scale-110 w-full h-full"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
