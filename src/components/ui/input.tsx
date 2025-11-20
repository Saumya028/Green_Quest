import React from 'react';

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={`px-3 py-2 border rounded ${props.className ?? ''}`} />;
};

export default Input;
