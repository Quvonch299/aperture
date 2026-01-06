"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function End() {
  return (
    <div className='bg-black flex flex-col items-center'>

      {/* Heading */}
      <motion.h2
        className='font-normal pt-[113px] text-[40px] leading-[42px] tracking-normal text-center mb-[15px] text-white w-[571px]'
        initial={{ y: 50, opacity: 0 }}    // pastdan boshlanadi
        whileInView={{ y: 0, opacity: 1 }} // yuqoriga ko‘tariladi
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        Need help with photography or videography?
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className='text-[#C0C0C0] font-normal text-[24px] leading-[30px] tracking-normal text-center mb-[22px]'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        We`re here for you!
      </motion.p>

      {/* Button */}
      <motion.button
        className="flex items-center mb-[100px] text-black justify-center gap-2 bg-white w-[143px] h-[42px] rounded-[14px] font-normal text-[15px] leading-[20px] tracking-[0.4px]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <span className="w-[32px] h-[32px] bg-black rounded-full"></span>
        Get in touch
      </motion.button>

    </div>
  )
}
