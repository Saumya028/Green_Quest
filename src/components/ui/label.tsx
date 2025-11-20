import React from 'react';

export const Label: React.FC<React.PropsWithChildren<{ htmlFor?: string; className?: string }>> = ({ children, htmlFor, className = '' }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium ${className}`}>
    {children}
  </label>
);

export default Label;
