"use client"
import { Inter } from "next/font/google";
import MultiLayerParallax from "./MultiLayerParallax";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/contex/active-section-context";
import { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";

const inter = Inter({ subsets: ["latin"] });

export default function AboutSection() {
  const {ref} = useSectionInView('About', 0.5);




  return (
    <main id="about" className={inter.className} ref={ref}>
      <MultiLayerParallax />
      <div className="service h-screen bg-[#000940]">
        <div

        className="progress px-40 space-y-4 py-8">
          <h1 className=" pb-2 text-2xl font-bold">About Me</h1>
          <div className="progressBar"></div>
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
