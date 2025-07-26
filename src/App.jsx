import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Import your Header and Footer components
import Header from './Components/Header';
import Footer from './Components/Footer';

// Import your content components
import HomePage from './Components/HomePage';
import MakeupPage from './Components/MakeupPage';
import DressingPage from './Components/DressingPage';
import JewelryPage from './Components/JewelryPage';
import AboutPage from './Components/AboutPage';
import NotFoundPage from './Components/NotFoundPage';

// Import your motion variants for page transitions
import { pageVariants, pageTransition } from './motionVariants';

// This component will handle the animated route transitions
const AnimatedContentRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="in"
                            exit="out"
                            transition={pageTransition}
                            className="w-full h-full"
                        >
                            <HomePage />
                        </motion.div>
                    }
                />
                <Route
                    path="/makeup"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="in"
                            exit="out"
                            transition={pageTransition}
                            className="w-full h-full flex flex-col items-center overflow-y-auto custom-scrollbar"
                        >
                            <MakeupPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/dressing"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="in"
                            exit="out"
                            transition={pageTransition}
                            className="w-full h-full flex flex-col items-center overflow-y-auto custom-scrollbar"
                        >
                            <DressingPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/jewelry"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="in"
                            exit="out"
                            transition={pageTransition}
                            className="w-full h-full flex flex-col items-center overflow-y-auto custom-scrollbar"
                        >
                            <JewelryPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="in"
                            exit="out"
                            transition={pageTransition}
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <AboutPage />
                        </motion.div>
                    }
                />
                <Route
                    path="*" // Catch-all for undefined routes
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="in"
                            exit="out"
                            transition={pageTransition}
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <NotFoundPage />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    // Header height: h-16 = 64px
    // Footer height: h-2 = 8px (UPDATED)
    const headerHeightPx = 64;
    const footerHeightPx = 8; // UPDATED THIS VALUE

    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-light-bg text-dark-text">
                {/* Header is always visible at the top. Background/shadow handled by Header.jsx */}
                <header className="fixed top-0 left-0 right-0 z-50 h-16 py-4 px-8">
                    <Header />
                </header>

                {/* Main content area, takes remaining height, handles animations */}
                <main
                    className="relative"
                    style={{ height: `calc(100vh - ${headerHeightPx}px - ${footerHeightPx}px)` }}
                >
                    <AnimatedContentRoutes />
                </main>

                {/* Footer is always visible at the bottom. Background/shadow handled by Footer.jsx */}
               
                    <footer /* ALL FOOTER STYLING IS NOW IN Footer.jsx ITSELF */>
    <Footer />
</footer>
                
            </div>
        </Router>
    );
}

export default App;
