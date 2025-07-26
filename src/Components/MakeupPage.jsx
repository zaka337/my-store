import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// CORRECTED IMPORT: Using ../data/products as requested
import allProducts, { getUniqueMakeupCategories } from '../data/products'; 

const makeupProducts = allProducts.makeup;

// Animation variants for the page container (for overall page transition)
const pageContainerVariants = { 
  hidden: { opacity: 0, y: 50 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      damping: 15, 
      stiffness: 100, 
      staggerChildren: 0.1 // Stagger animations for child elements 
    } 
  } 
}; 

// Animation variants for individual product cards (for staggered animation)
const cardVariants = { 
  hidden: { opacity: 0, y: 20, scale: 0.95 }, 
  visible: { opacity: 1, y: 0, scale: 1 } 
}; 

// Animation variants for product detail page transition
const detailPageVariants = { 
  initial: { opacity: 0, x: '100%' }, 
  in: { opacity: 1, x: 0 }, 
  out: { opacity: 0, x: '-100%' } 
}; 

const detailPageTransition = { 
  type: 'tween', 
  ease: 'easeInOut', 
  duration: 0.5 
}; 

// Skeleton Card Component 
const SkeletonCard = () => ( 
  <div className="bg-white rounded-xl shadow-lg p-4 animate-pulse flex flex-col items-center text-center"> 
    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div> 
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div> 
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div> 
    <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div> 
    <div className="h-10 bg-gray-200 rounded-full w-2/3"></div> 
  </div> 
); 

const MakeupPage = () => { 
  const [selectedCategory, setSelectedCategory] = useState('All'); 
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => { 
    const timer = setTimeout(() => { 
      setIsLoading(false); 
    }, 1000); 
    return () => clearTimeout(timer); 
  }, []); 

  const categories = getUniqueMakeupCategories(); 

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts.makeup // Using allProducts as per the import correction
    : allProducts.makeup.filter(product => product.category === selectedCategory); // Using allProducts

  useEffect(() => { 
    const scrollContainer = document.querySelector('.custom-scrollbar'); 
    if (scrollContainer) { 
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' }); 
    } 
  }, [selectedCategory, selectedProduct]); 


  // Helper function to render stars based on rating 
  const renderStars = (rating) => { 
    const fullStars = Math.floor(rating); 
    const halfStar = rating % 1 !== 0; // CORRECTED SYNTAX: Check if there's a fractional part
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); 
    return ( 
      <div className="flex text-accent-gold"> 
        {[...Array(fullStars)].map((_, i) => ( 
          <span key={`full-${i}`}>★</span> 
        ))} 
        {halfStar && <span key="half">½</span>} 
        {[...Array(emptyStars)].map((_, i) => ( 
          <span key={`empty-${i}`} className="text-gray-400">★</span> 
        ))} 
      </div> 
    ); 
  }; 

  return ( 
    <motion.div 
      // Main container for the Makeup page, handles scrolling for the overall page 
      // REMOVED pt-16 pb-4 box-border here: App.jsx handles base padding
      // Responsive page padding
      className="w-full h-full flex flex-col items-center p-4 sm:p-6 md:p-8 overflow-y-auto custom-scrollbar" 
      variants={pageContainerVariants} 
      initial="hidden" 
      animate="visible" 
    > 
      {/* Title - Centered on mobile */}
      {/* Responsive font size and margin, text-center for mobile title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-secondary-purple mb-6 sm:mb-10 drop-shadow-md mt-10 sm:mt-20 text-center">Makeup Collection</h1> 

      <AnimatePresence mode="wait"> 
        {selectedProduct ? ( 
          // Product Detail View 
          <motion.div 
            key="product-detail" 
            variants={detailPageVariants} 
            initial="initial" 
            animate="in" 
            exit="out" 
            transition={detailPageTransition} 
            // Responsive max-w, padding, gap, and flex direction
            className="w-full max-w-xl sm:max-w-2xl bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-6 relative mx-auto" 
          > 
            <button 
              onClick={() => setSelectedProduct(null)} 
              // Responsive positioning and size
              className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-gray-200 text-dark-text px-2 py-1 rounded-full text-xs sm:text-sm hover:bg-gray-300 transition-colors duration-200 flex items-center gap-1 z-10" 
            > 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg> 
              Back 
            </button> 
            
            <div className="md:w-1/2 flex justify-center items-center p-1 sm:p-2"> 
              <img 
                src={selectedProduct.baseImageUrl} 
                alt={selectedProduct.name} 
                className="w-full h-auto max-h-56 sm:max-h-80 object-contain rounded-lg shadow-md" 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/E0E0E0/333333?text=Image+Error"; }} 
              /> 
            </div> 
            <div className="md:w-1/2 flex flex-col justify-center py-1 sm:py-2"> 
              <h2 className="text-xl sm:text-2xl font-bold text-dark-text mb-0.5 sm:mb-1">{selectedProduct.name}</h2> 
              <p className="text-sm sm:text-base text-gray-700 mb-1 sm:mb-2">{selectedProduct.brand}</p> 
              <div className="mb-2 sm:mb-3">{renderStars(selectedProduct.rating)}</div> 
              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4 leading-relaxed line-clamp-3">{selectedProduct.description}</p> 

              <h3 className="text-base sm:text-lg font-semibold text-dark-text mb-1 sm:mb-2">Available Variants:</h3> 
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 justify-start overflow-y-auto max-h-[80px] sm:max-h-[120px] custom-scrollbar"> 
                {selectedProduct.variants.map(variant => ( 
                  <div key={variant.id} className="bg-soft-gray rounded-lg p-1 flex flex-col items-center gap-0.5 shadow-sm text-center min-w-[70px] sm:min-w-[80px]"> 
                    <img 
                      src={variant.imageUrl || selectedProduct.baseImageUrl} 
                      alt={variant.name} 
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md border border-gray-300 mb-0.5" 
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/50x50/E0E0E0/333333?text=Err"; }} 
                    /> 
                    <p className="font-medium text-dark-text text-xs sm:text-sm leading-tight">{variant.name}</p> 
                    <p className="text-2xs text-gray-600 leading-tight">Size: {variant.size}</p> 
                    <p className="text-xs sm:text-base font-semibold text-primary-pink leading-tight">${variant.price.toFixed(2)}</p> 
                    {variant.color && ( 
                      <div className="flex items-center justify-center text-2xs text-gray-700 mt-0.5"> 
                        Color: <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ml-0.5 border border-gray-300" style={{ backgroundColor: variant.color }}></span> 
                      </div> 
                    )} 
                  </div> 
                ))} 
              </div> 
              <button className="bg-primary-pink text-light-text px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent-gold transition-colors duration-300 shadow-md"> 
                Add to Cart 
              </button> 
            </div> 
          </motion.div> 
        ) : ( 
          // Product Grid View or Skeleton Grid 
          <motion.div 
            key="product-grid" 
            variants={pageContainerVariants} // Corrected: Use pageContainerVariants for grid entrance/exit
            initial="hidden"
            animate="visible"
            exit="hidden" // Ensure it exits smoothly
            className="w-full flex flex-col items-center" 
          > 
            {/* Category Filter Buttons */} 
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8"> 
              {categories.map(category => ( 
                <button 
                  key={category} 
                  onClick={() => { 
                    setSelectedCategory(category); 
                    setSelectedProduct(null); 
                    setIsLoading(true); 
                    setTimeout(() => setIsLoading(false), 500); 
                  }} 
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 shadow-md 
                    ${selectedCategory === category 
                      ? 'bg-primary-pink text-light-text' 
                      : 'bg-soft-gray text-dark-text hover:bg-gray-300' 
                    }`} 
                > 
                  {category} 
                </button> 
              ))} 
            </div> 

            {isLoading ? ( 
              // Skeleton Grid 
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl"> {/* grid-cols-2 on mobile */}
                {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)} 
              </div> 
            ) : ( 
              // Product Grid 
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl"> {/* grid-cols-2 on mobile */}
                {filteredProducts.map((product) => ( 
                  <motion.div 
                    key={product.id} 
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer flex flex-col items-center text-center p-3 sm:p-4" 
                    variants={cardVariants} 
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }} 
                    whileTap={{ scale: 0.98 }} 
                    onClick={() => { 
                        setIsLoading(true); 
                        setTimeout(() => { 
                            setSelectedProduct(product); 
                            setIsLoading(false); 
                        }, 300); 
                    }} 
                  > 
                    <img 
                      src={product.baseImageUrl} 
                      alt={product.name} 
                      className="w-full h-36 sm:h-48 object-cover rounded-lg mb-2 sm:mb-4 shadow-sm" 
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x300/E0E0E0/333333?text=Image+Error"; }} 
                    /> 
                    <h2 className="text-base sm:text-xl font-semibold text-dark-text mb-1">{product.name}</h2> 
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">{product.brand}</p> 
                    <div className="mb-2 sm:mb-3">{renderStars(product.rating)}</div> 
                    {product.variants.length > 1 ? ( 
                      <p className="text-base sm:text-lg font-bold text-primary-pink mb-3"> 
                        From ${Math.min(...product.variants.map(v => v.price)).toFixed(2)} 
                      </p> 
                    ) : ( 
                      <p className="text-base sm:text-lg font-bold text-primary-pink mb-3"> 
                        ${product.variants[0].price.toFixed(2)} 
                      </p> 
                    )} 

                    <button className="mt-auto bg-secondary-purple text-light-text px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-primary-pink transition-colors duration-300 shadow-md"> 
                      View Details 
                    </button> 
                  </motion.div> 
                ))} 
              </div> 
            )} 
          </motion.div> 
        )} 
      </AnimatePresence> 
    </motion.div> 
  ); 
}; 

export default MakeupPage;