"use client"
import { Inter } from "next/font/google";
import MultiLayerParallax from "./MultiLayerParallax";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function AboutSection() {


  return (
    <main className={inter.className}>
      <MultiLayerParallax />
      <div className="w-full bg-[#000940]">
        <motion.div
        initial={{y: -10}}
        whileInView={{y: 0}}
        
        className="px-40 space-y-4 py-8">
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
          </motion.div>
      </div>
    </main>
  );
}
