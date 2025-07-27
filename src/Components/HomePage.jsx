"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

// Simple SVG Icons as components
const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Play = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
)

const Sparkles = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3l1.5 1.5L5 6l-1.5-1.5L5 3zM19 3l1.5 1.5L19 6l-1.5-1.5L19 3zM12 12l1.5 1.5L12 15l-1.5-1.5L12 12zM5 21l1.5-1.5L5 18l-1.5 1.5L5 21zM19 21l1.5-1.5L19 18l-1.5 1.5L19 21z"
    />
  </svg>
)

// Array of image URLs for the carousel
const images = [
  "/content/6.jpg",
  "/content/7.jpg",
  "/content/3.jpg",
  "/content/4.jpg",
  "/content/1.jpg",
  "/content/2.jpg",
  "/content/8.jpg",
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
}

const imageVariants = {
  enter: {
    opacity: 0,
    scale: 1.05,
    rotateY: 5,
  },
  center: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    rotateY: -5,
    transition: {
      duration: 0.4,
    },
  },
}

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    // Key changes: pt-16 for header space, pb-4 for footer space, calc height
    <div
      className="bg-gradient-to-br from-slate-50 via-white to-rose-50 overflow-hidden pt-16 pb-4"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ec4899 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <motion.div
          className="flex-1 flex flex-col justify-center px-6 lg:px-12 py-6 lg:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 
                         border border-rose-200 rounded-full px-3 py-1.5 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-xs font-medium text-rose-700">Latest Drop</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-3"
            >
              <span
                className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 
                             bg-clip-text text-transparent"
              >
                NEW
              </span>
              <br />
              <span
                className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 
                             bg-clip-text text-transparent"
              >
                COLLECTION
              </span>
            </motion.h1>

            {/* Year with decorative elements */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1" />
              <span className="text-xl lg:text-2xl font-light text-slate-600 tracking-[0.2em]">2024</span>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6 max-w-md"
            >
              Discover our latest curated collection featuring contemporary designs that blend timeless elegance with
              modern sophistication.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link
                to="/dressing"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-slate-900 to-slate-800 
                           text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide
                           hover:from-rose-500 hover:to-pink-600 transform hover:scale-105 
                           transition-all duration-300 ease-out shadow-lg hover:shadow-xl
                           focus:outline-none focus:ring-4 focus:ring-rose-500/20"
              >
                <span>Shop Now</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-200">
              <div>
                <div className="text-lg font-bold text-slate-900">500+</div>
                <div className="text-xs text-slate-600">New Arrivals</div>
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">50K+</div>
                <div className="text-xs text-slate-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">4.9★</div>
                <div className="text-xs text-slate-600">Customer Rating</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <div className="flex-1 relative h-[40vh] lg:h-full">
          {/* Image Carousel */}
          <div className="relative h-full rounded-l-2xl lg:rounded-l-3xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`Fashion Collection Image ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

            {/* Navigation Controls */}
            <div className="absolute inset-y-0 left-3 flex items-center">
              <button
                onClick={prevImage}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30
                           hover:bg-white/30 transition-all duration-200 group"
              >
                <ChevronLeft className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-3 flex items-center">
              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30
                           hover:bg-white/30 transition-all duration-200 group"
              >
                <ChevronRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Auto-play Control */}
            <div className="absolute top-3 right-3">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30
                           hover:bg-white/30 transition-all duration-200 group"
              >
                <Play
                  className={`w-4 h-4 text-white transition-all duration-200 ${
                    isAutoPlaying ? "opacity-100" : "opacity-50"
                  }`}
                />
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-3 left-3">
              <div className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <span className="text-white text-xs font-medium">
                  {String(currentImageIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === index ? "bg-rose-500 scale-125 shadow-lg" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements - Positioned to avoid header/footer */}
      <div
        className="absolute top-20 left-12 w-8 h-8 bg-gradient-to-br from-rose-200 to-pink-200 
                      rounded-full opacity-60 animate-pulse"
      />
      <div
        className="absolute bottom-8 right-16 w-6 h-6 bg-gradient-to-br from-purple-200 to-indigo-200 
                      rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}

export default HomePage
