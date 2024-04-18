"use client";
import MultiLayerParallax from "./MultiLayerParallax";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import React, {  useState } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-3">
        <li>Adobe Illustrator</li>
        <li>Adobe Photoshop</li>
        <li>Photo Editing</li>
        <li>Graphic Design</li>
        <li>Vector Illustrator</li>
        <li>Shopify</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <h3 className="text-lg font-bold">Green University of Bangladesh </h3>
        <p className="text-base">B.Sc. Degree. Textile Engineering</p>
        <p className="text-sm">Graduated 2013</p>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div>
        <h3 className="text-lg font-bold">GP Academy BRAND BUILDING FOR THE FUTURE</h3>
        <p className="text-sm">Graduated 2023</p>
        <h3 className="text-lg font-bold">GP Academy LEADERSHIP SKILLS</h3>
        <p className="text-sm">Graduated 2023</p>
      </div>
    ),
  },
];

export default function AboutSection() {
  const { ref } = useSectionInView("About", 0.5);
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id: string) => {
    setTab(id);
  };
  const currentTabData = TAB_DATA.find((t) => t.id === tab);


  return (
    <main id="about"  ref={ref}>
      <MultiLayerParallax />
      <div className=" bg-[#000940]">
      <div className="md:grid lg:grid-cols-2 justify-between justify-items-center items-center py-8 px-4 md:px-8 2xl:px-20 sm:py-16">
        <motion.div
        initial={{x: -50, y: 50}}
        whileInView={{x: 0, y: 0}}
        transition={{duration: 1}}
        >
        <Image alt="about" className="rounded-lg  border-4 mb-8 lg:mb-0 2xl:w-[600px] 2xl:h-[600px] border-orange-400" src="/images/aboutpic.png" width={400} height={400} />
        </motion.div>

        <div className="mt-4 md:mt-0 2xl:mt-12 text-left flex flex-col h-full">
          <motion.h2
          initial={{y: 30, }}
          whileInView={{y: 0, }}
          transition={{duration: 1}}
           className="text-2xl lg:text-4xl 2xl:text-6xl font-bold text-white mb-4">About Me</motion.h2>
          <motion.p
          initial={{opacity: 0.2}}
          whileInView={{opacity: 1}}
          transition={{duration: 1}}
           className="text-base lg:text-sm 2xl:text-xl 2xl:pt-4">
          Hi, I am MaddyFX. I am a Graphics Designer and Print On Demand Expert. Have excellent skills in Amazon Services, Socks Design, Cap or Hat Design, T-shirt Design, Vector Illustration, Photo Editing, Logo Design, Line Art, Banner Design, Package Design etc. I am also experienced in Amazon Storefront Design, EBC Page Creation and Customization. I am working with several Amazon Brands and Individual Buyers as there complete Graphic and Amazon Solution. My aim is to provide top quality Service on time and in budget with Satisfaction.
          </motion.p>
          <div className="flex flex-row justify-start mt-8 2xl:gap-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 2xl:text-xl">
          {currentTabData?.content}
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
