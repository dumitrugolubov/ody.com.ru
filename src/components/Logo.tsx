import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <motion.svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: -180, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.circle 
        cx="50" 
        cy="50" 
        r="45" 
        strokeWidth="10" 
        stroke="url(#gradient)" 
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default Logo;