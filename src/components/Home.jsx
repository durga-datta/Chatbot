import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 max-w-4xl h-[70vh] mx-auto 
                    bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 
                    rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in text-white">
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-wide flex items-center justify-center gap-2 flex-wrap">
          👋 Hello, I am{' '}
          <span className="flex gap-1">
            {'SIFRA'.split('').map((letter, i) => (
              <span
                key={i}
                className="text-cyan-300 animate-bounceLetter"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>
        <p className="text-base sm:text-lg animate-fade-in-delay">
          Ask anything, and I’ll assist you!
        </p>
      </div>
      <div className="mt-6 sm:mt-8 animate-bounce-slow">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712107.png"
          alt="Chatbot Icon"
          className="w-28 h-28 sm:w-40 sm:h-40 object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Home;
