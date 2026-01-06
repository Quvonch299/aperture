"use client"
import Image from 'next/image'
import React from 'react'

export default function Section5() {
  const images = [
    { src: '/1.png', alt: 'Client 1', width: 128, height: 30 },
    { src: '/2.png', alt: 'Client 2', width: 128, height: 78 },
    { src: '/3.png', alt: 'Client 3', width: 128, height: 20 },
    { src: '/4.png', alt: 'Client 4', width: 128, height: 36 },
    { src: '/5.png', alt: 'Client 5', width: 128, height: 32 },
  ];

  // Duplicat qilish – infinite scroll uchun
  const scrollingImages = [...images, ...images];

  return (
    <div className='bg-black py-[100px] overflow-hidden'>
      <div className='text-center'>
        <h2 className='font-normal text-[40px] leading-[42px] tracking-normal text-white'>Past clients</h2>
        <p className='mt-[12px] font-normal text-[24px] leading-[30px] tracking-normal text-[#C0C0C0]'>
          Trusted by your favourite companies
        </p>
      </div>

      <div className='mt-[50px]'>
        <div className='flex animate-marquee gap-[109px]'>
          {scrollingImages.map((img, index) => (
            <div key={index} className='flex-shrink-0'>
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
