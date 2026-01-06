"use client"
import Image from 'next/image'
import React from 'react'
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {

  const socialIcons = [
    { icon: <FaTwitter />, name: 'Twitter' },
    { icon: <FaInstagram />, name: 'Instagram' },
    { icon: <FaFacebookF />, name: 'Facebook' }
  ]

  return (
    <motion.footer
      className="bg-black text-white px-10 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >

      <div className="max-w-6xl m-auto flex justify-between mb-[36px] mt-[100px]">
        <div className="flex flex-col gap-5">
          <Image src={'/icon/navbarlogo.svg'} width={128} height={31} alt='Logo' />
          <p className="text-sm font-normal">
            Photographers & videographers capturing the world around us.
          </p>
        </div>

        <div className='flex gap-[54px]'>
          <div className="flex mt-[3px] flex-col gap-2">
            <h3 className="text-sm font-semibold mb-2">BUSINESS AREAS</h3>
            <ul className="text-sm font-normal space-y-[10px]">
              <li>Product Photography</li>
              <li>Architecture Photography</li>
              <li>Drone Photography</li>
              <li>Wildlife Photography</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold mb-2">PAGES</h3>
            <ul className="text-sm font-normal space-y-[10px]">
              <li>Gear cage</li>
              <li>Featured images</li>
              <li>Contact</li>
              <li>Style guide</li>
              <li>Instructions</li>
              <li>Changelog</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='h-[2px] w-full max-w-[1168px] bg-white mb-[36px] m-auto'></div>

      <div className="flex flex-col md:flex-row justify-between max-w-[1168px] m-auto mb-[36px] items-center gap-4 md:gap-0">
        {/* Newsletter */}
        <motion.div
          className='flex-1'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-[8px] text-sm font-semibold">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p className="text-xs font-normal mb-2">Read about all the things we do.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 h-[52px] rounded-[12px] text-black bg-white outline-none w-full md:w-[458px]"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="absolute border bg-black text-white top-[11px] w-[63px] h-[30px] right-[6px] rounded-[11px]"
            >
              Go
            </motion.button>
          </div>
        </motion.div>

      </div>

      <div className='h-[2px] w-full max-w-[1168px] bg-white m-auto mb-[56px]'></div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row max-w-[1168px] m-auto justify-between items-center text-sm font-normal gap-4 md:gap-0">
        <p>© Aperture Photography, Inc. All rights reserved. Licensing.</p>
        <div className="flex gap-4 text-lg">
          {socialIcons.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2, color: "#1DA1F2" }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="cursor-pointer"
              title={item.name}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      </div>

    </motion.footer>
  )
}
