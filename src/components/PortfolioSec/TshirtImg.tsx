"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { tshirts } from "@/lib/data";

export default function TshirtImg() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-150%"]);

  return (
    <div ref={targetRef} className="relative py-8">
    <div className="flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-3  items-center place-items-center gap-4">
        {tshirts.map((tshirt) => {
          return (
            <motion.div
            initial={{opacity: 0, y:50}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration:1}}
              key={tshirt.id}
              className="relative  odd:h-96 even:h-80 even:w-96 odd:w-80 overflow-hidden bg-neutral-200 rounded-lg border-4 border-orange-600"
            >
              <Image
              src={tshirt.url}
              width={800}
              height={850}
              alt="tshirts"
              className="absolute inset-0 z-0 transition-transform duration-300 hover:scale-110 w-full h-full"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
  );
}
