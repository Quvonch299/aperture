"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Section() {

  const cards = [
    {
      title: "Product Photography",
      text: "Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.",
      img: "/section.png"
    },
    {
      title: "Architecture Photography",
      text: "Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.",
      img: "/section1.png"
    },
    {
      title: "Drone Photography",
      text: "Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.",
      img: "/section2.png"
    },
    {
      title: "Wildlife Photography",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.",
      img: "/section4.png"
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  return (
    <div className='bg-black text-white pb-[100px]'>
      <div className='max-w-6xl m-auto'>
        <div>
          <h2 className='mb-[15px] font-normal text-[40px] leading-[42px] tracking-normal text-center pt-[113px]'>
            What we do.
          </h2>
          <p className='mb-[87px] font-normal text-[23px] leading-[30px] tracking-normal text-center'>
            The areas that were specialized in.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-x-[32px] gap-y-[16px] justify-center'>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`bg-[url(${card.img})] relative bg-cover bg-center bg-no-repeat h-[600px] w-[576px]`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className='absolute bottom-[30px] ml-[30px]'>
                <h2 className='font-normal text-[14px] leading-[20px] tracking-[2px] uppercase'>
                  {card.title}
                </h2>
                <p className='w-[501px] font-normal text-[14px] leading-[20px] mt-[30px] tracking-normal'>
                  {card.text}
                </p>
                <button className="flex items-center mt-[39px] text-black justify-center gap-2 bg-white w-[143px] h-[42px] rounded-[14px] font-normal text-[15px] leading-[20px] tracking-[0.4px]">
                  <span className="w-[32px] h-[32px] bg-black rounded-full"></span>
                  Read more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
