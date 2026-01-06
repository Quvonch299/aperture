"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Section3() {

  return (
    <div className='bg-black grid grid-cols-2 justify-center items-center'>

      {/* Matn qismi */}
      <motion.div
        className='w-[600px] px-[80px] text-white'
        initial={{ x: -50, opacity: 0 }}   // chapdan boshlanadi
        whileInView={{ x: 0, opacity: 1 }} // asl joyga keladi
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className='mb-[6px] text-[#C0C0C0] font-normal text-[14px] leading-[20px] tracking-[2px] uppercase'>
          The Gear cage
        </p>
        <h2 className='mb-[14px] font-normal text-[28px] leading-[32px] tracking-[0%]'>
          The tools that we use.
        </h2>
        <p className='mb-[20px] font-normal text-[14px] leading-[20px] tracking-normal'>
          The say that no place is boring if youve had a good nights sleep and have a pocket full of unexposed film. While we dont shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.
        </p>
        <button className="flex items-center text-black justify-center gap-2 bg-white w-[143px] h-[42px] rounded-[14px] font-normal text-[15px] leading-[20px] tracking-[0.4px]">
          <span className="w-[32px] h-[32px] bg-black rounded-full"></span>
          Check it out
        </button>
      </motion.div>

      {/* Rasm qismi */}
      <motion.div
        className='bg-[url(/sec5.png)] bg-cover bg-center bg-no-repeat h-[540px]'
        initial={{ x: 50, opacity: 0 }}   // o‘ngdan boshlanadi
        whileInView={{ x: 0, opacity: 1 }} // asl joyga keladi
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
      </motion.div>

    </div>
  )
}
