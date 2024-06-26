import Image from "next/image";
import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <div className="bg-black px-8 lg:px-10 xl:px-12 2xl:px-16 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <div>
          <h1 className="text-[#f2994a] font-semibold text-sm pb-2">CONTACT</h1>
          <p className="text-gray-400 text-xs pb-1">
            132, Sidcup Lane
          </p>
          <p className="text-gray-400 text-xs pb-1">
            PS15 MA12, Bromley
          </p>
          <p className="text-gray-400 text-xs pb-1">London, UK</p>
          <p className="text-gray-400 text-xs pb-1">www.maddyfx.com</p>
          <p className="text-gray-400 text-xs pb-1">000 123 456 7890</p>
        </div>
        <div>
          <h1 className="text-[#f2994a] font-semibold text-sm pb-2">USEFULL LINK</h1>
          <div className="flex flex-col">
          <Link href="/" className="text-xs text-gray-400 pb-1 hover:text-gray-300">Portfolio</Link>
          <Link href="/" className="text-xs text-gray-400 pb-1 hover:text-gray-300">Certifications</Link>
          <Link href="/" className="text-xs text-gray-400 pb-1 hover:text-gray-300">Blogs</Link>
          <Link href="/" className="text-xs text-gray-400 pb-1 hover:text-gray-300">Resume</Link>
          <Link href="/" className="text-xs text-gray-400 pb-1 hover:text-gray-300">Projects</Link>
          </div>
        </div>
        <div>
          <h1 className="text-[#f2994a] font-semibold text-sm pb-2">RECENT POST</h1>
          <p className="text-xs text-gray-400 pb-1">Lorem ipsum dolor sit.</p>
          <p className="text-xs text-gray-400 pb-1">Lorem ipsum dolor sit.</p>
          <p className="text-xs text-gray-400 pb-1">Lorem ipsum dolor sit.</p>
          <p className="text-xs text-gray-400 pb-1">Lorem ipsum dolor sit.</p>
          <p className="text-xs text-gray-400 pb-1">Lorem ipsum dolor sit.</p>
        </div>
        <div>
          <h1 className="text-[#f2994a] font-semibold text-sm pb-2">SOCIAL</h1>
          <div className="flex gap-2">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-sky-400"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-red-600"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-blue-500"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          <div className="flex items-center mt-6">
          <input
            type="text"
            className=" rounded-s px-2 py-1 text-sm outline-0 w-1/2 sm:w-full"
            placeholder="Search..."
          />
          <button className="bg-[#d47c2f] hover:bg-[#be5e09] text-white px-2 py-1 text-sm rounded-e font-semibold">
            Search
          </button>
        </div>
        </div>
      </div>
      <div>
      <div className="flex items-center justify-center pt-10 pb-2">
        <Image
          src="/favicon-32x32.png"
          alt="Feather Image"
          width={60}
          height={60}
        />
        <div>
        <p className="text-[#f2994a] text-xl font-semibold ">MADDYFX</p>
        <p className="text-sm text-gray-400">your tagline here</p>
        </div>
      </div>
      </div>
      <hr className="border-[#f2994a]" />
      <div className="pt-4">
        <p className="text-center text-sm text-gray-300">
          {" "}
          &copy;{new Date().getFullYear()} All right reserved by MaddyFX
        </p>
      </div>
    </div>
  );
};

export default Footer;
