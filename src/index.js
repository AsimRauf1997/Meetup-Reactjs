import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';
import App from './App';
import { FavourtiesContextProvider } from './store/favouriteContext';

ReactDOM.render(
  <FavourtiesContextProvider>
     <BrowserRouter>
      <App />
      </BrowserRouter>
  </FavourtiesContextProvider>

    ,
  document.getElementById('root')
);
