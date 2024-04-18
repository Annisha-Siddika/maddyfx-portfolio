"use client";
import { useSectionInView } from "@/lib/hooks";
import ParallaxTestimonial from "./ParallaxTestimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { reviews } from "@/lib/data";
import { Rating } from "@smastrom/react-rating";
import { motion } from "framer-motion";
import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useRef } from "react";
import Image from "next/image";

export default function TestimonialSection() {
  const { ref } = useSectionInView("Testimonials", 0.5);

  return (
    <div className="" id="testimonials" ref={ref}>
      <ParallaxTestimonial />
      <div className="bg-[#000721] h-screen overflow-hidden flex flex-col justify-center items-center gap-8 lg:gap-32">
      <motion.h2
      initial={{y: 30, }}
      whileInView={{y: 0, }}
      transition={{duration: 1}}
       className="text-center font-bold text-2xl xl:text-4xl 2xl:text-6xl ">Testimonials</motion.h2>
        <div
          className="w-2/3 h-96 bg-center bg-cover relative"
          style={{
            backgroundImage: `url(/images/sky.jpeg)`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 w-full flex">
            <Swiper
              navigation
              pagination={{ type: "fraction" }}
              modules={[Navigation, Pagination]}
              onSwiper={(swiper) => console.log(swiper)}
              className="w-full "
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center justify-center h-full">
                    <Image
                    src='/images/client.jpg'
                    alt="client"
                    width={100}
                    height={100}
                    className="rounded-full pb-2"

                    />
                    <h1 className="text-white font-bold text-2xl">
                     
                      {review.client}
                    </h1>

                    <div className="pt-2 pb-4">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={review.rating}
                        readOnly
                      />
                    </div>
                    <p className="px-10 w-2/3 text-center"> {review.review} </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
