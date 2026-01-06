"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Section2() {
  return (
    <div className='bg-[url(/mountain.png)] relative bg-cover bg-center bg-no-repeat h-[600px]'>

      <motion.div
        className='w-[300px] absolute top-[208px]  right-[60px] text-white'
        initial={{ x: 50, opacity: 0 }}  // o'ng tomondan boshlanadi
        animate={{ x: 0, opacity: 1 }}   // asl holatga keladi
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // animatsiya
      >
        <p className='font-normal text-[14px] leading-[20px] tracking-[2px] uppercase'>
          Sunset at Mount Fuji
        </p>
        <p className='font-normal text-[14px] leading-[20px] text-[#C0C0C0] tracking-normal mt-2'>
          Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.
        </p>
      </motion.div>

    </div>
  )
}
