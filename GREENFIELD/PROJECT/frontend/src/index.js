import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes/Routes.js'
import GlobalStyle from "./styles/global.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <AppRoutes/>
    <GlobalStyle/>
    </>
  </React.StrictMode>
);
