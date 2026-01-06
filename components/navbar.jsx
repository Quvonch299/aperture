"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.div
      className='bg-black p-[30px] text-white  '
      initial={{ y: -100, opacity: 0 }}   // Navbar yuqoridan boshlanadi
      animate={{ y: 0, opacity: 1 }}      // Pastga tushadi va ko'rinadi
      transition={{ duration: 0.8, ease: "easeOut" }}  // animatsiya sozlamasi
    >
      <div className='max-w-6xl m-auto flex justify-between items-center'>
        {/* Logo */}
        <div>
          <Image
            src={'/icon/navbarlogo.svg'}
            width={128}
            height={31}
            alt='Logo'
          />
        </div>

        {/* Menu va button */}
        <div className='items-center flex gap-[36px]'>
          <a className='font-normal text-[15px] leading-[20px] tracking-normal' href="">Business areas</a>
          <a className='font-normal text-[15px] leading-[20px] tracking-normal' href="">Featured images</a>
          <a className='font-normal text-[15px] leading-[20px] tracking-normal' href="">Gear cage</a>
          <a className='font-normal text-[15px] leading-[20px] tracking-normal' href="">Contact</a>
          <button className='w-[155px] h-[42px] rounded-[14px] bg-white text-black font-normal text-[16px] leading-[20px] tracking-[0.4px]'>
            Get template
          </button>
        </div>
      </div>
    </motion.div>
  )
}
