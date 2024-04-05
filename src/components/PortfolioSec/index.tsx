"use client";
import { useRef } from "react";
import ParallaxSection from "./Parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";

// const items = [
//   {
//     id: 1,
//     title: "Ecommerce website",
//     img: "/images/project1.png",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tenetur quos id asperiores, vitae unde libero quas amet ipsam est, veniam expedita pariatur iusto? Rem ab voluptatem assumenda quibusdam voluptatum.",
//   },
//   {
//     id: 2,
//     title: "Booking website",
//     img: "/images/project2.png",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tenetur quos id asperiores, vitae unde libero quas amet ipsam est, veniam expedita pariatur iusto? Rem ab voluptatem assumenda quibusdam voluptatum.",
//   },
//   {
//     id: 3,
//     title: "Blog website",
//     img: "/images/project3.png",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tenetur quos id asperiores, vitae unde libero quas amet ipsam est, veniam expedita pariatur iusto? Rem ab voluptatem assumenda quibusdam voluptatum.",
//   },
//   {
//     id: 4,
//     title: "Rastuarent website",
//     img: "/images/project4.png",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tenetur quos id asperiores, vitae unde libero quas amet ipsam est, veniam expedita pariatur iusto? Rem ab voluptatem assumenda quibusdam voluptatum.",
//   },
//   {
//     id: 5,
//     title: "Portfolio website",
//     img: "/images/project5.png",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tenetur quos id asperiores, vitae unde libero quas amet ipsam est, veniam expedita pariatur iusto? Rem ab voluptatem assumenda quibusdam voluptatum.",
//   },
// ];

export default function PortfolioSection() {
  const {ref} = useSectionInView('Portfolio', 0.25);


  return (
    <div id="portfolio" ref={ref}>
      <ParallaxSection />
      <div className="min-h-screen bg-[#2B2338]"></div>
    
    </div>
    )
  }
