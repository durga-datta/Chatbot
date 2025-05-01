import React, { createContext, useState } from 'react';
export const Context = createContext();

const ContextProvider = (props) => {
  const [value, setValue] = useState('');
  const [chat, setChat] = useState([]);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  return (
    <Context.Provider value={{ chat, setChat, value, setValue, darkMode, setDarkMode }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
