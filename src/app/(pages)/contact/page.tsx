"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="px-4 md:px-8 2xl:px-20 sm:flex items-center justify-between bg-opacity-80 z-[999] relative py-4 2xl:py-6 bg-black shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem]  text-slate-300 border-b border-slate-700 overflow-hidden"
      >
        {/* logo */}
        <div className="hidden sm:block md:flex justify-center items-center">
          <Image
            src="/android-chrome-192x192.png"
            alt="Logo"
            width={30}
            height={30}
            className="2xl:w-[50px] 2xl:h-[50px]"
          />
          <div className="text-xl 2xl:text-2xl w-20 hidden md:block text-[#f2994a]">
            {" "}
            <Link href="/">MaddyFX</Link>
          </div>
        </div>
        {/* home btn */}
        <div className="orangeBtn">
          <Link href="/">
            <p className="flex items-center justify-center gap-2 text-lg">
              {" "}
              <FaArrowLeft /> <span>Go Back Home</span>
            </p>
          </Link>
        </div>
      </motion.div>
      {/* Header end  */}
      {/* contact page  */}
      <div className="flex flex-col items-center justify-center">
      <motion.section
      
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 py-6">Contact me</h2>
      

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            console.log(error)
            toast.error(error);
            return;
          }
          

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>

      </div>
    </div>
  );
}
