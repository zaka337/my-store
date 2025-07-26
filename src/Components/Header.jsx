import React, { useState, useEffect } from 'react'; // Import useEffect
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion'; // Keep motion and AnimatePresence




const Header = ({ onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

    const navItems = [
        { name: 'Home', path: '/' /*, icon: <i className="fas fa-home"></i>*/ },
        { name: 'Makeup', path: '/makeup' /*, icon: <i className="fas fa-sparkles"></i>*/ },
        { name: 'Dressing', path: '/dressing' /*, icon: <i className="fas fa-tshirt"></i>*/ },
        { name: 'Jewelry', path: '/jewelry' /*, icon: <i className="fas fa-gem"></i>*/ },
        { name: 'About Us', path: '/about' /*, icon: <i className="fas fa-info-circle"></i>*/ },
    ];

    const linkClasses = "flex items-center gap-1 px-3 py-1.5 rounded-full text-dark-text hover:bg-primary-pink hover:text-light-text transition-all duration-300 ease-in-out font-medium text-sm sm:text-base";
    const activeLinkClasses = "bg-primary-pink text-light-text shadow-md";

    const handleNavLinkClick = (path) => {
        setIsMobileMenuOpen(false); // Close mobile menu on link click
        // if (onNavigate) { // Defensive check (already done by App.jsx passing it)
        //     onNavigate(path); 
        // }
    };

    // Effect to control body overflow when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling on body
        } else {
            document.body.style.overflow = 'unset'; // Allow scrolling
        }
        return () => {
            document.body.style.overflow = 'unset'; // Cleanup on component unmount
        };
    }, [isMobileMenuOpen]);


    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-lg py-3 px-4 sm:py-4 sm:px-8 flex justify-between items-center rounded-b-xl">
            {/* Logo/Brand Name */}
            <div className="text-xl sm:text-2xl font-bold text-secondary-purple tracking-wide cursor-pointer">
                GlamourHub
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-2 sm:space-x-4"> 
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => handleNavLinkClick(item.path)} // Use local handler
                        className={({ isActive }) =>
                            `${linkClasses} ${isActive ? activeLinkClasses : ''}`
                        }
                    >
                        {item.icon}
                        <span className="whitespace-nowrap">{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Mobile Hamburger Menu Button */}
            <button
                className="md:hidden p-2 rounded-full hover:bg-soft-gray transition-colors duration-200 text-dark-text"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile menu"
            >
                {/* Hamburger Icon (Lucide Icon is usually preferred over Font Awesome CDN for React) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>

            {/* User/Cart Icons (Visible on all screens) */}
            <div className="flex items-center space-x-2 sm:space-x-4 text-dark-text">
                <button className="p-1.5 sm:p-2 rounded-full hover:bg-soft-gray transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </button>
                <button className="p-1.5 sm:p-2 rounded-full hover:bg-soft-gray transition-colors duration-200 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    <span className="absolute -top-0.5 -right-0.5 bg-primary-pink text-light-text text-xs rounded-full h-3 w-3 flex items-center justify-center">3</span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobileMenu"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className="fixed inset-0 bg-secondary-purple bg-opacity-95 backdrop-blur-lg z-50 flex flex-col items-end justify-start space-y-2 md:hidden pt-20 pb-8 px-8"
                    >
                        {/* Close Button for Mobile Menu */}
                        <button
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-soft-gray transition-colors duration-200 text-light-text"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Close mobile menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>

                        {/* Mobile Navigation Links */}
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => handleNavLinkClick(item.path)}
                                className={({ isActive }) =>
                                    // Removed w-full. Now uses inline-block to fit content, and text-right on the parent for alignment
                                    `bg-white text-dark-text text-sm font-semibold py-1.5 px-3 rounded-full transition-colors duration-300 ${ 
                                        isActive ? 'bg-primary-pink shadow-lg text-light-text' : 'hover:bg-primary-pink hover:bg-opacity-20 hover:text-light-text' 
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
