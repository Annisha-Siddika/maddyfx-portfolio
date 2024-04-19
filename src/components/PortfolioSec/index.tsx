"use client";
import ParallaxSection from "./Parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import CapsImg from "./CapsImg";
import SocksImg from "./SocksImg";
import TshirtImg from "./TshirtImg";
import LogoImg from "./LogoImg";
import BannerImg from "./BannerImg";

export default function PortfolioSection() {
  const { ref } = useSectionInView("Portfolio", 0.25);
  return (
    <div id="portfolio" ref={ref}>
      <ParallaxSection />
      <div className=" px-12 bg-[#2B2338]">
      <motion.h2
      initial={{y: 30, }}
      whileInView={{y: 0, }}
      transition={{duration: 1}}
       className="text-center font-bold text-2xl xl:text-4xl 2xl:text-6xl ">My Portfolio</motion.h2>
       <div className="relative">
          <div className="bg-[#2B2338] sticky top-0 pt-20 2xl:pt-28 pb-4 w-full z-10">
            <motion.h2 
          initial={{x: -100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 2}}
           className="bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-2xl xl:text-4xl 2xl:text-6xl">Socks Designs</motion.h2>
          </div>
          <SocksImg />
        </div>
        <div className="relative">
          <div className="bg-[#2B2338] sticky top-0 pt-20 2xl:pt-28 pb-4 w-full z-10">
            <motion.h2 
          initial={{x: -100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 2}}
           className="bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-2xl xl:text-4xl 2xl:text-6xl">Cap Designs</motion.h2>
          </div>
          
          <CapsImg />
        </div>
        <div className="relative">
          <div className="bg-[#2B2338] sticky top-0 pt-20 2xl:pt-28 pb-4 w-full z-10">
            <motion.h2 
          initial={{x: -100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 2}}
           className="bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-2xl xl:text-4xl 2xl:text-6xl">Appealing T-shirt Designs</motion.h2>
          </div>
          <TshirtImg />
        </div>
        <div className="relative">
          <div className="bg-[#2B2338] sticky top-0 pt-20 2xl:pt-28 pb-4 w-full z-10">
            <motion.h2 
          initial={{x: -100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 2}}
           className="bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-2xl xl:text-4xl 2xl:text-6xl">Logo Designs</motion.h2>
          </div>
          <LogoImg />
        </div>
        <div className="relative">
          <div className="bg-[#2B2338] sticky top-0 pt-20 2xl:pt-28 pb-4 w-full z-10">
            <motion.h2 
          initial={{x: -100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 2}}
           className="bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-2xl xl:text-4xl 2xl:text-6xl">Banner Designs</motion.h2>
          </div>
          <BannerImg />
        </div>
        
      </div>
    </div>
  );
}
