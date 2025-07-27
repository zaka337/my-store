"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
// CORRECTED IMPORT: Using ../data/products as requested
import allProducts, { getUniqueMakeupCategories } from "../data/products"

const makeupProducts = allProducts.makeup

// Simplified animation variants for better performance
const pageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reduced from 0.1
      duration: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 10 }, // Reduced from y: 20
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }, // Added specific duration
  },
}

const detailPageVariants = {
  initial: { opacity: 0, scale: 0.95 }, // Changed from x translation to scale
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.95 },
}

const detailPageTransition = {
  type: "tween",
  ease: "easeOut", // Changed from easeInOut
  duration: 0.2, // Reduced from 0.4
}

// Enhanced Skeleton Card with beauty elements
const SkeletonCard = () => (
  <div className="bg-white rounded-xl shadow-lg p-4 animate-pulse flex flex-col items-center text-center relative overflow-hidden">
    {/* Subtle shimmer effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>

    <div className="w-full h-48 bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 rounded-lg mb-4 relative">
      <div className="absolute top-2 right-2 w-6 h-6 bg-pink-200 rounded-full"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 bg-purple-200 rounded-full"></div>
    </div>
    <div className="h-6 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full w-3/4 mb-2"></div>
    <div className="h-4 bg-gradient-to-r from-purple-200 to-rose-200 rounded-full w-1/2 mb-2"></div>
    <div className="h-4 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full w-1/3 mb-4"></div>
    <div className="h-10 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full w-2/3"></div>
  </div>
)

const MakeupPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const categories = getUniqueMakeupCategories()

  // Simple filtering without search
  const filteredProducts =
    selectedCategory === "All"
      ? allProducts.makeup
      : allProducts.makeup.filter((product) => product.category === selectedCategory)

  useEffect(() => {
    const scrollContainer = document.querySelector(".custom-scrollbar")
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [selectedCategory, selectedProduct])

  // Enhanced star rendering with beauty
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
      <div className="flex text-yellow-400 drop-shadow-sm">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-lg">
            ★
          </span>
        ))}
        {halfStar && (
          <span key="half" className="text-yellow-300 text-lg">
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50/40 via-white to-purple-50/40 relative">
      {/* Simplified floating elements for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-200/10 to-rose-200/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-r from-rose-200/10 to-pink-200/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <motion.div
        className="relative z-10 w-full min-h-screen flex flex-col items-center p-2 sm:p-4 md:p-8 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Enhanced title with decorative elements */}
        <motion.div
          className="text-center mb-3 sm:mb-8 mt-20 sm:mt-24 md:mt-16 px-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-2 sm:mb-4 drop-shadow-lg">
              Makeup Collection
            </h1>

            {/* Decorative elements around title - smaller on mobile */}
            <div className="absolute -top-1 -left-2 sm:-top-2 sm:-left-4 text-lg sm:text-2xl opacity-30">✨</div>
            <div className="absolute -top-1 -right-2 sm:-top-2 sm:-right-4 text-lg sm:text-2xl opacity-30">💫</div>
            <div className="absolute -bottom-1 left-1/4 text-sm sm:text-xl opacity-30">💄</div>
            <div className="absolute -bottom-1 right-1/4 text-sm sm:text-xl opacity-30">💋</div>
          </div>

          <motion.div
            className="w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 mx-auto rounded-full mb-2 sm:mb-4"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <p className="text-gray-600 text-sm sm:text-lg font-light italic px-4">✨ Discover your perfect beauty ✨</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedProduct ? (
            // Enhanced Product Detail View - Ultra Compact
            <motion.div
              key="product-detail"
              variants={detailPageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={detailPageTransition}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 relative mx-auto border border-pink-100 my-2"
            >
              {/* Enhanced Back Button - Ultra compact */}
              <motion.button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs hover:from-purple-500 hover:to-pink-500 transition-colors duration-200 flex items-center gap-1 z-10 shadow-md"
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
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
                Back
              </motion.button>

              {/* Product Image - Ultra compact */}
              <div className="w-full flex justify-center items-center mt-6 sm:mt-4">
                <div className="relative w-full max-w-[200px] sm:max-w-[250px]">
                  <img
                    src={selectedProduct.baseImageUrl || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-32 sm:h-40 object-contain rounded-lg shadow-md border border-pink-100"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "https://placehold.co/400x400/E0E0E0/333333?text=Image+Error"
                    }}
                  />
                  <div className="absolute -top-1 -right-1 text-sm animate-pulse">✨</div>
                </div>
              </div>

              {/* Enhanced Product Info - Ultra compact */}
              <div className="w-full flex flex-col px-1">
                <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1 text-center">
                  {selectedProduct.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2 font-medium text-center">{selectedProduct.brand}</p>
                <div className="mb-2 flex justify-center text-sm">{renderStars(selectedProduct.rating)}</div>
                <p className="text-gray-700 mb-3 leading-relaxed text-xs line-clamp-2 text-center">
                  {selectedProduct.description}
                </p>

                <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center justify-center gap-1">
                  Variants <span className="text-xs">💄</span>
                </h3>

                {/* Ultra Compact Variants Display */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 mb-3 max-h-32 overflow-y-auto custom-scrollbar">
                  {selectedProduct.variants.slice(0, 8).map((variant, index) => (
                    <div
                      key={variant.id}
                      className="bg-gradient-to-br from-white to-pink-50 rounded-md p-1.5 shadow-sm border border-pink-100 cursor-pointer"
                    >
                      <img
                        src={variant.imageUrl || selectedProduct.baseImageUrl}
                        alt={variant.name}
                        className="w-5 h-5 object-cover rounded-sm border border-pink-200 mb-1 mx-auto"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = "https://placehold.co/50x50/E0E0E0/333333?text=Err"
                        }}
                      />
                      <p className="font-semibold text-gray-800 text-xs text-center mb-0.5 line-clamp-1">
                        {variant.name}
                      </p>
                      <p className="text-xs font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        ${variant.price.toFixed(2)}
                      </p>
                      {variant.color && (
                        <div className="flex items-center justify-center mt-0.5">
                          <div
                            className="w-2 h-2 rounded-full border border-white shadow-sm"
                            style={{ backgroundColor: variant.color }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Ultra Compact Add to Cart Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2.5 rounded-full text-sm font-bold hover:from-purple-600 hover:to-pink-500 transition-colors duration-200 shadow-md flex items-center justify-center gap-1"
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart <span className="text-sm">✨</span>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            // Enhanced Product Grid View
            <motion.div
              key="product-grid"
              variants={pageContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full flex flex-col items-center"
            >
              {/* Enhanced Category Filter Buttons */}
              <motion.div
                className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-8 px-2"
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
                      setTimeout(() => setIsLoading(false), 500)
                    }}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl"
                        : "bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl border border-pink-100"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }} // Reduced from 1.05
                    whileTap={{ scale: 0.98 }} // Reduced from 0.95
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>

              {isLoading ? (
                // Enhanced Skeleton Grid
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full max-w-7xl px-2 sm:px-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <SkeletonCard />
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Enhanced Product Grid
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full max-w-7xl px-2 sm:px-0">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-pink-100 relative"
                      variants={cardVariants}
                      whileHover={{
                        scale: 1.01, // Reduced from 1.02
                        y: -2, // Reduced from -4
                        transition: { duration: 0.2 }, // Reduced from 0.3
                      }}
                      whileTap={{ scale: 0.99 }} // Reduced from 0.98
                      onClick={() => {
                        setIsLoading(true)
                        setTimeout(() => {
                          setSelectedProduct(product)
                          setIsLoading(false)
                        }, 300)
                      }}
                    >
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Product Image */}
                      <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                        <img
                          src={product.baseImageUrl || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.onerror = null
                            e.target.src = "https://placehold.co/300x300/E0E0E0/333333?text=Image+Error"
                          }}
                        />

                        {/* Floating elements on hover */}
                        <div className="absolute top-2 right-2 text-lg sm:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                          ✨
                        </div>
                        <div
                          className="absolute bottom-2 left-2 text-sm sm:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        >
                          💫
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-2 sm:p-4 md:p-5 relative z-10">
                        <h2 className="text-xs sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors line-clamp-1">
                          {product.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 font-medium">{product.brand}</p>

                        <div className="mb-3 sm:mb-4 flex justify-center sm:justify-start">
                          {renderStars(product.rating)}
                        </div>

                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          {product.variants.length > 1 ? (
                            <p className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                              From ${Math.min(...product.variants.map((v) => v.price)).toFixed(2)}
                            </p>
                          ) : (
                            <p className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                              ${product.variants[0].price.toFixed(2)}
                            </p>
                          )}

                          <span className="text-xs text-gray-500 bg-pink-50 px-2 py-1 rounded-full border border-pink-200">
                            {product.variants.length} variants
                          </span>
                        </div>

                        {/* Enhanced View Details Button */}
                        <button className="w-full bg-gradient-to-r from-gray-700 to-gray-600 text-white py-1.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-md group-hover:shadow-lg transform group-hover:scale-105 flex items-center justify-center gap-1 sm:gap-2">
                          View Details <span className="text-xs sm:text-sm">💄</span>
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

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #ec4899, #8b5cf6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
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
      `}</style>
    </div>
  )
}

export default MakeupPage
