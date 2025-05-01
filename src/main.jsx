import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from "react-router";
import ContextProvider from './context/Context.jsx'
import ChatContainer from './components/ChatContainer.jsx';
import Home from './components/Home.jsx';




createRoot(document.getElementById('root')).render(



  <StrictMode>
  <ContextProvider>
    <BrowserRouter>

   <Routes>
    <Route path='/' element={<App/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='chat' element={<ChatContainer/>}/>
    </Route>
   </Routes>
      </BrowserRouter>
  </ContextProvider>

   
  </StrictMode>,
)
