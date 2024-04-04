"use client"
import { Inter } from "next/font/google";
import MultiLayerParallax from "./MultiLayerParallax";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AboutSection() {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness:100,
    damping: 30,
  })


  return (
    <main id="about" className={inter.className}>
      <MultiLayerParallax />
      <div className="service h-screen bg-[#000940]" ref={ref}>
        <div

        className="progress px-40 space-y-4 py-8">
          <h1 className=" pb-2 text-2xl font-bold">About Me</h1>
          <motion.div style={{scaleX}} className="progressBar"></motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
          </div>
      </div>
    </main>
  );
}
