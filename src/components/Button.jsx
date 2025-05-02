import React from 'react';

const Button = ({ value, className = '', ...props }) => {
  return (
    <button
      className={`
        bg-blue-500 dark:bg-blue-700 
        text-white text-lg 
        p-2 sm:p-3 
        rounded-xl shadow-md 
        hover:scale-105 active:scale-95 
        transition-all duration-300 ease-in-out
        ${className}
      `}
      {...props}
    >
      {value}
    </button>
  );
};

export default Button;
