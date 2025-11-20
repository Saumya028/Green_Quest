import React from 'react';

export const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input type="checkbox" {...props} className={`form-checkbox ${props.className ?? ''}`} />;
};

export default Checkbox;
