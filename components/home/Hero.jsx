"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className='bg-[url(/headerimg.png)] relative bg-cover bg-center bg-no-repeat h-[716px]'>

      <motion.div
        className='w-[600px] absolute bottom-[60px] text-center left-1/2 -translate-x-1/2 text-white'
        initial={{ y: 50, opacity: 0 }}   // pastdan boshlanadi
        animate={{ y: 0, opacity: 1 }}    // yuqoriga ko‘tariladi va ko‘rinadi
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}  // animatsiya sozlamasi
      >
        <motion.p
          className='font-normal text-[14px] leading-[20px] tracking-[2px] uppercase mb-[12px]'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Photographer & Filmmaker
        </motion.p>

        <motion.h2
          className='font-normal text-[54px] leading-[59.4px] tracking-normal mb-[18px]'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Aperture Studios
        </motion.h2>

        <motion.p
          className='font-normal text-[14px] leading-[20px] tracking-normal'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
        </motion.p>
      </motion.div>

    </div>
  )
}
