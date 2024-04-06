import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

export default function Brands() {
  return (
    <Marquee pauseOnHover autoFill>
        <div className='flex justify-center items-center gap-8 mt-2 px-4'>
        <Image
          src="/images/ai.png"
          alt="Logo"
          width={40}
          height={60}
        />
        <Image
          src="/images/amzn_fresh.png"
          alt="Logo"
          width={60}
          height={60}
        />
        <Image
          src="/images/mama_br.png"
          alt="Logo"
          width={60}
          height={60}
        />
        <Image
          src="/images/amazon.png"
          alt="Logo"
          width={60}
          height={60}
        />
        <Image
          src="/images/ps.png"
          alt="Logo"
          width={40}
          height={60}
        />
        <Image
          src="/images/solimo.png"
          alt="Logo"
          width={60}
          height={60}
        />
        <Image
          src="/images/wag.png"
          alt="Logo"
          width={60}
          height={60}
        />
    </div>
    </Marquee>
  )
}
