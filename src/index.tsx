import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import ThemeContext from './context';
import { ThemeType } from "./App";


function Main() {
  const [themeType, setThemeType] = useState<ThemeType>('light')
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{themeType, setThemeType}}>
        <App />
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