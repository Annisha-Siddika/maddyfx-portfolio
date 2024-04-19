"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { socks } from "@/lib/data";
import Image from "next/image";
export default function SocksImg() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-150%"]);

  return (
    <div ref={targetRef} className="relative h-[220vh]">
      <div className="sticky top-16 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12">
          {socks.map((sock) => {
            return (
              <div
                key={sock.id}
                className="group relative h-96 w-80 overflow-hidden rounded-lg border-4 border-orange-600 bg-neutral-200"
              >
                 <Image
                  src={sock.url}
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
