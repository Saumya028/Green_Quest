"use client";
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
};

export const Button: React.FC<ButtonProps> = ({ children, variant, className = '', ...props }) => {
  const base = 'px-4 py-2 rounded';
  const variants: Record<string, string> = {
    default: 'bg-green-600 text-white',
    outline: 'border text-white border-gray-300 bg-transparent',
  };
  return (
    <button className={`${base} ${variants[variant ?? 'default']} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
