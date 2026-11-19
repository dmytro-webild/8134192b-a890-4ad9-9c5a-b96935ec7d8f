import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ThreeDButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'glass';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function ThreeDButton({
  children,
  to,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ThreeDButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 font-bold text-xs px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-lg select-none';

  let variantStyles = '';
  if (variant === 'primary') {
    variantStyles =
      'bg-gradient-to-r from-[#0b3b8c] via-blue-900 to-[#092c69] text-white border-b-4 border-blue-950 shadow-blue-900/30 hover:shadow-blue-900/50 hover:brightness-110';
  } else if (variant === 'accent') {
    variantStyles =
      'bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white border-b-4 border-red-950 shadow-red-600/30 hover:shadow-red-600/50 hover:brightness-110';
  } else if (variant === 'secondary') {
    variantStyles =
      'bg-white text-[#0b3b8c] border border-slate-200 border-b-4 border-slate-300 shadow-slate-200 hover:bg-slate-50 hover:border-slate-300';
  } else if (variant === 'glass') {
    variantStyles =
      'bg-white/10 backdrop-blur-md text-white border border-white/20 border-b-4 border-white/30 hover:bg-white/20';
  }

  const content = (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ y: 2, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {/* Metallic Glow Overlay */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/0 via-white/10 to-white/20 pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className="outline-none">
      {content}
    </button>
  );
}
