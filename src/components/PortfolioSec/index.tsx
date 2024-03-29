"use client";
import { useRef } from "react";
import ParallaxSection from "./Parallax";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness:100,
    damping: 30,
  })

  return (
    <div>
      <ParallaxSection />
      <div className="portfolio pb-6" ref={ref}>
        <div className="progress">
          <h1 className=" pb-2 text-2xl font-bold">My Portfolios</h1>
          <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
const Single = ({ item }: any ) => {
  const ref = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0,1], [-300, 300])

  return <div ref={ref}>
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
