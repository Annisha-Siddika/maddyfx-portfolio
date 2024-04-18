"use client";
import ParallaxService from "./ParallaxService";
import { motion, } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { services } from "@/lib/data";
import Image from "next/image";

export default function ServiceSection() {
  const { ref } = useSectionInView("Service", 0.25);

  
  return (
    <div id="service" ref={ref}>
      <ParallaxService />
      <div className="bg-[#360E06]">
      <motion.h2
      initial={{y: 30, }}
      whileInView={{y: 0, }}
      transition={{duration: 1}}
       className="text-center font-bold text-2xl xl:text-4xl 2xl:text-6xl md:py-6">My Services</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-6 w-full px-16 pt-8 pb-12">
          
          {services.map((service, index) => (
            <div key={index} className="w-full h-full p-4">
              <div className="bg-[#4f4d4c38] h-full  rounded-lg shadow-lg hover:shadow-orange-900 hover:transition-shadow">
                <motion.div
                initial={{ scale: 0.9}}
                whileInView={{ scale: 1}}
                transition={{duration:1}} 
                className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="rounded-t-lg w-96 h-64 hover:scale-105 duration-500"
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
