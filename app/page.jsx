import Hero from '@/components/home/Hero'
import Section from '@/components/home/section'
import Section2 from '@/components/home/section2'
import Section3 from '@/components/home/section3'
import Section4 from '@/components/home/section4'
import Section5 from '@/components/home/section5'
import Section6 from '@/components/home/section6'
import React from 'react'
import End from '@/components/home/end'

export default function page() {
  return (
    <div>
      <Hero/>
      <Section/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <End/>
    </div>
  )
}
