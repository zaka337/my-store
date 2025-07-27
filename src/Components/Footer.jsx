"use client"

import { memo } from "react"

// ✅ Memoized Footer component - no unnecessary animations
const Footer = memo(() => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 w-full h-4 min-h-[16px] py-0 px-2 sm:px-8 bg-gradient-to-r from-purple-100/80 via-pink-50/80 to-purple-100/80 backdrop-blur-sm border-t border-purple-200/30 flex justify-between items-center overflow-hidden">
      {/* ✅ Simplified Left Section */}
      <div className="flex items-center">
        <span className="text-[10px] font-semibold text-purple-600 mr-0.5 sm:mr-1">✨</span>
        <p className="text-[10px] font-light text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis leading-none">
          GlamourHub
        </p>
      </div>

      {/* ✅ Simplified Center Section */}
      <p className="text-[10px] font-light text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis leading-none">
        © {new Date().getFullYear()} All rights reserved.
      </p>

      {/* ✅ Simplified Social Media Icons */}
      <div className="flex space-x-1 sm:space-x-2 items-center">
        <a
          href="#"
          className="text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center justify-center"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center justify-center"
          aria-label="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-19 11.6 9.2-1 15-10.4 12-15.5-.4-.6-1-1.2-1.7-1.7z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center justify-center"
          aria-label="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"

export default Footer
