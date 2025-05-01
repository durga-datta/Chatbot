import React from 'react'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] w-11/12 max-w-4xl mx-auto bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 rounded-2xl shadow-2xl p-8 animate-fade-in text-white">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide flex items-center justify-center gap-2">
          👋 Hello, I am{' '}
          <span className="flex gap-1">
            {'S'.split('').map((letter, i) => (
              <span
                key={i}
                className="text-cyan-300 animate-bounceLetter"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {letter}
              </span>
            ))}
            {'I'.split('').map((letter, i) => (
              <span
                key={i}
                className="text-cyan-300 animate-bounceLetter"
                style={{ animationDelay: `${(i + 1) * 0.2}s` }}
              >
                {letter}
              </span>
            ))}
            {'F'.split('').map((letter, i) => (
              <span
                key={i}
                className="text-cyan-300 animate-bounceLetter"
                style={{ animationDelay: `${(i + 2) * 0.2}s` }}
              >
                {letter}
              </span>
            ))}
            {'R'.split('').map((letter, i) => (
              <span
                key={i}
                className="text-cyan-300 animate-bounceLetter"
                style={{ animationDelay: `${(i + 3) * 0.2}s` }}
              >
                {letter}
              </span>
            ))}
            {'A'.split('').map((letter, i) => (
              <span
                key={i}
                className="text-cyan-300 animate-bounceLetter"
                style={{ animationDelay: `${(i + 4) * 0.2}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>
        <p className="text-lg animate-fade-in-delay">
          Ask anything, and I’ll assist you!
        </p>
      </div>
      <div className="mt-8 animate-bounce-slow">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712107.png"
          alt="Chatbot Icon"
          className="w-40 h-40 sm:w-44 sm:h-44 object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  )
}

export default Home
