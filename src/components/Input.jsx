import React from 'react';

const Input = React.forwardRef(({ placeholder, ...props }, ref) => {
  return (
    <input
      ref={ref}
      placeholder={placeholder}
      className="w-full p-3 rounded-lg bg-white dark:bg-[#0F1E31] text-black dark:text-white outline-none"
      {...props}
    />
  );
});


export default Input;
