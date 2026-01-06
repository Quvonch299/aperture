"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Section6() {
  return (
    <div className='bg-[url(/winter.png)] relative bg-cover bg-center bg-no-repeat h-[600px]'>

      <motion.div
        className='w-[273px] absolute top-[208px] right-[87px] text-white'
        initial={{ x: 50, opacity: 0 }}  // o'ng tomondan boshlanadi
        whileInView={{ x: 0, opacity: 1 }} // asl joyga keladi
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // animatsiya sozlamasi
      >
        <p className='font-normal text-[14px] leading-[20px] tracking-[2px] uppercase'>
          Star fall in the Himalayas
        </p>
        <p className='font-normal text-[14px] leading-[20px] text-[#C0C0C0] tracking-normal mt-2'>
          Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
        </p>
      </motion.div>

    </div>
  )
}
