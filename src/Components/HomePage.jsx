import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// IMPORTANT: Place your images in the 'public' folder (e.g., public/content/).
// Then, reference them directly using paths starting from the root (e.g., /content/your-image.jpg).
// DO NOT import them here if they are in the src folder.

// Array of image URLs for the carousel
const images = [
  "/content/6.jpg",
  "/content/7.jpg",
  "/content/3.jpg",
  "/content/4.jpg",
  "/content/1.jpg",
  "/content/2.jpg",
  "/content/8.jpg"
  // Add more image paths here, ensuring they start with '/' and point to your public folder
];


// Animation variants for elements within the home page
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      delay: 0.3
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      delay: 0.6
    }
  }
};

// Variants for the image carousel itself
const carouselImageVariants = {
  enter: { opacity: 0, scale: 1.1 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.6, ease: "easeInOut" } },
};


const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    // The root div just provides the full background and overflow handling
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Carousel - Full bleed */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Fashion Collection Image ${currentImageIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          variants={carouselImageVariants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content Overlay - Applied p-30 for 120px padding all around */}
      <div className="relative z-20 flex flex-col items-center justify-center text-light-text text-center p-30 w-full h-full"> {/* Changed p-8 to p-30 */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-4 drop-shadow-lg"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          NEW COLLECTION
        </motion.h1>
        <motion.p
          className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-10 drop-shadow-md"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...textVariants.visible.transition, delay: 0.5 }}
        >
          2024
        </motion.p>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="/dressing"
            className="inline-block bg-white text-dark-text px-12 py-4 rounded-full text-lg font-semibold uppercase tracking-wider shadow-xl
                       hover:bg-primary-pink hover:text-light-text transform hover:scale-105 transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-4 focus:ring-primary-pink focus:ring-opacity-50"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>

      {/* Subtle Navigation Dots (Optional - to show current slide and allow manual navigation) */}
      <div className="absolute bottom-8 flex space-x-2 z-30">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentImageIndex === index ? 'bg-primary-pink scale-125' : 'bg-light-text opacity-50'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
