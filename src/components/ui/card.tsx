import React from 'react';

export const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`bg-white text-black rounded ${className}`}>{children}</div>
);

export const CardHeader: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);

export const CardTitle: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <h3 className={`font-bold ${className}`}>{children}</h3>
);

export const CardDescription: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <p className={`text-sm text-gray-600 ${className}`}>{children}</p>
);

export const CardContent: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export const CardFooter: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`p-4 border-t ${className}`}>{children}</div>
);

export default Card;
