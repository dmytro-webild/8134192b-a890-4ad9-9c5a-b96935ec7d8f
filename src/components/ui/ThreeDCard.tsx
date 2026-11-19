import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glowColor?: string;
  onClick?: () => void;
}

export default function ThreeDCard({
  children,
  className = '',
  depth = 20,
  glowColor = 'rgba(11, 59, 140, 0.15)',
  onClick,
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate normalized -1 to +1 coordinates from center
    const pctX = (mouseX / width - 0.5) * 2;
    const pctY = (mouseY / height - 0.5) * 2;

    // Tilt angle max ~ 12 deg
    setRotateX(-pctY * 12);
    setRotateY(pctX * 12);

    // Glare position
    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className="w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        animate={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          boxShadow: glarePos.opacity > 0
            ? `0 20px 40px ${glowColor}, 0 0 20px rgba(0,0,0,0.06)`
            : '0 4px 12px rgba(0,0,0,0.05)',
        }}
        className={`relative rounded-3xl transition-shadow duration-300 overflow-hidden ${className}`}
      >
        {/* Dynamic Interactive Light Glare */}
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%)`,
          }}
        />

        {/* 3D Depth Content Layer */}
        <div
          style={{ transform: `translateZ(${depth}px)` }}
          className="relative z-10 h-full flex flex-col justify-between"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
