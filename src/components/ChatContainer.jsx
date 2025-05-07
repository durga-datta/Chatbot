import React, { useContext, useEffect, useRef } from 'react';
import { Context } from '../context/Context';
import { HiSpeakerWave } from 'react-icons/hi2';

function ChatContainer() {
  const val = useContext(Context);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [val.chat]);

  const speakMessage = (message) => {
    if (!message) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'hi-IN';
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      ref={containerRef}
      className="ChatContainer relative w-full max-w-3xl h-[70vh] overflow-y-auto 
        scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 
        hover:scrollbar-thumb-gray-500 dark:hover:scrollbar-thumb-gray-500 
        scrollbar-track-transparent 
        flex flex-col gap-4 p-4 rounded-2xl bg-white dark:bg-[#1B263B] 
        shadow-2xl border border-gray-200 dark:border-[#324A5F] 
        animate-fade-in transition-colors duration-300"
    >
      {val.chat?.map((value, index) => (
        <div
          key={index}
          className={`group relative px-5 py-3 rounded-2xl text-sm sm:text-base max-w-[85%] sm:max-w-[75%] w-fit break-words 
            transition-all duration-300 ease-in-out
            ${
              value.type === 'ai'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white self-start rounded-bl-none animate-slide-in-left'
                : 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white self-end rounded-br-none animate-slide-in-right'
            }`}
        >
          {value.message === 'typing...' ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
              <span className="text-white">Typing...</span>
            </div>
          ) : (
            value.message
          )}

          {value.message !== 'typing...' && (
            <button
              onClick={() => speakMessage(value.message)}
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white cursor-pointer"
            >
              <HiSpeakerWave size={18} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ChatContainer;
