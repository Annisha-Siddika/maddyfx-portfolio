"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegPaperPlane } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Service", href: "/service" },
  { name: "Testimonials", href: "/testimonials" },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="w-full px-8 flex items-center justify-between bg-opacity-80 z-50 py-4 bg-black text-slate-300 border-b border-slate-700">
      <div className="flex justify-center items-center">
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
      <div className="flex items-center justify-evenly gap-6">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive
                ? "transform transition-transform duration-500 ease-in-out hover:scale-110 text-orange-400 font-semibold"
                : "transform transition-transform duration-500 ease-in-out hover:scale-110"
            }
          >
            {link.name}
          </Link>
        );
      })}
      </div>
      <div className="orangeBtn">
        <Link href="/contact">
          <p className="flex items-center gap-2"><span>Let&apos;s talk</span> <FaRegPaperPlane /></p>
        </Link>
      </div>
    </div>
  );
}
