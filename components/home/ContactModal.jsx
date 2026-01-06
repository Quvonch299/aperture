"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactModal({ isOpen, onClose }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, email, message }) 
    setSubmitted(true)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl p-8 w-full max-w-md relative shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black font-bold text-xl hover:text-red-500 transition"
              onClick={onClose}
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>

            {submitted ? (
              <p className="text-center text-green-600 font-medium text-lg">
                Thanks! Your message has been submitted.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="px-5 py-3 border border-gray-300 rounded-lg outline-none placeholder-gray-400 focus:ring-2 text-black focus:ring-black transition shadow-sm"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-5 py-3 border border-gray-300 rounded-lg outline-none placeholder-gray-400 focus:ring-2 text-black focus:ring-black transition shadow-sm"
                />

                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="px-5 py-3 border border-gray-300 rounded-lg outline-none placeholder-gray-400 focus:ring-2 text-black focus:ring-black transition shadow-sm resize-none"
                  rows={5}
                />

                <button
                  type="submit"
                  className="bg-gradient-to-r from-black to-gray-800 text-white font-semibold px-4 py-3 rounded-lg hover:from-gray-800 hover:to-black transition shadow-md"
                >
                  Submit
                </button>

              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
