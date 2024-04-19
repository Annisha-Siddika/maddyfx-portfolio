"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { banners } from "@/lib/data";
import Image from "next/image";

export default function BannerImg() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-150%"]);

  return (
    <div ref={targetRef} className="relative h-[250vh]">
      <div className="sticky top-16 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12">
          {banners.map((banner) => {
            return (
              <div
                key={banner.id}
                className="group relative w-96 h-80 overflow-hidden bg-neutral-200 rounded-lg border-4 border-orange-600"
              >
                <Image
                  src={banner.url}
                  width={800}
                  height={800}
                  alt="logos"
                  className="absolute inset-0 z-0 transition-transform duration-300 hover:scale-110 w-full h-full"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
