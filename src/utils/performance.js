// ✅ Enhanced Performance utilities

// Debounce function for search and filters
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle
  return function () {
    const args = arguments
    
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Preload components for faster navigation
export const preloadComponent = (componentImport) => {
  const componentImporter = () => componentImport()

  // Preload on hover or focus
  return {
    onMouseEnter: componentImporter,
    onFocus: componentImporter,
  }
}

// Optimize images
export const optimizeImage = (src, width = 400, height = 400) => {
  if (src.includes("placeholder.svg")) {
    return `${src}?height=${height}&width=${width}`
  }
  return src
}

// Clean up memory leaks and animations
export const cleanupAnimations = () => {
  // Cancel any pending animation frames
  const highestId = setTimeout(() => {}, 0)
  for (let i = 0; i < highestId; i++) {
    clearTimeout(i)
  }

  // Clean up any remaining intervals
  const highestIntervalId = setInterval(() => {}, 0)
  for (let i = 0; i < highestIntervalId; i++) {
    clearInterval(i)
  }

  // Reset any transform styles that might be stuck
  const animatedElements = document.querySelectorAll("[data-framer-motion]")
  animatedElements.forEach((el) => {
    if (el.style) {
      el.style.transform = "none"
      el.style.transition = "none"
    }
  })
}

// Lazy load images
export const lazyLoadImage = (src, placeholder = "/placeholder.svg") => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = () => resolve(placeholder)
    img.src = src
  })
}

// Performance monitoring
export const measurePerformance = (name, fn) => {
  const start = performance.now()
  const result = fn()
  const end = performance.now()
  console.log(`${name} took ${end - start} milliseconds`)
  return result
}

// Memory usage checker (for development)
export const checkMemoryUsage = () => {
  if (performance.memory) {
    console.log("Memory Usage:", {
      used: Math.round(performance.memory.usedJSHeapSize / 1048576) + " MB",
      total: Math.round(performance.memory.totalJSHeapSize / 1048576) + " MB",
      limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) + " MB",
    })
  }
}
