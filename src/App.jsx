import { useContext, useEffect, useState } from 'react';
import './App.css';
import main from "./gemini/gemini";
import { IoMdSend } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import Button from './components/Button';
import Input from './components/Input';
import { Context } from './context/Context';
import { useForm } from 'react-hook-form';
import { useNavigate, Outlet, useLocation } from 'react-router';
import DarkModeToggle from './components/DarkModeToggle';
import HomeButton from './components/HomeButton';
import ClearChatButton from './components/ClearChatButton';

function App() {
  const val = useContext(Context);
  const { register, handleSubmit, reset, setValue: setFormValue } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  let speech = new speechRecognition();

  speech.onresult = (event)=>{
    let index= event.resultIndex
    let transcript = event.results[index][0].transcript
    let msg = transcript.toLowerCase()
    setFormValue('userInput', msg)
    console.log(msg);
    
}

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );
  
  const handleForm = async (input) => {
    reset();
    navigate('chat');

    val.setChat(prev => [...prev, { type: 'user', message: input.userInput }]);
    val.setChat(prev => [...prev, { type: 'ai', message: 'typing...' }]);

    let ans = await main(input.userInput);

    val.setChat(prev => {
      const updated = [...prev];
      updated[updated.length - 1] = { type: 'ai', message: ans };
      return updated;
    });
  };

  return (
    <div className="w-screen max-h-screen bg-white dark:bg-[#0D1B2A] flex flex-col items-center justify-start p-4 sm:p-6 gap-6 transition-colors duration-300">
    {/* Dark Mode Toggle */}
    <div className="absolute top-4 right-4 z-50">
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  
    {/* Home Button */}
    <div className="absolute top-4 left-4 z-50">
      <HomeButton onClick={() => navigate('/')} />
    </div>
  
    {/* Clear Chat Button - only visible on /chat */}
    <div className={`mt-2 sm:mt-4 ${location.pathname !== '/chat' ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
      <ClearChatButton />
    </div>
  
    {/* Main Content (Chat or Home via Outlet) */}
    <div className="w-full max-w-5xl flex justify-center items-center px-2">
      <Outlet />
    </div>
  
    {/* Chat Input Form */}
    <form
  onSubmit={handleSubmit(handleForm)}
  className="w-full max-w-2xl mt-6 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 
             bg-gray-200 dark:bg-[#1B263B] p-3 rounded-2xl shadow-lg animate-fade-in"
>
  <div className="flex-grow min-w-0">
    <Input {...register('userInput')} placeholder='Ask me anything...' />
  </div>
  <Button type='submit' value={<IoMdSend />} className="flex-shrink-0" />
  <Button onClick={() => speech.start()} value={<MdKeyboardVoice />} className="flex-shrink-0" />
</form>


  </div>
  
  );
}

export default App;
