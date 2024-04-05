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
    
    className="w-full px-8 flex items-center justify-between bg-opacity-80 z-[999] relative py-4 bg-black shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem]  text-slate-300 border-b border-slate-700">
      {/* logo */}
      <div className="sm:hidden md:flex justify-center items-center">
        <Image
          src="/android-chrome-192x192.png"
          alt="Logo"
          width={30}
          height={30}
        />
        <div className="text-xl w-20 text-[#f2994a]">
          {" "}
          <Link href="/">MaddyFX</Link>
        </div>
      </div>

      {/* menu */}
      <nav>
        <ul className="flex items-center justify-evenly gap-6">
          {
            navLinks.map(link => (
              <motion.li key={link.hash}
              initial={{y: -100, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              >
                <Link className={
              clsx("transform transition-transform duration-500 ease-in-out hover:scale-110", {"transform transition-transform duration-500 ease-in-out hover:scale-110 text-orange-400 font-semibold" : activeSection === link.name})} 
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
          <p className="flex items-center gap-2"><span>Let&apos;s talk</span> <FaRegPaperPlane /></p>
        </Link>
      </div>
    </motion.div>
  );
}
