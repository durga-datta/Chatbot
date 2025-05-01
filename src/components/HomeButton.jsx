import React from 'react';
import { IoIosHome } from "react-icons/io";

const HomeButton = ({...props}) => {
  return (
    <button
    {...props}
     className="p-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white 
      transform hover:scale-110 hover:rotate-12 transition-all duration-300 ease-in-out shadow-xl 
      flex items-center justify-center">
    <IoIosHome  className="w-6 h-6 transform transition-all duration-300 ease-in-out"/>
    </button>
  );
};

export default HomeButton;


