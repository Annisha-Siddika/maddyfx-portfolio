"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from "react-icons/fa6";
import { RiDownload2Line } from "react-icons/ri";
import { useSectionInView } from "@/lib/hooks";

const Banner = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const {ref} = useSectionInView('Home', 0.25);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const currentImageRef = imageRef.current;
      if (currentImageRef) {
        const rect = currentImageRef.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (clientX - centerX) / 20;
        const y = (clientY - centerY) / 20;
        setMousePosition({ x, y });
      }
    };

    const heroSectionElement = heroSectionRef.current;
    if (heroSectionElement) {
      heroSectionElement.addEventListener("mouseenter", () => {
        window.addEventListener("mousemove", handleMouseMove);
      });

      heroSectionElement.addEventListener("mouseleave", () => {
        window.removeEventListener("mousemove", handleMouseMove);
      });
    }

    return () => {
      if (heroSectionElement) {
        heroSectionElement.removeEventListener("mouseenter", () => {
          window.addEventListener("mousemove", handleMouseMove);
        });

        heroSectionElement.removeEventListener("mouseleave", () => {
          window.removeEventListener("mousemove", handleMouseMove);
        });
      }
    };
  }, []);


  return (
    <div id="home" ref={ref} className="relative h-[90vh] border-b border-slate-500  px-8" style={{ perspective: "1000px" }}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/homeBanner.png')" }} ></div>
      <div className="relative z-10 flex" ref={heroSectionRef}>
        <div className="flex flex-col justify-start w-full pt-28">
        <h2 className="text-2xl pt-20 md:pt-0 pb-4">
          Hi, This is <span className="text-orange-400">MADDY</span>
        </h2>
        <p className="pb-4 text-slate-300 "> I am a Profesional ______________</p>
        <TypeAnimation
      sequence={[
        'Frontend Developer',
        2000, 
        'MERN Developer',
        2000,
        'Coding enthusiast',
        2000
      ]}
      wrapper="span"
      speed={50}
      className="bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-4xl "
      repeat={Infinity}
    />
    <p className="w-1/2 text-sm pt-4 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad repellendus dolore eum quam corrupti maxime similique quidem ipsam eaque ratione beatae harum non accusantium?</p>
    <div className="flex item-center gap-6 pt-8">
        <div className="dwnldBtn flex items-center gap-2"><RiDownload2Line className="text-xl" /> <span>Download CV</span> </div>
        <div className="ghostBtn flex items-center gap-2"><span>Hire Me</span> <FaArrowRight /></div>
    </div>
        </div>
        <div
          className="w-full md:w-1/2 flex justify-center items-center"
          style={{
            transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            transition: "transform 0.1s ease-out",
          }}
          ref={imageRef}
        >
          <div className="border-4 rounded-3xl border-orange-500 bg-black bg-opacity-75 mt-20  overflow-hidden">
            <div className="w-64 h-64 ">
              <Image className="object-contain w-full h-full" src="/images/maddy.png" alt="Hero Image" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
