import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations

const Footer = () => {
    // Animation variants for footer elements
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        // ALL FOOTER STYLING CONSOLIDATED HERE: fixed positioning, height, padding, background, content layout.
        // Targeted h-4 (16px) as the most compact practical height.
        <footer className="fixed bottom-0 left-0 right-0 z-40 w-full h-4 min-h-[16px] py-0 px-2 sm:px-8 
                           bg-transparent backdrop-blur-none text-light-text flex justify-between items-center rounded-t-xl shadow-lg overflow-hidden">
            {/* Left Section: Brand Motto / Small Logo */}
            <motion.div
                className="flex items-center"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
            >
                <span className="text-[10px] font-semibold text-accent-gold mr-0.5 sm:mr-1">✨</span> {/* text-[10px] arbitrary value for 10px */}
                <p className="text-[10px] font-light whitespace-nowrap overflow-hidden text-ellipsis leading-none">GlamourHub</p> {/* leading-none for minimal line-height */}
            </motion.div>

            {/* Center Section: Copyright */}
            <motion.p
                className="text-[10px] font-light whitespace-nowrap overflow-hidden text-ellipsis leading-none" // text-[10px], leading-none
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
            >
                &copy; {new Date().getFullYear()} All rights reserved.
            </motion.p>

            {/* Right Section: Social Media Icons */}
            <motion.div
                className="flex space-x-1 sm:space-x-2 items-center"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
            >
                <a href="#" className="hover:text-accent-gold transition-colors duration-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="hover:text-accent-gold transition-colors duration-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-19 11.6 9.2-1 15-10.4 12-15.5-.4-.6-1-1.2-1.7-1.7z"/></svg>
                </a>
                <a href="#" className="hover:text-accent-gold transition-colors duration-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
            </motion.div>
        </footer>
    );
};

export default Footer;
