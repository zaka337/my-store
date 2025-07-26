import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Create the Context
const CartContext = createContext();

// Helper function for local storage persistence (basic for this project)
const getInitialCart = () => {
  try {
    const storedCart = localStorage.getItem('glamourhub_cart');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Failed to parse cart from localStorage", error);
    return []; // Return empty cart on error
  }
};

// 2. Create a Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart);

  // Effect to save cart items to local storage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('glamourhub_cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [cartItems]);

  // Actions for the cart
  const addToCart = (product, selectedVariant) => {
    // A cart item should include product details and the specific variant chosen
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.variantId === selectedVariant.id
    );

    if (existingItemIndex > -1) {
      // Item already in cart, increase quantity
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // New item, add to cart with quantity 1
      setCartItems([
        ...cartItems,
        {
          id: product.id,
          variantId: selectedVariant.id,
          name: product.name,
          brand: product.brand,
          baseImageUrl: product.baseImageUrl, // Keep base image for cart display
          variantName: selectedVariant.name,
          variantSize: selectedVariant.size,
          variantPrice: selectedVariant.price,
          variantColor: selectedVariant.color,
          variantImageUrl: selectedVariant.imageUrl, // Specific image for the variant
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (productId, variantId) => {
    setCartItems(
      cartItems.filter((item) => !(item.id === productId && item.variantId === variantId))
    );
  };

  const updateQuantity = (productId, variantId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId && item.variantId === variantId
          ? { ...item, quantity: newQuantity }
          : item
      ).filter(item => item.quantity > 0) // Remove if quantity drops to 0 or below
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.variantPrice * item.quantity,
    0
  );

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    totalItemsInCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Create a Custom Hook to consume the Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
