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
        <div className="relative">
          <motion.h2  className="sticky top-20 2xl:top-28 bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-2xl xl:text-4xl 2xl:text-6xl">Socks Designs</motion.h2>
          <SocksImg />
        </div>
        <div className="relative">
          <motion.h2  className="sticky top-20 2xl:top-28 bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-2xl xl:text-4xl 2xl:text-6xl">Cap Designs</motion.h2>
          <CapsImg />
        </div>
        <div className="relative">
          <motion.h2  className="sticky top-20 2xl:top-28 bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-2xl xl:text-4xl 2xl:text-6xl">Appealing T-shirt Designs</motion.h2>
          <TshirtImg />
        </div>
        <div className="relative">
          <motion.h2  className="sticky top-20 2xl:top-28 bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-2xl xl:text-4xl 2xl:text-6xl">Logo Designs</motion.h2>
          <LogoImg />
        </div>
        <div className="relative">
          <motion.h2  className="sticky top-20 2xl:top-28 bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-2xl xl:text-4xl 2xl:text-6xl">Banner Designs</motion.h2>
          <BannerImg />
        </div>
      </div>
    </div>
  );
}
