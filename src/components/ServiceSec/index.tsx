"use client";
import ParallaxService from "./ParallaxService";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import { services } from "@/lib/data";
import Image from "next/image";

export default function ServiceSection() {
  const { ref } = useSectionInView("Service", 0.25);

  const serviceRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: serviceRef,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div id="service" ref={ref}>
      <ParallaxService />
      <div className="bg-[#360E06]">
      <h2 className="text-center font-bold text-2xl xl:text-4xl 2xl:text-6xl">My Services</h2>
        <div className="flex flex-wrap justify-center px-16 py-8">
          
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 2xl:w-1/5 p-4">
              <div className="bg-[#4f4d4c38]  rounded-lg shadow-lg">
                <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:3}} 
                className="relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="rounded-t-lg w-96 h-64"
                  />
                </motion.div>
                <div className="p-4 ">
                  <motion.h3
                  initial={{y:15}} 
                  whileInView={{y:0}} 
                  transition={{duration:1}} 

                  className="text-lg font-semibold text-orange-500 mb-2 h-full overflow-hidden">
                    {service.title}
                  </motion.h3>
                  <p className="text-slate-300">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
