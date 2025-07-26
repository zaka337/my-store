import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// This import path is kept exactly as you provided it.
import allProducts, { getUniqueDressingCategories } from '../data/products'; 

const dressingProducts = allProducts.dressing; 

// Helper function to render star ratings - CORRECTED SYNTAX
const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0; // Corrected: original was 'rating = 5' which is a syntax error
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex items-center text-accent-gold">
            {[...Array(fullStars)].map((_, i) => (
                <svg key={`full-${i}`} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
            ))}
            {halfStar && (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292zM10 18.333V5.414l-2.476 1.8a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69L10 2z" clipRule="evenodd" />
                </svg>
            )}
            {[...Array(emptyStars)].map((_, i) => (
                <svg key={`empty-${i}`} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

// Skeleton Card Component (remains unchanged)
const SkeletonCard = () => (
    <div className="bg-gray-100 rounded-xl shadow-lg p-4 animate-pulse flex flex-col items-center">
        <div className="w-full h-36 sm:h-48 bg-gray-200 rounded-md mb-4"></div> {/* Image placeholder, made responsive */}
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div> {/* Title placeholder */}
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div> {/* Price placeholder */}
        <div className="h-10 bg-gray-200 rounded-full w-2/3"></div> {/* Button placeholder */}
    </div>
);

// Animation variants for page transitions within the content area (remains unchanged)
const gridPageVariants = {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0, transition: { type: "spring", damping: 20, stiffness: 100, staggerChildren: 0.1, delayChildren: 0.2 } },
    out: { opacity: 0, x: 100, transition: { duration: 0.3 } }
};

const detailPageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0, transition: { type: "spring", damping: 20, stiffness: 100 } },
    out: { opacity: 0, x: -100, transition: { duration: 0.3 } }
};

// Variants for individual product cards (remains unchanged)
const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 12, stiffness: 100 } }
};


const DressingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const categories = getUniqueDressingCategories();

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'All'
        ? dressingProducts
        : dressingProducts.filter(product => product.category === selectedCategory);

    // Simulate loading for skeleton UI
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Simulate 1 second load time

        return () => clearTimeout(timer);
    }, [selectedCategory]); // Rerun when category changes

    // Reset loading when product detail view is toggled
    useEffect(() => {
        if (selectedProduct) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 300); // Shorter delay for detail page
            return () => clearTimeout(timer);
        }
    }, [selectedProduct]);


    return (
        // Main container for the dressing page, handles its own scrolling
        // Adjusted padding for responsiveness: p-4 for mobile, sm:p-6 for small screens, md:p-8 for medium screens and above
        <div className="w-full h-full p-4 sm:p-6 md:p-8 overflow-y-auto custom-scrollbar bg-light-bg text-dark-text">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-purple mb-6 sm:mb-10 drop-shadow-md mt-10 sm:mt-20 text-center">Dressing Collection</h1> {/* Adjusted font size responsiveness, margin-top, and added text-center */}

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center"> {/* Adjusted gap and margin */}
                {categories.map(category => (
                    <motion.button
                        key={category}
                        onClick={() => {
                            setSelectedCategory(category);
                            setSelectedProduct(null); // Reset selected product when category changes
                        }}
                        className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm sm:text-lg font-medium transition-colors duration-300 shadow-md
                            ${selectedCategory === category
                                ? 'bg-primary-pink text-light-text'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Product Grid / Detail View */}
            <AnimatePresence mode="wait">
                {selectedProduct ? (
                    // Product Detail View
                    <motion.div
                        key="product-detail"
                        variants={detailPageVariants}
                        initial="initial"
                        animate="in"
                        exit="out"
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-6 relative mx-auto" // Adjusted max-width, padding, and gap
                    >
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gray-200 text-dark-text px-3 py-1.5 rounded-full text-xs sm:text-sm hover:bg-gray-300 transition-colors duration-200 flex items-center gap-1" // Adjusted padding, text size, and position
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                            Back to Products
                        </button>

                        {/* Product Image */}
                        <div className="md:w-1/2 flex justify-center items-center p-1 sm:p-2"> {/* Adjusted padding */}
                            <img
                                src={selectedProduct.baseImageUrl}
                                alt={selectedProduct.name}
                                className="w-full h-auto object-contain rounded-lg shadow-md max-h-56 sm:max-h-80" // Adjusted max height for image responsiveness
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/CCCCCC/000000?text=Image+Error'; }}
                            />
                        </div>

                        {/* Product Details */}
                        <div className="md:w-1/2 flex flex-col justify-center py-1 sm:py-2"> {/* Adjusted padding */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-dark-text mb-1">{selectedProduct.name}</h2> {/* Adjusted font size */}
                            <p className="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">{selectedProduct.brand}</p> {/* Adjusted font size and margin */}
                            <div className="mb-2 sm:mb-3">{renderStars(selectedProduct.rating)}</div> {/* Adjusted margin */}
                            <p className="text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3">{selectedProduct.description}</p> {/* Adjusted font size and margin */}

                            <h3 className="text-lg sm:text-xl font-semibold text-dark-text mb-2 sm:mb-3">Available Variants:</h3> {/* Adjusted font size and margin */}
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 max-h-[100px] overflow-y-auto custom-scrollbar"> {/* Adjusted gap and max-h */}
                                {selectedProduct.variants.map(variant => (
                                    <div key={variant.id} className="bg-soft-gray rounded-lg p-1.5 flex flex-col items-center justify-center text-center shadow-sm hover:bg-gray-200 transition-colors duration-200"> {/* Adjusted padding */}
                                        <img
                                            src={variant.imageUrl || selectedProduct.baseImageUrl}
                                            alt={variant.name}
                                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md border border-gray-300 mb-0.5 sm:mb-1" // Adjusted image size
                                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/64x64/CCCCCC/000000?text=No+Img'; }}
                                        />
                                        <p className="font-medium text-dark-text text-xs sm:text-sm leading-tight">{variant.name}</p> {/* Adjusted font size */}
                                        <p className="text-2xs sm:text-xs text-gray-600 leading-tight">Size: {variant.size}</p> {/* Adjusted font size */}
                                        <p className="text-sm sm:text-base font-semibold text-primary-pink leading-tight">${variant.price.toFixed(2)}</p> {/* Adjusted font size */}
                                        {variant.color && (
                                            <div className="flex items-center text-2xs sm:text-xs text-gray-700 mt-0.5 sm:mt-1"> {/* Adjusted font size and margin */}
                                                Color: <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ml-1 border border-gray-300" style={{ backgroundColor: variant.color }}></span> {/* Adjusted color swatch size */}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button className="bg-primary-pink text-light-text px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-accent-gold transition-colors duration-300 shadow-md"> {/* Adjusted padding and font size */}
                                Add to Cart
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    // Product Grid View
                    <motion.div
                        key="product-grid"
                        variants={gridPageVariants}
                        initial="initial"
                        animate="in"
                        exit="out"
                        transition={{ type: "spring", damping: 20, stiffness: 100, staggerChildren: 0.1, delayChildren: 0.2 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8" // Adjusted grid columns and gap for responsiveness
                    >
                        {isLoading ? (
                            // Render skeleton cards while loading
                            Array.from({ length: 10 }).map((_, index) => ( // Increased skeleton count for better visual
                                <SkeletonCard key={index} />
                            ))
                        ) : (
                            // Render actual product cards
                            filteredProducts.map(product => (
                                <motion.div
                                    key={product.id}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        setSelectedProduct(product);
                                        setIsLoading(true); // Re-trigger loading for detail page transition
                                    }}
                                    className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center cursor-pointer transform transition-all duration-200 ease-in-out" // Adjusted padding
                                >
                                    <img
                                        src={product.baseImageUrl}
                                        alt={product.name}
                                        className="w-full h-36 sm:h-48 object-cover object-center rounded-md mb-3 sm:mb-4" // Adjusted image height
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/CCCCCC/000000?text=Image+Error'; }}
                                    />
                                    <h2 className="text-base sm:text-xl font-semibold text-dark-text mb-1 text-center">{product.name}</h2> {/* Adjusted font size */}
                                    <p className="text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2">{product.brand}</p> {/* Adjusted font size and margin */}
                                    <div className="mb-2 sm:mb-3">{renderStars(product.rating)}</div> {/* Adjusted margin */}
                                    <p className="text-base sm:text-lg font-bold text-primary-pink mb-3 sm:mb-4">${product.variants[0].price.toFixed(2)}</p> {/* Display price of first variant */}
                                    <button className="bg-secondary-purple text-light-text px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-primary-pink transition-colors duration-300"> {/* Adjusted padding and font size */}
                                        View Details
                                    </button>
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DressingPage;
