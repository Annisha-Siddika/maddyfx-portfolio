"use client";
import { motion } from 'framer-motion'
import Image from "next/image";
import Link from "next/link";
import { FaRegPaperPlane } from "react-icons/fa";
import { navLinks } from '@/lib/data';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/contex/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <motion.div
    initial={{y: -100, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    
    className="px-4 md:px-8 2xl:px-20 sm:flex items-center justify-between bg-opacity-80 z-[999] relative py-4 2xl:py-6 bg-black shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem]  text-slate-300 border-b border-slate-700 overflow-hidden">
      {/* logo */}
      <div className="hidden sm:block md:flex justify-center items-center">
        <Image
          src="/android-chrome-192x192.png"
          alt="Logo"
          width={30}
          height={30}
          className='2xl:w-[50px]'
        />
        <div className="text-xl 2xl:text-2xl w-20 hidden md:block text-[#f2994a]">
          {" "}
          <Link href="/">MaddyFX</Link>
        </div>
      </div>

      {/* menu */}
      <nav>
        <ul className="grid grid-cols-3 pb-2 md:pb-0 sm:flex items-center justify-center sm:gap-6 2xl:gap-10">
          {
            navLinks.map(link => (
              <motion.li key={link.hash}
              initial={{y: -100, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              >
                <Link className={
              clsx("transform transition-transform duration-500 ease-in-out hover:scale-110 text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl", {"text-orange-400 font-semibold" : activeSection === link.name})} 
              href={link.hash}
              onClick={()=>{
                setTimeOfLastClick(Date.now())
                setActiveSection(link.name)}}
              >
                {link.name}
                </Link>
              </motion.li>
            ))
          }
        </ul>
      </nav>

      {/* contact btn */}
      <div className="orangeBtn">
        <Link href="/contact">
          <p className="flex items-center justify-center gap-2 text-lg"><span>Let&apos;s talk</span> <FaRegPaperPlane /></p>
        </Link>
      </div>
    </motion.div>
  );
}
