import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Helper function to generate a random position for dropping elements
const getRandomPosition = (max) => Math.random() * max;

// Animation variants for overall container and staggered children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren", // Animate container before children
            staggerChildren: 0.08, // Faster stagger for more 'crazy' feel
            delayChildren: 0.3,
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Animation variants for individual text blocks or elements
const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            damping: 10,
            stiffness: 80 // Slightly less stiff for more bouncy feel
        }
    }
};

// Variants for "dropping sales" elements
const dropVariants = {
    initial: { y: -50, opacity: 0, scale: 0.5, rotate: 0 }, // Start closer to the top of the viewport
    animate: (i) => ({
        y: [0, window.innerHeight - 120, window.innerHeight - 120], // Adjusted to use window.innerHeight for full fall
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 1],
        rotate: [0, 15, -15, 0],
        transition: {
            delay: i * 0.2 + 0.5, // Staggered entry
            duration: 5, // Longer fall duration
            ease: "linear",
            times: [0, 0.2, 0.8, 1], // Keyframe timing
            repeat: Infinity,
            repeatDelay: 5 // Delay before repeating
        }
    })
};

// Variants for the 'crazy moving cards'
const cardDanceVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -20 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", damping: 10, stiffness: 100 } },
    hover: { scale: 1.08, rotate: 5, transition: { type: "spring", stiffness: 300 } },
    // Continuous subtle movement
    float: {
        y: ["0%", "5%", "-5%", "0%"],
        x: ["0%", "-3%", "3%", "0%"],
        rotate: [0, 1, -1, 0],
        transition: {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
};

const AboutPage = () => {
    const [pageHeight, setPageHeight] = useState(0);

    useEffect(() => {
        // Set page height to correctly calculate drop animation Y value
        const updateHeight = () => {
            // Calculate available height between header and footer
            const headerHeight = 64; // h-16
            const footerHeight = 16; // h-4
            setPageHeight(window.innerHeight - headerHeight - footerHeight);
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    // Mock data for sales drops
    const salesDrops = [
        { id: 1, text: 'Flash Sale! 🚨', color: 'bg-red-500', icon: '⚡' },
        { id: 2, text: '20% OFF! 🎉', color: 'bg-blue-500', icon: '🏷️' },
        { id: 3, text: 'New Arrivals! ✨', color: 'bg-yellow-500', icon: '🌟' },
        { id: 4, text: 'Free Shipping! 🚚', color: 'bg-green-500', icon: '🎁' },
        { id: 5, text: 'Limited Stock! ⏳', color: 'bg-purple-500', icon: '🔥' },
    ];

    // Mock data for moving cards
    const movingCards = [
        { id: 1, title: 'Beauty Tips', icon: '💄' },
        { id: 2, title: 'Style Guides', icon: '👗' },
        { id: 3, title: 'Jewelry Care', icon: '💎' },
        { id: 4, title: 'Behind Scenes', icon: '🎬' },
    ];


    return (
        // Main container for the About page, fills available space
        // Adjusted padding for responsiveness: p-4 for mobile, sm:p-6 for small screens, md:p-8 for medium screens and above
        <motion.div
            className="relative w-full h-full flex flex-col items-center justify-start bg-gradient-to-br from-purple-100 to-pink-100 text-dark-text p-4 sm:p-6 md:p-8 overflow-y-auto custom-scrollbar"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* --- Dropping Sales Elements --- */}
            {pageHeight > 0 && salesDrops.map((drop, i) => ( // Only render if pageHeight is calculated
                <motion.div
                    key={drop.id}
                    className={`absolute text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-xl whitespace-nowrap`} // Smaller text/padding for mobile
                    style={{
                        left: `${getRandomPosition(80)}%`, // Random horizontal position
                        top: '-50px', // Start above screen
                        zIndex: 50 + i, // Layering
                        backgroundColor: drop.color.replace('bg-', '') // Use actual color
                    }}
                    variants={dropVariants}
                    custom={i} // Pass index as custom prop
                    initial="initial"
                    animate="animate"
                >
                    {drop.icon} {drop.text}
                </motion.div>
            ))}

            {/* --- Main Content Container --- */}
            <div className="relative z-20 w-full max-w-5xl flex flex-col items-center space-y-8 md:space-y-12 px-2 sm:px-4 py-4"> {/* Adjusted space-y and horizontal padding */}

                {/* Section 1: Our Story - Retained core text but with more impact */}
                <motion.div
                    className="w-full text-center p-4 sm:p-6 bg-white bg-opacity-70 rounded-3xl shadow-xl backdrop-blur-sm" // Adjusted padding
                    variants={itemVariants}
                >
                    <motion.h1
                        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-secondary-purple mb-4 sm:mb-6 drop-shadow-md leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-primary-pink" // Adjusted font size responsiveness
                        variants={itemVariants}
                    >
                        The GlamourHub Journey
                    </motion.h1>
                    <div className="space-y-3 sm:space-y-4 text-base md:text-lg leading-relaxed text-gray-700"> {/* Adjusted space-y and font size responsiveness */}
                        <motion.p variants={itemVariants}>
                            Welcome to **GlamourHub**, your vibrant universe of exquisite makeup, elegant dressing, and dazzling jewelry. We believe that true beauty isn't just worn—it's experienced, expressed, and celebrated in every unique individual.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Born from a spark of passion for unparalleled quality and a flair for timeless design, GlamourHub is more than a destination; it's a dynamic celebration of self-expression. Every single piece in our collection is hand-picked, ensuring it meets our rigorous standards for craftsmanship, comfort, and ethical sourcing.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Section 2: Crazy Moving Cards */}
                <motion.div
                    className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-2 sm:p-4 bg-white bg-opacity-80 rounded-3xl shadow-xl backdrop-blur-sm" // Adjusted gap and padding
                    variants={containerVariants} // Use container variants for staggered grid
                >
                    {movingCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className="flex flex-col items-center justify-center p-3 sm:p-4 text-center bg-gradient-to-br from-primary-pink to-accent-gold text-white rounded-2xl shadow-lg cursor-pointer" // Adjusted padding
                            variants={cardDanceVariants}
                            whileHover="hover"
                            animate="float" // Apply continuous floating animation
                        >
                            <span className="text-3xl sm:text-4xl mb-1 sm:mb-2">{card.icon}</span> {/* Adjusted icon size */}
                            <h3 className="text-sm sm:text-lg font-bold">{card.title}</h3> {/* Adjusted font size */}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Section 3: Social Media & Gift Packs */}
                <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6"> {/* Adjusted gap */}
                    {/* Social Media */}
                    <motion.div
                        className="flex-1 p-4 sm:p-6 bg-blue-500 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4" // Adjusted padding and space-y
                        variants={itemVariants}
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold">Connect with Us!</h3> {/* Adjusted font size */}
                        <p className="text-base sm:text-lg">Join our vibrant community & never miss a beat.</p> {/* Adjusted font size */}
                        <div className="flex space-x-4 sm:space-x-6 text-3xl sm:text-4xl"> {/* Adjusted space-x and icon size */}
                            <motion.a href="#" whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }} className="transform transition-all duration-200"><i className="fab fa-instagram"></i></motion.a>
                            <motion.a href="#" whileHover={{ scale: 1.2, rotate: -10 }} whileTap={{ scale: 0.9 }} className="transform transition-all duration-200"><i className="fab fa-tiktok"></i></motion.a>
                            <motion.a href="#" whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }} className="transform transition-all duration-200"><i className="fab fa-pinterest"></i></motion.a>
                        </div>
                        <p className="text-xs sm:text-sm italic">#GlamourHubLife</p> {/* Adjusted font size */}
                    </motion.div>

                    {/* Gift Packs */}
                    <motion.div
                        className="flex-1 p-4 sm:p-6 bg-purple-500 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4" // Adjusted padding and space-y
                        variants={itemVariants}
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold">Unwrap Joy!</h3> {/* Adjusted font size */}
                        <p className="text-base sm:text-lg">Discover our exclusive gift packs, perfect for every occasion.</p> {/* Adjusted font size */}
                        <motion.button
                            className="bg-white text-purple-600 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-bold shadow-lg" // Adjusted padding and font size
                            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Gift Packs 🎉
                        </motion.button>
                    </motion.div>
                </div>

                {/* Section 4: Tour to Japan Offer */}
                <motion.div
                    className="w-full p-4 sm:p-6 md:p-8 bg-black text-white rounded-3xl shadow-xl text-center flex flex-col items-center space-y-4 sm:space-y-6" // Adjusted padding and space-y
                    variants={itemVariants}
                >
                    <h3 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-400 to-yellow-400 leading-tight">
                        Dream Big: Win a Tour to Japan! 🌸
                    </h3> {/* Adjusted font size */}
                    <p className="text-lg md:text-xl leading-relaxed max-w-2xl"> {/* Adjusted font size */}
                        Experience the ultimate blend of fashion and culture. Participate in our grand giveaway for a chance to win an unforgettable journey to Japan!
                    </p>
                    <motion.button
                        className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-lg sm:text-xl font-bold shadow-2xl" // Adjusted padding and font size
                        whileHover={{ scale: 1.07, rotate: 2, backgroundPosition: "100% 0%" }}
                        whileTap={{ scale: 0.95 }}
                        style={{ backgroundSize: '200% 100%' }} // For gradient animation
                    >
                        Learn More & Enter!
                    </motion.button>
                </motion.div>

                {/* Final thought */}
                <motion.p
                    className="font-semibold text-lg md:text-xl text-secondary-purple mt-8 mb-4 sm:mt-12 sm:mb-6" // Adjusted font size and margins
                    variants={itemVariants}
                >
                    Discover Your Radiance, Explore Your World with GlamourHub.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default AboutPage;
