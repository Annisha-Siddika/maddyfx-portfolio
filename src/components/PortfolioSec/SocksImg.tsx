"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { socks } from "@/lib/data";
export default function SocksImg() {
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
          {socks.map((sock) => {
            return (
              <div
                key={sock.id}
                className="group relative h-[450px] w-[450px] overflow-hidden rounded-lg border-4 border-orange-600 bg-neutral-200"
              >
                <div
                  style={{
                    backgroundImage: `url(${sock.url})`,
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
  );
}
