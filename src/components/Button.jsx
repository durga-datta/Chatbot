import React from 'react'

const Button = ({ type = 'button', value, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-gradient-to-r from-blue-500 to-indigo-600 
        dark:from-blue-600 dark:to-purple-700
        hover:from-indigo-600 hover:to-purple-600 
        transition-all duration-300 
        p-3 rounded-full shadow-md hover:shadow-lg 
        active:scale-95 transform active:rotate-3"
    >
      {value}
    </button>
  )
}

export default Button