"use client";
import { useEffect, useRef } from "react";
import ParallaxSection from "./Parallax";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/contex/active-section-context";
import { useSectionInView } from "@/lib/hooks";

const items = [
  {
    id: 1,
    title: "Ecommerce website",
    img: "/images/project1.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tenetur quos id asperiores, vitae unde libero quas amet ipsam est, veniam expedita pariatur iusto? Rem ab voluptatem assumenda quibusdam voluptatum.",
  },
  {
    id: 2,
    title: "Booking website",
    img: "/images/project2.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tenetur quos id asperiores, vitae unde libero quas amet ipsam est, veniam expedita pariatur iusto? Rem ab voluptatem assumenda quibusdam voluptatum.",
  },
  {
    id: 3,
    title: "Blog website",
    img: "/images/project3.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tenetur quos id asperiores, vitae unde libero quas amet ipsam est, veniam expedita pariatur iusto? Rem ab voluptatem assumenda quibusdam voluptatum.",
  },
  {
    id: 4,
    title: "Rastuarent website",
    img: "/images/project4.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tenetur quos id asperiores, vitae unde libero quas amet ipsam est, veniam expedita pariatur iusto? Rem ab voluptatem assumenda quibusdam voluptatum.",
  },
  {
    id: 5,
    title: "Portfolio website",
    img: "/images/project5.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tenetur quos id asperiores, vitae unde libero quas amet ipsam est, veniam expedita pariatur iusto? Rem ab voluptatem assumenda quibusdam voluptatum.",
  },
];

export default function PortfolioSection() {
  const {ref} = useSectionInView('Portfolio', 0.25);


  return (
    <div id="portfolio" ref={ref}>
      <ParallaxSection />
      <div className="portfolio pb-6">
        <div className="progress">
          <h1 className=" pb-2 text-2xl font-bold">My Portfolios</h1>
          <motion.div className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
const Single = ({ item }: any ) => {
  const reff = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: reff,
  });

  const y = useTransform(scrollYProgress, [0,1], [-300, 300])

  return <div ref={reff}>
    <div className="flex items-center justify-center w-full h-full">
      <div className="max-w-5xl h-full m-auto flex items-center justify-center px-8 gap-12">
      <div className="flex-1 h-1/2 pt-6">
      <Image src={item.img}
      alt="project-image"
      className=" object-cover w-full h-full pb-6"
      width={300}
      height={250}
      />
      </div>
      <motion.div className="flex-1" style={{y}}>
        <h2 className="font-bold text-xl">{item.title} </h2>
        <p className="py-2 text-slate-400">{item.desc}</p>
        <button className="orangeBtn">See Demo</button>
      </motion.div>
      </div>
    </div>
    
    </div>;
};
