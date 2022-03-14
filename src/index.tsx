import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import ThemeContext from './context';
import { ThemeType } from "./App";
import PostWithComm from './components/PostWithComments';
import Router from './components/Router';


function Main() {
  const [themeType, setThemeType] = useState<ThemeType>('light')
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{themeType, setThemeType}}>
        <Router/>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>,
  document.getElementById('root')
  
);