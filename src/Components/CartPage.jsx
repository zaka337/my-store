import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext'; // Import the useCart hook

// Helper function to render star ratings (can be imported if defined globally, or keep here)
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex text-accent-gold text-sm">
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

// Skeleton Card Component for cart items (similar to product cards)
const CartItemSkeleton = () => (
  <div className="flex flex-col sm:flex-row items-center bg-gray-100 rounded-lg p-4 animate-pulse gap-4 w-full">
    <div className="w-24 h-24 bg-gray-200 rounded-md"></div>
    <div className="flex-grow flex flex-col gap-2 w-full sm:w-auto">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
    </div>
    <div className="h-8 bg-gray-200 rounded w-20"></div> {/* Quantity control */}
    <div className="h-8 bg-gray-200 rounded w-16"></div> {/* Price */}
    <div className="h-8 bg-gray-200 rounded-full w-8"></div> {/* Remove button */}
  </div>
);


const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal, totalItemsInCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for skeleton UI (optional, for consistency)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate 0.5 second load time
    return () => clearTimeout(timer);
  }, []);

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(item.id, item.variantId);
    } else {
      updateQuantity(item.id, item.variantId, newQuantity);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      // Main container, handles its own scrolling and padding
      className="w-full h-full p-4 sm:p-6 md:p-8 overflow-y-auto custom-scrollbar bg-light-bg text-dark-text"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-secondary-purple mb-6 sm:mb-10 drop-shadow-md mt-10 sm:mt-20 text-center">Your Shopping Cart ({totalItemsInCart})</h1>

      {isLoading ? (
        <div className="space-y-4 max-w-4xl mx-auto w-full">
          {[...Array(2)].map((_, i) => <CartItemSkeleton key={i} />)}
        </div>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-lg sm:text-xl text-gray-600 py-10 rounded-lg bg-white shadow-md mx-auto max-w-md"
            >
              Your cart is empty! Start shopping.
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, staggerChildren: 0.05 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6"
              >
                {cartItems.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.variantId}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col sm:flex-row items-center border-b border-gray-200 py-3 sm:py-4 last:border-b-0 gap-3 sm:gap-4"
                  >
                    {/* Item Image */}
                    <img
                      src={item.variantImageUrl || item.baseImageUrl}
                      alt={item.variantName || item.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md border border-gray-300 shadow-sm"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/96x96/E0E0E0/333333?text=Img'; }}
                    />

                    {/* Item Details */}
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="text-base sm:text-lg font-semibold text-dark-text">{item.name} - {item.variantName}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{item.brand} | Size: {item.variantSize}</p>
                      {item.variantColor && (
                        <div className="flex items-center justify-center sm:justify-start text-xs text-gray-700 mt-1">
                          Color: <span className="w-3 h-3 rounded-full ml-1 border border-gray-300" style={{ backgroundColor: item.variantColor }}></span>
                        </div>
                      )}
                      {/* Optional: Render rating if you pass it through cart items */}
                      {/* {item.rating && renderStars(item.rating)} */}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                        className="bg-soft-gray text-dark-text p-2 rounded-full hover:bg-gray-300 transition-colors duration-200 text-sm w-8 h-8 flex items-center justify-center"
                        aria-label="Decrease quantity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
                      </button>
                      <span className="text-dark-text font-medium text-base sm:text-lg w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                        className="bg-soft-gray text-dark-text p-2 rounded-full hover:bg-gray-300 transition-colors duration-200 text-sm w-8 h-8 flex items-center justify-center"
                        aria-label="Increase quantity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                      </button>
                    </div>

                    {/* Item Price */}
                    <div className="text-base sm:text-lg font-bold text-primary-pink min-w-[70px] text-right">
                      ${(item.variantPrice * item.quantity).toFixed(2)}
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.variantId)}
                      className="bg-red-500 text-light-text p-2 rounded-full hover:bg-red-600 transition-colors duration-200 text-sm w-8 h-8 flex items-center justify-center"
                      aria-label="Remove item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    </button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Cart Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-6 flex flex-col gap-3"
              >
                <div className="flex justify-between items-center text-lg sm:text-xl font-semibold text-dark-text border-b pb-2">
                  <span>Total Items:</span>
                  <span>{totalItemsInCart}</span>
                </div>
                <div className="flex justify-between items-center text-xl sm:text-2xl font-bold text-primary-pink">
                  <span>Cart Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={clearCart}
                  className="bg-gray-200 text-dark-text px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors duration-200 w-full sm:w-auto self-end"
                >
                  Clear Cart
                </button>
                <button className="bg-accent-gold text-light-text px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-pink transition-colors duration-300 shadow-md mt-4 w-full">
                  Proceed to Checkout
                </button>
              </motion.div>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

export default CartPage;
