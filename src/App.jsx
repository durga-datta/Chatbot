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
    <div className="w-screen h-screen bg-white dark:bg-[#0D1B2A] flex items-center justify-center flex-col p-6 gap-6 transition-colors duration-300">
      <div className="absolute top-4 right-4 z-50">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="absolute top-5 left-6 z-50">
        <HomeButton onClick={ ()=> navigate('/')}/>
      </div>
      <div className={`flex justify-center mt-4 ${location.pathname !== '/chat' ? ' opacity-0':null}`}>
  <ClearChatButton />
</div>

      <Outlet />

      <form
        onSubmit={handleSubmit(handleForm)}
        className="w-2/3 mt-6 flex items-center gap-4 bg-gray-200 dark:bg-[#1B263B] p-3 rounded-2xl shadow-lg animate-fade-in"
      >
        <Input {...register('userInput')} placeholder='Ask me anything...' />
        <Button type='submit' value={<IoMdSend />} />
        <Button onClick={()=> speech.start()} value={<MdKeyboardVoice />} />
      </form>
    </div>
  );
}

export default App;
