export const pageVariants = {
  initial: {
    opacity: 0,
    y: "100vh", // Start from bottom
    scale: 0.8
  },
  in: {
    opacity: 1,
    y: 0, // Animate to center
    scale: 1
  },
  out: {
    opacity: 0,
    y: "-100vh", // Exit to top
    scale: 0.8
  }
};

export const pageTransition = {
  type: "tween",
  ease: "easeInOut", // Smooth easing
  duration: 0.6 // Animation duration
};
