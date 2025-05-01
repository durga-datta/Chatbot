import React from 'react'

const Input = React.forwardRef(({ ...rest }, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      className="flex-1 bg-white dark:bg-[#1B263B]
        outline-none text-black dark:text-white
        placeholder-gray-500 dark:placeholder-gray-400
        px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600
        focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-500
        focus:border-blue-500 dark:focus:border-indigo-500
        transition-all duration-300 shadow-inner"
      {...rest}
    />
  )
})

export default Input