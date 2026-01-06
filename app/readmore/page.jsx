"use client"
import React, { useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import ContactModal from "./ContactModal"  // Modalni import qilamiz

const cardData = {
  product: {
    title: "Product Photography",
    img: "/sec1.png",
    intro: "Product Photography is all about showcasing items in the best possible way. High-quality lighting, angles, and presentation are key.",
    bullets: [
      "Studio lighting setups for perfect exposure",
      "Lifestyle shots to show real-world usage",
      "Close-ups to highlight details",
      "Editing and retouching for commercial quality"
    ],
    tips: [
      "Use a tripod for consistent framing",
      "Choose a neutral background for focus on the product",
      "Shoot from multiple angles to give customers a complete view",
      "Always check lighting before shooting"
    ]
  },
  architecture: {
    title: "Architecture Photography",
    img: "/sec2.png",
    intro: "Architecture Photography captures buildings and spaces in an artistic and technical manner.",
    bullets: [
      "Wide-angle shots for interior and exterior",
      "Use natural light to enhance textures",
      "Pay attention to lines and symmetry",
      "Post-process perspective corrections"
    ],
    tips: [
      "Shoot during golden hour for better shadows",
      "Include people or furniture for scale",
      "Avoid clutter in the frame",
      "Scout location before shooting"
    ]
  },
  drone: {
    title: "Drone Photography",
    img: "/sec3.png",
    intro: "Drone Photography provides breathtaking aerial views, adding creativity and perspective.",
    bullets: [
      "Capture landscapes, events, and architecture",
      "Plan routes for smooth shots",
      "Use drones with stabilization gimbals",
      "Ensure compliance with local regulations"
    ],
    tips: [
      "Check weather conditions before flying",
      "Always keep the drone in sight",
      "Experiment with different heights and angles",
      "Use ND filters for daylight shots"
    ]
  },
  wildlife: {
    title: "Wildlife Photography",
    img: "/sec4.png",
    intro: "Wildlife Photography captures animals in their natural habitat, documenting behavior and beauty.",
    bullets: [
      "Use telephoto lenses for distance shots",
      "Focus on behavior rather than just poses",
      "Respect the wildlife and environment",
      "Time your shoots for dawn or dusk lighting"
    ],
    tips: [
      "Stay patient and quiet",
      "Use camouflage when necessary",
      "Observe animal habits before shooting",
      "Always follow park rules and regulations"
    ]
  }
}

export default function ReadMorePage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "product"
  const data = cardData[type]

  const [isModalOpen, setIsModalOpen] = useState(false) // Modal state

  if (!data) return <p className="text-white text-center mt-20">Card data not found.</p>

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center p-10 md:p-20">
      
      {/* Title */}
      <motion.h1
        className="text-[48px] font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {data.title}
      </motion.h1>

      {/* Intro Text */}
      <motion.p
        className="text-center max-w-4xl text-[20px] leading-[30px] mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {data.intro}
      </motion.p>

      {/* Image */}
      <motion.div
        className="mb-10 w-full max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Image src={data.img} width={800} height={500} alt={data.title} className="rounded-lg shadow-lg"/>
      </motion.div>

      {/* Bulleted Points */}
      <motion.div
        className="mb-10 w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Key Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-[18px] leading-[28px]">
          {data.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </motion.div>

      {/* Tips */}
      <motion.div
        className="mb-10 w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Pro Tips</h2>
        <ul className="list-decimal list-inside space-y-2 text-[18px] leading-[28px]">
          {data.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-white text-black px-8 py-3 rounded-xl font-semibold text-lg mb-10"
        onClick={() => setIsModalOpen(true)} // Modal ochish
      >
        Get in Touch
      </motion.button>

      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  )
}
