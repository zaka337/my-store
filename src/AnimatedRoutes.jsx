import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Import your Header and Footer components
import Header from './Components/Header';
import Footer from './Components/Footer';

// Import your content components
import HomePage from './Components/HomePage';
import MakeupPage from './Components/MakeupPage';
import DressingPage from './Components/Components/DressingPage'; // Corrected path
import JewelryPage from './Components/JewelryPage';
import AboutPage from './Components/AboutPage';
import NotFoundPage from './Components/NotFoundPage';

// Import your motion variants for page transitions
import { pageVariants, pageTransition } from './motionVariants'; // Corrected syntax

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
                            // HomePage will handle its own height/padding for centering
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
                            className="w-full h-full flex items-center justify-center"
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
                            className="w-full h-full flex items-center justify-center"
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
                            className="w-full h-full flex items-center justify-center"
                        >
                            <JewelryPage />
                        </motion.div>
                    }
                />
                <Route
  path="/about"
  element={
    <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition} className="w-full h-full flex items-center justify-center">
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
                            className="w-full h-full flex items-center justify-center"
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
    // Footer height: h-8 = 32px (UPDATED)
    const headerHeightPx = 64;
    const footerHeightPx = 32; // UPDATED THIS VALUE

    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-light-bg text-dark-text">
                {/* Header is always visible at the top */}
                <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white bg-opacity-90 backdrop-blur-md shadow-lg py-4 px-8 flex justify-between items-center rounded-b-xl">
                    <Header />
                </header>

                {/* Main content area, takes remaining height, handles animations */}
                <main
                    className="relative overflow-hidden"
                    style={{ height: `calc(100vh - ${headerHeightPx}px - ${footerHeightPx}px)` }} // Explicitly calculate height
                >
                    <AnimatedContentRoutes />
                </main>

                {/* Footer is always visible at the bottom */}
                
                    <footer /* ALL FOOTER STYLING IS NOW IN Footer.jsx ITSELF */>
    <Footer />
</footer>
                
            </div>
        </Router>
    );
}

export default App;
