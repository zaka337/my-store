"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
// CORRECTED IMPORT: Using ../data/jewelry as requested
import jewelryProducts, { getUniqueJewelryCategories } from "../data/jewelry"

// Ultra-smooth animation variants optimized for performance
const pageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, // Reduced for smoother stagger
      duration: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 5 }, // Minimal movement
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

const detailPageVariants = {
  initial: { opacity: 0, scale: 0.98 }, // Minimal scale change
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.98 },
}

const detailPageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.15, // Super fast transition
}

// Enhanced Skeleton Card with jewelry elements
const SkeletonCard = () => (
  <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-2 sm:p-4 animate-pulse flex flex-col items-center text-center relative overflow-hidden">
    {/* Subtle shimmer effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>

    <div className="w-full h-24 sm:h-32 md:h-48 bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 rounded-md sm:rounded-lg mb-2 sm:mb-4 relative">
      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-3 h-3 sm:w-6 sm:h-6 bg-amber-200 rounded-full"></div>
      <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-2 h-2 sm:w-4 sm:h-4 bg-yellow-200 rounded-full"></div>
      {/* Jewelry sparkle effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-300 text-lg sm:text-2xl">
        💎
      </div>
    </div>
    <div className="h-3 sm:h-6 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full w-3/4 mb-1 sm:mb-2"></div>
    <div className="h-2 sm:h-4 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full w-1/2 mb-1 sm:mb-2"></div>
    <div className="h-2 sm:h-4 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full w-1/3 mb-2 sm:mb-4"></div>
    <div className="h-6 sm:h-10 bg-gradient-to-r from-amber-300 to-yellow-300 rounded-full w-2/3"></div>
  </div>
)

const JewelryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // ✅ Cleanup animations on unmount
  useEffect(() => {
    return () => {
      // Cleanup any running animations when component unmounts
      const animatedElements = document.querySelectorAll("[data-framer-motion]")
      animatedElements.forEach((el) => {
        if (el.style) {
          el.style.transform = "none"
          el.style.transition = "none"
        }
      })
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const categories = getUniqueJewelryCategories()

  // Simple filtering without search
  const filteredProducts =
    selectedCategory === "All"
      ? jewelryProducts
      : jewelryProducts.filter((product) => product.category === selectedCategory)

  useEffect(() => {
    const scrollContainer = document.querySelector(".custom-scrollbar")
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [selectedCategory, selectedProduct])

  // Enhanced star rendering with golden jewelry theme
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
      <div className="flex text-amber-400 drop-shadow-sm">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-lg">
            ★
          </span>
        ))}
        {halfStar && (
          <span key="half" className="text-amber-300 text-lg">
            ☆
          </span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300 text-lg">
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full bg-gradient-to-br from-amber-50/40 via-white to-yellow-50/40 relative min-h-screen">
      {/* Luxury floating elements for jewelry theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-200/10 to-yellow-200/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-r from-yellow-200/10 to-orange-200/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        {/* Floating jewelry elements */}
        <div
          className="absolute top-1/4 right-1/4 text-amber-300/20 text-6xl animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          💎
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-yellow-400/20 text-4xl animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          ✨
        </div>
        <div
          className="absolute top-1/2 left-1/6 text-orange-300/20 text-5xl animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          👑
        </div>
      </div>

      <motion.div
        className="relative z-10 w-full flex flex-col items-center p-1 sm:p-2 md:p-4 lg:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Enhanced luxury title with decorative elements */}
        <motion.div
          className="text-center mb-2 sm:mb-4 md:mb-8 mt-16 sm:mt-20 md:mt-24 lg:mt-16 px-1 sm:px-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-4 drop-shadow-lg">
              Jewelry Collection
            </h1>

            {/* Mobile-optimized decorative elements */}
            <div className="absolute -top-0.5 -left-1 sm:-top-1 sm:-left-2 md:-top-2 md:-left-4 text-sm sm:text-lg md:text-2xl opacity-40 animate-pulse">
              💎
            </div>
            <div
              className="absolute -top-0.5 -right-1 sm:-top-1 sm:-right-2 md:-top-2 md:-right-4 text-sm sm:text-lg md:text-2xl opacity-40 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              ✨
            </div>
            <div
              className="absolute -bottom-0.5 left-1/4 text-xs sm:text-sm md:text-xl opacity-40 animate-pulse"
              style={{ animationDelay: "1s" }}
            >
              👑
            </div>
            <div
              className="absolute -bottom-0.5 right-1/4 text-xs sm:text-sm md:text-xl opacity-40 animate-pulse"
              style={{ animationDelay: "1.5s" }}
            >
              💍
            </div>
          </div>

          <motion.div
            className="w-16 sm:w-20 md:w-32 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 mx-auto rounded-full mb-1 sm:mb-2 md:mb-4"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <p className="text-gray-600 text-xs sm:text-sm md:text-lg font-light italic px-2 sm:px-4">
            ✨ Discover timeless elegance ✨
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedProduct ? (
            // Enhanced Product Detail View - Ultra Compact with luxury theme
            <motion.div
              key="product-detail"
              variants={detailPageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={detailPageTransition}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gradient-to-br from-white to-amber-50/30 backdrop-blur-sm rounded-lg shadow-xl p-2 sm:p-3 md:p-4 flex flex-col gap-1 sm:gap-2 md:gap-3 relative mx-auto border border-amber-100 my-1 sm:my-2"
            >
              {/* Mobile-optimized back button */}
              <motion.button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs hover:from-yellow-500 hover:to-amber-500 transition-colors duration-200 flex items-center gap-0.5 sm:gap-1 z-10 shadow-md"
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  className="sm:w-10 sm:h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                <span className="hidden sm:inline">Back</span>
              </motion.button>

              {/* Mobile-optimized product image */}
              <div className="w-full flex justify-center items-center mt-4 sm:mt-6 md:mt-4">
                <div className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">
                  <img
                    src={selectedProduct.baseImageUrl || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-24 sm:h-32 md:h-40 object-contain rounded-lg shadow-md border border-amber-100 bg-gradient-to-br from-amber-50 to-yellow-50"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "https://placehold.co/400x400/F59E0B/FFFFFF?text=💎+Jewelry"
                    }}
                  />
                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 text-xs sm:text-sm animate-pulse">
                    💎
                  </div>
                  <div
                    className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 text-xs animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    ✨
                  </div>
                </div>
              </div>

              {/* Mobile-optimized product info */}
              <div className="w-full flex flex-col px-0.5 sm:px-1">
                <h2 className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-amber-800 to-yellow-700 bg-clip-text text-transparent mb-0.5 sm:mb-1 text-center">
                  {selectedProduct.name}
                </h2>
                <p className="text-xs sm:text-sm text-amber-700 mb-1 sm:mb-2 font-medium text-center">
                  {selectedProduct.brand}
                </p>
                <div className="mb-1 sm:mb-2 flex justify-center text-xs sm:text-sm">
                  {renderStars(selectedProduct.rating)}
                </div>
                <p className="text-gray-700 mb-2 sm:mb-3 leading-relaxed text-xs line-clamp-2 text-center">
                  {selectedProduct.description}
                </p>

                <h3 className="text-xs sm:text-sm font-bold text-amber-800 mb-1 sm:mb-2 flex items-center justify-center gap-0.5 sm:gap-1">
                  Variants <span className="text-xs">💍</span>
                </h3>

                {/* Mobile-optimized variants display */}
                <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-1 sm:gap-1.5 mb-2 sm:mb-3 max-h-24 sm:max-h-32 overflow-y-auto custom-scrollbar">
                  {selectedProduct.variants.slice(0, 8).map((variant, index) => (
                    <div
                      key={variant.id}
                      className="bg-gradient-to-br from-white to-amber-50 rounded-md p-1 sm:p-1.5 shadow-sm border border-amber-100 cursor-pointer hover:shadow-md transition-shadow duration-200"
                    >
                      <img
                        src={variant.imageUrl || selectedProduct.baseImageUrl}
                        alt={variant.name}
                        className="w-4 h-4 sm:w-5 sm:h-5 object-cover rounded-sm border border-amber-200 mb-0.5 sm:mb-1 mx-auto"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = "https://placehold.co/50x50/F59E0B/FFFFFF?text=💎"
                        }}
                      />
                      <p className="font-semibold text-amber-800 text-xs text-center mb-0.5 line-clamp-1">
                        {variant.name}
                      </p>
                      <p className="text-xs font-bold text-center bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                        ${variant.price.toFixed(2)}
                      </p>
                      {variant.color && (
                        <div className="flex items-center justify-center mt-0.5">
                          <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-amber-300 shadow-sm"
                            style={{ backgroundColor: variant.color }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile-optimized add to cart button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold hover:from-yellow-600 hover:to-amber-500 transition-colors duration-200 shadow-md flex items-center justify-center gap-0.5 sm:gap-1"
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart <span className="text-xs sm:text-sm">💎</span>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            // Enhanced Product Grid View with luxury theme
            <motion.div
              key="product-grid"
              variants={pageContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full flex flex-col items-center"
            >
              {/* Enhanced Category Filter Buttons with luxury theme */}
              <motion.div
                className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3 mb-2 sm:mb-4 md:mb-8 px-1 sm:px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setSelectedProduct(null)
                      setIsLoading(true)
                      setTimeout(() => setIsLoading(false), 300)
                    }}
                    className={`px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-xl"
                        : "bg-white/90 backdrop-blur-sm text-amber-700 hover:bg-amber-50 hover:shadow-xl border border-amber-100"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.1 },
                    }}
                    whileTap={{
                      scale: 0.99,
                      transition: { duration: 0.05 },
                    }}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>

              {isLoading ? (
                // Enhanced Skeleton Grid with jewelry theme
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full max-w-7xl px-2 sm:px-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                      <SkeletonCard />
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Enhanced Product Grid with luxury jewelry theme
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-3 md:gap-4 lg:gap-6 w-full max-w-7xl px-1 sm:px-2 md:px-4">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="group bg-gradient-to-br from-white to-amber-50/30 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-amber-100 relative h-full flex flex-col"
                      variants={cardVariants}
                      whileHover={{
                        scale: 1.005,
                        y: -1,
                        transition: {
                          duration: 0.15,
                          ease: "easeOut",
                        },
                      }}
                      whileTap={{
                        scale: 0.995,
                        transition: { duration: 0.1 },
                      }}
                      onClick={() => {
                        setIsLoading(true)
                        setTimeout(() => {
                          setSelectedProduct(product)
                          setIsLoading(false)
                        }, 150)
                      }}
                    >
                      {/* Luxury gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Mobile-optimized product image */}
                      <div className="relative overflow-hidden rounded-t-lg sm:rounded-t-xl">
                        <img
                          src={product.baseImageUrl || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform bg-gradient-to-br from-amber-50 to-yellow-50"
                          onError={(e) => {
                            e.target.onerror = null
                            e.target.src = "https://placehold.co/300x300/F59E0B/FFFFFF?text=💎+Jewelry"
                          }}
                        />

                        {/* Mobile-optimized luxury floating elements */}
                        <div className="absolute top-1 right-1 sm:top-2 sm:right-2 text-sm sm:text-lg md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-amber-400">
                          💎
                        </div>
                        <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 text-xs sm:text-sm md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-yellow-400">
                          ✨
                        </div>
                        <div className="absolute top-1 left-1 sm:top-2 sm:left-2 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-orange-400">
                          👑
                        </div>
                      </div>

                      {/* Mobile-optimized product info */}
                      <div className="p-1.5 sm:p-3 md:p-4 relative z-10 flex-1 flex flex-col justify-between">
                        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-amber-800 mb-0.5 sm:mb-1 md:mb-2 group-hover:text-amber-600 transition-colors line-clamp-1">
                          {product.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-amber-600 mb-1 sm:mb-2 md:mb-3 font-medium">
                          {product.brand}
                        </p>

                        <div className="mb-1 sm:mb-3 md:mb-4 flex justify-center sm:justify-start">
                          <div className="flex text-amber-400 drop-shadow-sm scale-75 sm:scale-100">
                            {[...Array(Math.floor(product.rating))].map((_, i) => (
                              <span key={`full-${i}`} className="text-sm sm:text-lg">
                                ★
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-1 sm:mb-3 md:mb-4">
                          {product.variants.length > 1 ? (
                            <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                              From ${Math.min(...product.variants.map((v) => v.price)).toFixed(2)}
                            </p>
                          ) : (
                            <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                              ${product.variants[0].price.toFixed(2)}
                            </p>
                          )}

                          <span className="text-xs text-amber-600 bg-amber-50 px-1 py-0.5 sm:px-2 sm:py-1 rounded-full border border-amber-200">
                            {product.variants.length}
                          </span>
                        </div>

                        {/* Mobile-optimized view details button */}
                        <button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-1 sm:py-1.5 md:py-3 rounded-md sm:rounded-lg md:rounded-xl text-xs sm:text-sm font-semibold hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 shadow-md group-hover:shadow-lg transform group-hover:scale-105 flex items-center justify-center gap-0.5 sm:gap-1 md:gap-2">
                          <span className="hidden sm:inline">View Details</span>
                          <span className="sm:hidden">View</span>
                          <span className="text-xs sm:text-sm">💎</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Custom Styles with luxury theme */}
      <style jsx global>{`
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #f59e0b #fef3c7;
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #fef3c7;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #f59e0b, #eab308);
    border-radius: 10px;
    border: 1px solid #fbbf24;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #eab308, #f59e0b);
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .group {
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  
  /* Ensure main scroll works */
  html, body {
    overflow-x: hidden;
  }
  
  /* Fix for mobile scrolling */
  @media (max-width: 768px) {
    .custom-scrollbar {
      -webkit-overflow-scrolling: touch;
    }
  }
`}</style>
    </div>
  )
}

export default JewelryPage
