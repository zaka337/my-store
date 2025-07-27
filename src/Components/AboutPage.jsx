"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

// Custom SVG Icons
const SparkleIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0l2.4 7.2L22 12l-7.6 4.8L12 24l-2.4-7.2L2 12l7.6-4.8L12 0z" />
  </svg>
)

const HeartIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: HeartIcon },
    { number: "1000+", label: "Products", icon: SparkleIcon },
    { number: "5★", label: "Rating", icon: StarIcon },
    { number: "24/7", label: "Support", icon: HeartIcon },
  ]

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started with a dream to make beauty accessible to everyone",
      color: "from-pink-500 to-rose-500",
    },
    {
      year: "2021",
      title: "First Milestone",
      description: "Reached 10,000 satisfied customers across the globe",
      color: "from-purple-500 to-indigo-500",
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Launched jewelry and fashion collections",
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Leading the industry with sustainable beauty solutions",
      color: "from-emerald-500 to-teal-500",
    },
  ]

  const values = [
    {
      title: "Quality First",
      description: "Every product is carefully curated and tested for excellence",
      icon: "✨",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      title: "Sustainability",
      description: "Committed to eco-friendly practices and ethical sourcing",
      icon: "🌱",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Innovation",
      description: "Constantly evolving with the latest trends and technologies",
      icon: "🚀",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Community",
      description: "Building a supportive community of beauty enthusiasts",
      icon: "💝",
      gradient: "from-pink-400 to-rose-500",
    },
  ]

  return (
    // FIXED: Removed padding, full height from header to footer
    <div
      className="bg-gradient-to-br from-slate-50 via-white to-rose-50 overflow-hidden"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{ left: "10%", top: "20%" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          style={{ right: "10%", bottom: "20%" }}
        />
      </div>

      {/* FIXED: Full height scrollable container, no padding */}
      <div className="relative z-10 h-full overflow-y-auto custom-scrollbar">
        {/* Hero Section - FIXED: Starts from top, no padding */}
        <section className="min-h-screen flex items-center justify-center px-8 lg:px-16">
          <motion.div className="text-center w-full" variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 mb-6">
                ✨ About GlamourHub
              </span>
              <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
                Beauty
                <br />
                <span className="text-5xl lg:text-7xl">Redefined</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto"
            >
              We're not just another beauty brand. We're a movement that celebrates individuality, embraces diversity,
              and empowers everyone to express their unique beauty story.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
              <Link
                to="/dressing"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Explore Collection
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-purple-400 hover:text-purple-600 transition-all duration-300">
                Watch Our Story
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section - Full width, no padding from edges */}
        <section className="py-20 px-8 lg:px-16 bg-white/50 backdrop-blur-sm">
          <motion.div
            className="w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={scaleIn} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Timeline Section - Full width */}
        <section className="py-20 px-8 lg:px-16">
          <motion.div
            className="w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a small dream to a global beauty destination, here's how we've grown together
              </p>
            </motion.div>

            <div className="relative w-full">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex items-center mb-16 w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div
                      className={`inline-block p-6 bg-gradient-to-r ${item.color} rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                    >
                      <div className="text-2xl font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-white/90">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-purple-400 rounded-full shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Values Section - Full width */}
        <section className="py-20 px-8 lg:px-16 bg-gradient-to-r from-purple-50 to-pink-50">
          <motion.div
            className="w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section - Full width, extends to bottom */}
        <section className="py-20 px-8 lg:px-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <motion.div
            className="w-full text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Beauty Journey?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-12 opacity-90 max-w-4xl mx-auto">
              Join thousands of beauty enthusiasts who trust GlamourHub for their style needs
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
              <Link
                to="/dressing"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Shop Now
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* Floating Elements - Positioned relative to the full container */}
      <div
        className="absolute top-20 left-12 w-8 h-8 bg-gradient-to-br from-rose-200 to-pink-200 
                      rounded-full opacity-60 animate-pulse"
      />
      <div
        className="absolute bottom-4 right-16 w-6 h-6 bg-gradient-to-br from-purple-200 to-indigo-200 
                      rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}

export default AboutPage
