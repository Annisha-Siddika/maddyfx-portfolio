"use client"
import { useSectionInView } from '@/lib/hooks';
import React from 'react'

export default function TestimonialSection() {
    const {ref} = useSectionInView('Testimonials', 0.5);

  return (
    <div className='min-h-screen' id='testimonials' ref={ref}>TestimonialSec</div>
  )
}