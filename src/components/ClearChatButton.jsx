import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { Trash2 } from 'lucide-react'

function ClearChatButton(className) {
  const { setChat } = useContext(Context)

  const handleClear = () => {
    setChat([])
  }

  return (
    <button
      onClick={handleClear}
      className={`group flex items-center gap-2 px-4 py-2 rounded-full 
        bg-gradient-to-br from-red-500 to-pink-500 
        text-white font-medium shadow-lg 
        hover:scale-105 hover:shadow-2xl 
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-4 focus:ring-pink-300
        dark:focus:ring-pink-800  ${className}`}
    >
      <Trash2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
      <span>Clear Chat</span>
    </button>
  )
}

export default ClearChatButton
